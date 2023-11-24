package com.datn.api.services;

import org.springframework.stereotype.Service;

import com.datn.api.entity.Partners;
import com.datn.api.entity.dto.PartnerRequest;
import com.datn.api.entity.dto.PartnerResponseDto;
import com.datn.api.entity.dto.UpdatePartnerAdminRequest;

@Service
public interface PartnerService {


    PartnerResponseDto findByUser(String id, Integer pageNumber, Integer pageSize);

    Partners create(PartnerRequest partnerRequest);

    Partners updateForAdmin(UpdatePartnerAdminRequest updatePartnerAdminRequest);
}
