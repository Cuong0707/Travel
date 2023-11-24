package com.datn.api.services;

import com.datn.api.entity.Partners;
import com.datn.api.entity.dto.PartnerRequest;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import com.datn.api.entity.dto.PartnerResponseDto;
>>>>>>> update_entity_v0
>>>>>>> services-test
import com.datn.api.entity.dto.UpdatePartnerAdminRequest;
import org.springframework.stereotype.Service;

@Service
public interface PartnerService {

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    PartnerResponseDto findByUser(String id, Integer pageNumber, Integer pageSize);

>>>>>>> update_entity_v0
>>>>>>> services-test
    Partners create(PartnerRequest partnerRequest);

    Partners updateForAdmin(UpdatePartnerAdminRequest updatePartnerAdminRequest);
}
