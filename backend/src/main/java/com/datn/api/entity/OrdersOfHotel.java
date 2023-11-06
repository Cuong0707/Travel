package com.datn.api.entity;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class OrdersOfHotel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "OrderHotelID", nullable = false)
	private int orderHotelID;

	@Column(name = "AmountOfRoom", nullable = false, columnDefinition = "int default 1")
	private int amountOfRoom;

	@Column(name = "AmountOfPeople", nullable = false)
	private int amountOfPeople;

	@Column(name = "AmountOfChildren", nullable = true)
	private int amountOfChildren;

	@Column(name = "CheckInDate", nullable = false)
	private LocalDateTime checkInDate;

	@Column(name = "LengthOfStay", nullable = false, columnDefinition = "int default 1")
	private int lengthOfStay;

	@Column(name = "OriginalPrice", nullable = false)
	private double originalPrice;

	@Column(name = "PromotionPrice", nullable = false)
	private double promotionPrice;

	@ManyToOne
	@JoinColumn(name = "OrderID")
	@JsonBackReference
	private Orders orders;

	@ManyToOne
	@JoinColumn(name = "HotelDetailID")
	@JsonBackReference
	private HotelDetails hotelDetails;
}
