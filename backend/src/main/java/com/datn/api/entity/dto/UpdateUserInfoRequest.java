package com.datn.api.entity.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class UpdateUserInfoRequest {
    private String fullname;
    private String avatar;
    private String phone_number;
    private LocalDate birthday;
    private String address;
    private Long district;
}
