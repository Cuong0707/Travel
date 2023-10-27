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
public class HotelDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "HotelDetailID", nullable = false)
	private int hotelDetailId;

	@Column(name = "TypeOfRoom", nullable = false, length = 50)
	private String typeOfRoom;

	@Column(name = "AreaOfRoom", nullable = false)
	private double areaOfRoom;

	@Column(name = "AmountOfRoom", nullable = false)
	private int amountOfRoom;

	@Column(name = "TypeOfBed", nullable = false, length = 50)
	private String TypeOfBed;

	@Column(name = "SizeOfBed", nullable = false, length = 50)
	private String SizeOfBed;

	@Column(name = "Highlights", nullable = true, length = -1)
	private String highlights;

	@Column(name = "PriceOfRoom", nullable = false, length = 255)
	private String PriceOfRoom;

	@Column(name = "PhotosOfRoom", nullable = false, length = 255)
	private String photosOfRoom;

	@ManyToOne
	@JoinColumn(name = "HotelID")
	@JsonBackReference
	private Hotels hotels;

	public HotelDetails(int hotelDetailId, String typeOfRoom, double areaOfRoom, int amountOfRoom, String typeOfBed,
			String sizeOfBed, String highlights, String priceOfRoom, String photosOfRoom) {
		this.hotelDetailId = hotelDetailId;
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
