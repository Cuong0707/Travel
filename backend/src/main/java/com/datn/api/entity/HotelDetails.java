package com.datn.api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
	private long hotelDetailID;

	@Column(name = "type_of_room", nullable = false, length = 50)
	private String typeOfRoom;

	@Column(name = "area_of_room", nullable = false)
	private double areaOfRoom;

	@Column(name = "amount_of_room", nullable = false)
	private int amountOfRoom;

	@Column(name = "type_of_bed", nullable = false, length = 50)
	private String TypeOfBed;

	@Column(name = "size_of_bed", nullable = false, length = 50)
	private String SizeOfBed;

	@Column(name = "highlights", nullable = true, length = -1)
	private String highlights;

	@Column(name = "price_of_room", nullable = false, length = 255)
	private String PriceOfRoom;

	@Column(name = "photos_of_room", nullable = false, length = 255)
	private String photosOfRoom;

	@ManyToOne
	@JoinColumn(name = "hotel_id")
	@JsonBackReference
	private Hotels hotels;

	public HotelDetails(long hotelDetailID, String typeOfRoom, double areaOfRoom, int amountOfRoom, String typeOfBed,
			String sizeOfBed, String highlights, String priceOfRoom, String photosOfRoom) {
		this.hotelDetailID = hotelDetailID;
		this.typeOfRoom = typeOfRoom;
		this.areaOfRoom = areaOfRoom;
		this.amountOfRoom = amountOfRoom;
		TypeOfBed = typeOfBed;
		SizeOfBed = sizeOfBed;
		this.highlights = highlights;
		PriceOfRoom = priceOfRoom;
		this.photosOfRoom = photosOfRoom;
	}

}
