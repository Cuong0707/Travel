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
public class PhotosOfHotel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PhotosOfHotelID", nullable = false)
	private int photosOfHotelID;

	@Column(name = "NameOfPhoto", nullable = false, length = 50)
	private String nameOfPhoto;

	@Column(name = "Image", nullable = false, length = 50)
	private String image;

	@ManyToOne
	@JoinColumn(name = "HotelID")
	@JsonBackReference
	private Hotels hotels;
}
