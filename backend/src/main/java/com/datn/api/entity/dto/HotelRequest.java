package com.datn.api.entity.dto;

import com.datn.api.enums.Breakfast;
import com.datn.api.enums.HotelStatus;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class HotelRequest {
    private Long hotelId;
    private String partnerId;
    private Long provinceId;
    private String nameOfHotel;
    private String typeOfHotel;
    private String standard;
    private HotelStatus status;
    private Breakfast breakfast;
    private String serviceFee;
    private LocalDateTime checkIn;
    private LocalDateTime checkOut;
    private String description;
    private String childrenPolicies;
    private String termAndPolicies;
}
