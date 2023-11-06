package com.datn.api.entity.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.datn.api.entity.HotelDetails;
import com.datn.api.entity.PhotosOfHotel;
import com.datn.api.enums.Breakfast;
import com.datn.api.enums.HotelStatus;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class HotelDto {
	private int id;
	private PartnersDto partners;
	private String nameOfHotel;
	private String typeOfHotel;
	private String standard;
	private Breakfast breakfast;
	private String serviceFee;
	@JsonFormat(pattern = "hh:mma dd/MM/yyyy")
	private LocalDateTime checkIn;
	@JsonFormat(pattern = "hh:mma dd/MM/yyyy")
	private LocalDateTime checkOut;
	private HotelStatus status;
	private String description;
	private String childrenPolicies;
	private String termAndPolicies;
	private Long view;
	private Integer totalBook;
	private List<HotelDetails> hotelDetails;
	private List<PhotosOfHotel> photosOfHotels;
}
