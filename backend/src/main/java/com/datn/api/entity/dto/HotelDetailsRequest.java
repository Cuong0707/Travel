package com.datn.api.entity.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class HotelDetailsRequest {

    private Long hotelDetailID;

    private Long hotelId;

    private String typeOfRoom;

    private String areaOfRoom;

    private int amountOfRoom;

    private String TypeOfBed;

    private String SizeOfBed;

    private String highlights;

    private String PriceOfRoom;

    private String photosOfRoom;
}
