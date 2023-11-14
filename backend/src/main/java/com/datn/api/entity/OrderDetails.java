package com.datn.api.entity;

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
public class OrderDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "OrderDetailID", nullable = false)
	private int orderDetailId;

	@Column(name = "AmountOfRoom", nullable = false)
	private int amountOfRoom;

	@ManyToOne
	@JoinColumn(name = "OrderID")
	@JsonBackReference
	private Orders orders;

	@ManyToOne
	@JoinColumn(name = "HotelDetailId")
	@JsonBackReference
	private HotelDetails hotelDetails;
}
