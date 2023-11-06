package com.datn.api.entity.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrdersOfHotel {
	private int id;
	private int orderID;
	private int hotelDetailID;
	private int amountOfRoom;
	private int numberOfPeople;
	private int numberOfChildren;
	@JsonFormat(pattern = "hh:mma dd/MM/yyyy")
	private LocalDateTime checkIn;
	private int lengthOfStay;
	private double originalPrice;
	private double promotionPrice;
}
