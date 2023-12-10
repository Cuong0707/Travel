package com.datn.api.services;

import com.datn.api.entity.Users;
import com.datn.api.entity.dto.UserResponse;
import org.springframework.stereotype.Service;

import com.datn.api.entity.Partners;
import com.datn.api.entity.dto.PartnerRequest;
import com.datn.api.entity.dto.PartnerResponseDto;
import com.datn.api.entity.dto.UpdatePartnerAdminRequest;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface PartnerService {



    PartnerResponseDto getAllPartners(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

    Partners findPartnerById(String id);

    Partners create(PartnerRequest partnerRequest, MultipartFile image, MultipartFile license);

    Partners updateForAdmin(String id,UpdatePartnerAdminRequest updatePartnerAdminRequest);

    boolean checkPartner(Long hotelId);

    Partners findPartnerByUser(Users user);
}
