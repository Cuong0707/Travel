package com.datn.api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "hotel_details")
public class HotelDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "hotel_detail_id", nullable = false)
	private Long hotelDetailID;

	@Column(name = "type_of_room", nullable = false, length = 50)
	private String typeOfRoom;

	@Column(name = "area_of_room", nullable = false)
	private String areaOfRoom;

	@Column(name = "amount_of_room", nullable = false)
	private int amountOfRoom;

	@Column(name = "type_of_bed", nullable = false, length = 50)
	private String TypeOfBed;

	@Column(name = "size_of_bed", nullable = false, length = 50)
	private String SizeOfBed;

	@Column(name = "highlights", nullable = true, length = -1)
	private String highlights;

	@Column(name = "price_of_room", nullable = false)
	private double PriceOfRoom;

	@Column(name = "photos_of_room", nullable = false, length = 255)
	private String photosOfRoom;

	@Column(name = "is_Delete", nullable = false)
	private boolean isDelete;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "hotel_id")
	@JsonBackReference
	private Hotels hotels;



}
