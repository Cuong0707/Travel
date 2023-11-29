package com.datn.api.entity.dto;

import lombok.Data;

@Data
public class HotelDetailsRequest {

    private Long hotelDetailID;

    private Long hotelId;

    private String typeOfRoom;

    private String areaOfRoom;

    private int amountOfRoom;

	private String typeOfBed;

	private String sizeOfBed;

    private String highlights;

	private double priceOfRoom;

    private String photosOfRoom;
}
