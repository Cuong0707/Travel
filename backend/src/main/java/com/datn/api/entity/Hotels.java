package com.datn.api.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.datn.api.enums.Breakfast;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Hotels {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "HotelID", nullable = false)
	private int hotelId;

	@Column(name = "NameOfHotel", nullable = false, length = 50)
	private String nameOfHotel;

	@Column(name = "Standard", nullable = true, length = 5)
	private String standard;

	@Column(name = "Breakfast", nullable = true)
	@Enumerated(EnumType.STRING)
	private Breakfast breakfast;

	@Column(name = "ServiceFee", nullable = true, length = 5)
	private String serviceFee;

	@Column(name = "Check_in", nullable = true)
	private LocalDateTime checkIn;

	@Column(name = "Check_out", nullable = true)
	private LocalDateTime checkOut;

	@Column(name = "Describe", nullable = true)
	private String describe;

	@Column(name = "ChildrenPolicies", nullable = false)
	private String childrenPolicies;

	@Column(name = "TermAndPolicies", nullable = false)
	private String termAndPolicies;

	@ManyToOne
	@JoinColumn(name = "PartnerID")
	@JsonBackReference
	private Partners partners;

	@OneToMany(mappedBy = "hotels")
	@JsonManagedReference
	List<HotelDetails> hotelDetails;

	@OneToMany(mappedBy = "hotels")
	@JsonManagedReference
	List<PhotosOfHotel> photosOfHotels;

	public Hotels(int hotelId, String nameOfHotel, String standard, Breakfast breakfast, String serviceFee,
			LocalDateTime checkIn, LocalDateTime checkOut, String describe, String childrenPolicies,
			String termAndPolicies) {
		this.hotelId = hotelId;
		this.nameOfHotel = nameOfHotel;
		this.standard = standard;
		this.breakfast = breakfast;
		this.serviceFee = serviceFee;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.describe = describe;
		this.childrenPolicies = childrenPolicies;
		this.termAndPolicies = termAndPolicies;
	}

}
