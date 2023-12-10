package com.datn.api.services;


import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import com.datn.api.entity.Hotels;
import com.datn.api.entity.dto.*;
import com.datn.api.enums.HotelStatus;
import com.datn.api.exceptions.DuplicateRecordException;
import com.datn.api.exceptions.Exception;
import com.datn.api.exceptions.NotFoundException;
import com.datn.api.repository.HotelsRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.datn.api.entity.Partners;
import com.datn.api.entity.Users;
import com.datn.api.enums.PartnerStatus;
import com.datn.api.enums.Role;
import com.datn.api.repository.PartnerRepository;
import com.datn.api.repository.ServicesRepository;
import com.datn.api.repository.UsersRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class PartnerServiceImpl implements PartnerService{
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    PartnerRepository partnerRepository;
    @Autowired
    HotelsRepository hotelsRepository;
    @Autowired
    ServicesRepository servicesRepository;
    @Autowired
    IStorageService iStorageService;

    @Autowired
    UsersService usersService;


    @Autowired
    ModelMapper modelMapper;

    @Override
    public PartnerResponseDto getAllPartners(Integer pageNumber, Integer pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);

        Page<Partners> partners = partnerRepository.findAll(pageable);

        List<Partners> list = partners.getContent();

        List<PartnersDto> content = list.stream().map(this::partnerDto)
                .collect(Collectors.toList());

        PartnerResponseDto responseDto = new PartnerResponseDto();
        responseDto.setContent(content);
        responseDto.setPageNumber(partners.getNumber());
        responseDto.setPageSize(partners.getSize());
        responseDto.setTotalElements(partners.getTotalElements());
        responseDto.setTotalPages(partners.getTotalPages());
        responseDto.setLastPage(partners.isLast());

        return responseDto;
    }

    @Override
    public Partners findPartnerById(String id){
       return partnerRepository.findById(id).orElseThrow(()-> new NotFoundException("Not found partner with id "+id));
    }
    @Override
    public Partners create(PartnerRequest partnerRequest, MultipartFile image, MultipartFile license){
        String imageFileName = iStorageService.storeFile(image);
        String licenseFileName = iStorageService.storeFile(license);
        if(!checkEmail(partnerRequest.getEmail())){
            throw new DuplicateRecordException("Email already exists");
        }else if( partnerRepository.findByUser(UserCurrent.get()).orElse(null)!=null){
            throw new DuplicateRecordException("Partner already exists");
        }
       try {
           Partners partner = new Partners();
           partner.setPartnerId(UUID.randomUUID().toString());
           partner.setUser(UserCurrent.get());
           partner.setServices(servicesRepository.findById(partnerRequest.getServiceId()).orElseThrow(()-> new RuntimeException("Not found serviceId"+partnerRequest.getServiceId())));
           partner.setEmail(partnerRequest.getEmail());
           partner.setNameOfCompany(partnerRequest.getNameOfCompany());
           partner.setTaxCode(partnerRequest.getTaxCode());
           partner.setAvatarOfCompany(imageFileName);
           partner.setWebsite(partnerRequest.getWebsite());
           partner.setBusinessLicense(licenseFileName);
           partner.setStatus(PartnerStatus.pending);
           return partnerRepository.save(partner);
       }catch (Exception e){
           throw new Exception("Create partner error "+e.getMessage());
       }
    }
    @Override
    public Partners updateForAdmin(String id,UpdatePartnerAdminRequest updatePartnerAdminRequest){
        Partners partnerCheck = findPartnerById(id);
        Users user = usersService.findByIdUser(partnerCheck.getUser().getUserID());
        try {
            if(updatePartnerAdminRequest.getStatus().equals("success")){
                partnerCheck.setStatus(PartnerStatus.success);
                user.setRole(Role.partner);
                usersService.updateStatusAndRoleForAdmin(user);
                Hotels hotels= hotelsRepository.findHotelsByPartner(partnerCheck).orElseThrow(()->new NotFoundException("not found partner"));
                hotels.setStatus(HotelStatus.Available);
                hotelsRepository.save(hotels);
            }else if(updatePartnerAdminRequest.getStatus().equals("refused")){
				partnerCheck.setStatus(PartnerStatus.refused);
            }else if(updatePartnerAdminRequest.getStatus().equals("pending")){
                partnerCheck.setStatus(PartnerStatus.pending);
            }else {
                partnerCheck.setStatus(partnerCheck.getStatus());
            }
            return partnerRepository.save(partnerCheck);
        }catch (Exception e){
            throw new Exception("Update partner error "+e.getMessage());
        }
    }
    public boolean checkEmail(String email){
        var userCheck = usersRepository.findByEmailAndPasswordNotNull(email).orElse(null);
        var partnerCheck = partnerRepository.findByEmail(email).orElse(null);
        return userCheck == null && partnerCheck == null;
    }
    @Override
    public boolean checkPartner(Long hotelId){
        Partners partners= findPartnerByUser(UserCurrent.get());
        return hotelsRepository.checkHotelOfPartner(hotelId, partners) != null;
    }
    @Override
    public Partners findPartnerByUser(Users user){
        return partnerRepository.findByUser(user).orElseThrow(()->new NotFoundException("Not found partner with id"+user.getUserID()));
    }
    public PartnersDto partnerDto(Partners partners) {
        return modelMapper.map(partners, PartnersDto.class);
    }

}
