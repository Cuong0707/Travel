package com.datn.api.entity.dto;

import java.time.LocalDateTime;
import java.time.LocalTime;

import com.datn.api.enums.Breakfast;
import com.datn.api.enums.HotelStatus;

import lombok.Data;

@Data
public class HotelRequest {
	private Long districtId;
    private String nameOfHotel;
    private String typeOfHotel;
    private String standard;
    private HotelStatus status;
    private Breakfast breakfast;
    private String serviceFee;
    private LocalTime checkIn;
    private LocalTime checkOut;
	private String address;
    private String description;
    private String childrenPolicies;
    private String termAndPolicies;
}
