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
	private Long id;
	private PartnersDto partners;
	private String name_of_hotel;
	private String type_of_hotel;
	private String standard;
	private Breakfast breakfast;
	private String service_fee;
	@JsonFormat(pattern = "hh:mma dd/MM/yyyy")
	private LocalDateTime checkIn;
	@JsonFormat(pattern = "hh:mma dd/MM/yyyy")
	private LocalDateTime check_out;
	private HotelStatus status;
	private String description;
	private String Children_Policies;
	private String term_And_Policies;
	private Long view;
	private Integer totalBook;
	private List<HotelDetails> hotelDetails;
	private List<PhotosOfHotel> photosOfHotels;
}
