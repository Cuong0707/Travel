package com.datn.api.services;

import com.datn.api.entity.Partners;
import com.datn.api.entity.dto.PartnerRequest;
import com.datn.api.entity.dto.UpdatePartnerAdminRequest;
import org.springframework.stereotype.Service;

@Service
public interface PartnerService {

    Partners create(PartnerRequest partnerRequest);

    Partners updateForAdmin(UpdatePartnerAdminRequest updatePartnerAdminRequest);
}
