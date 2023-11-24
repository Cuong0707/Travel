package com.datn.api.entity.dto;

import lombok.Data;

@Data
public class UpdatePartnerAdminRequest {
    private String partnerId;
    private String status;
}
