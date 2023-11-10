package com.datn.api.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.datn.api.enums.Breakfast;
import com.datn.api.enums.HotelStatus;
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
	private long hotelID;

	@ManyToOne
	@JoinColumn(name = "PartnerID")
	@JsonBackReference
	private Partners partner;
	

	@Column(name = "NameOfHotel", nullable = false, length = 50)
	private String nameOfHotel;
	
	@Column(name = "TypeOfHotel", nullable = false, length = 50)
	private String typeOfHotel;

	@Column(name = "Standard", nullable = true, length = 5)
	private String standard;

	@Column(name = "Status", nullable = true)
	@Enumerated(EnumType.STRING)
	private HotelStatus status;

	@Column(name = "Breakfast", nullable = true)
	@Enumerated(EnumType.STRING)
	private Breakfast breakfast;

	@Column(name = "ServiceFee", nullable = true, length = 5)
	private String serviceFee;

	@Column(name = "Check_In", nullable = true)
	private LocalDateTime checkIn;

	@Column(name = "Check_Out", nullable = true)
	private LocalDateTime checkOut;

	@Column(name = "Description", nullable = true)
	private String description;

	@Column(name = "ChildrenPolicies")
	private String childrenPolicies;

	@Column(name = "TermAndPolicies")
	private String termAndPolicies;

	@Column(name = "View", nullable = false)
	private Long view;

	@OneToMany(mappedBy = "hotels")
	@JsonManagedReference
	List<HotelDetails> hotelDetails;

	@OneToMany(mappedBy = "hotels")
	@JsonManagedReference
	List<PhotosOfHotel> photosOfHotels;

	public Hotels(int hotelID, Partners partner, String nameOfHotel, String standard, HotelStatus status,
			Breakfast breakfast, String serviceFee, LocalDateTime checkIn, LocalDateTime checkOut, String description,
			String childrenPolicies, String termAndPolicies) {
		this.hotelID = hotelID;
		this.partner = partner;
		this.nameOfHotel = nameOfHotel;
		this.standard = standard;
		this.status = status;
		this.breakfast = breakfast;
		this.serviceFee = serviceFee;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.description = description;
		this.childrenPolicies = childrenPolicies;
		this.termAndPolicies = termAndPolicies;
	}

}
