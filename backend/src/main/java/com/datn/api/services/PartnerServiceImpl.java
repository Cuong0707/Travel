package com.datn.api.services;


import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.datn.api.entity.Partners;
import com.datn.api.entity.Users;
import com.datn.api.entity.dto.PartnerRequest;
import com.datn.api.entity.dto.PartnerResponseDto;
import com.datn.api.entity.dto.PartnersDto;
import com.datn.api.entity.dto.UpdatePartnerAdminRequest;
import com.datn.api.enums.PartnerStatus;
import com.datn.api.enums.Role;
import com.datn.api.repository.PartnerRepository;
import com.datn.api.repository.ServicesRepository;
import com.datn.api.repository.UsersRepository;


@Component
public class PartnerServiceImpl implements PartnerService{
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    PartnerRepository partnerRepository;

    @Autowired
    ServicesRepository servicesRepository;

    @Autowired
    UsersService usersService;


    @Autowired
    ModelMapper modelMapper;

    @Override
    public PartnerResponseDto findByUser(String id, Integer pageNumber, Integer pageSize){
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        Users users = usersRepository.findById(id).orElseThrow();
        Page<Partners> listPartner = partnerRepository.findByUser(users, pageable);

        // get content for page object
        List<Partners> partners = listPartner.getContent();

        List<PartnersDto> content = partners.stream().map(partner -> this.partnerDto(partner)).collect(Collectors.toList());
        PartnerResponseDto partnerResponseDto = new PartnerResponseDto();
        partnerResponseDto.setContent(content);
        partnerResponseDto.setPageNumber(listPartner.getNumber());
        partnerResponseDto.setPageSize(listPartner.getSize());
        partnerResponseDto.setTotalElements(listPartner.getTotalElements());
        partnerResponseDto.setTotalPages(listPartner.getTotalPages());
        partnerResponseDto.setLastPage(listPartner.isLast());
        return partnerResponseDto;
    }


    @Override
    public Partners create(PartnerRequest partnerRequest){
        if(!checkEmail(partnerRequest.getEmail())){
            throw new RuntimeException("Email already exists");
        }
       try {
           Partners partner = new Partners();
           partner.setPartnerId(UUID.randomUUID().toString());
           partner.setUser(usersRepository.findById(partnerRequest.getUserId()).orElseThrow(()->new RuntimeException("Not found userId"+partnerRequest.getUserId())));
           partner.setServices(servicesRepository.findById(partnerRequest.getServiceId()).orElseThrow(()-> new RuntimeException("Not found serviceId"+partnerRequest.getServiceId())));
           partner.setEmail(partnerRequest.getEmail());
           partner.setNameOfCompany(partnerRequest.getNameOfCompany());
           partner.setTaxCode(partnerRequest.getTaxCode());
           partner.setAvatarOfCompany(partnerRequest.getAvatarOfCompany());
           partner.setWebsite(partnerRequest.getWebsite());
           partner.setBusinessLicense(partnerRequest.getBusinessLicense());
           partner.setStatus(PartnerStatus.pending);
           return partnerRepository.save(partner);
       }catch (Exception e){
           throw new RuntimeException("Create partner error "+e.getMessage());
       }
    }
    @Override
    public Partners updateForAdmin(UpdatePartnerAdminRequest updatePartnerAdminRequest){
        Partners partnerCheck = partnerRepository.findById(updatePartnerAdminRequest.getPartnerId()).orElseThrow(()->new RuntimeException("Not found partnerId"+updatePartnerAdminRequest.getPartnerId()));
        Users user =usersRepository.findById(partnerCheck.getUser().getUserID()).orElseThrow(()->new RuntimeException("Not found userId"+partnerCheck.getUser().getUserID()));
        try {
            if(updatePartnerAdminRequest.getStatus().equals("success")){
                partnerCheck.setStatus(PartnerStatus.success);
                user.setRole(Role.partner);
                usersService.updateStatusAndRoleForAdmin(user);
            }else if(updatePartnerAdminRequest.getStatus().equals("refunded")){
				partnerCheck.setStatus(PartnerStatus.refused);
            }else {
                partnerCheck.setStatus(PartnerStatus.pending);
            }
            return partnerRepository.save(partnerCheck);
        }catch (Exception e){
            throw new RuntimeException("Update partner error "+e.getMessage());
        }
    }
    public boolean checkEmail(String email){
        var userCheck = usersRepository.findByEmailAndPasswordNotNull(email).orElse(null);
        var partnerCheck = partnerRepository.findByEmail(email).orElse(null);
        return userCheck == null && partnerCheck == null;
    }

    public PartnersDto partnerDto(Partners partners) {
        return modelMapper.map(partners, PartnersDto.class);
    }
}
