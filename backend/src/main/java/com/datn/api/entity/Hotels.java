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
@Table(name = "hotels")
public class Hotels {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "hotel_id", nullable = false)
	private long hotel_ID;

	@ManyToOne
	@JoinColumn(name = "partner_id")
	@JsonBackReference
	private Partners partner;

	@Column(name = "name_of_hotel", nullable = false, length = 50)
	private String nameOfHotel;

	@Column(name = "type_of_hotel", nullable = false, length = 50)
	private String typeOfHotel;

	@Column(name = "standard", nullable = true, length = 5)
	private String standard;

	@Column(name = "status", nullable = true)
	@Enumerated(EnumType.STRING)
	private HotelStatus status;

	@Column(name = "breakfast", nullable = true)
	@Enumerated(EnumType.STRING)
	private Breakfast breakfast;

	@Column(name = "service_fee", nullable = true, length = 5)
	private String serviceFee;

	@Column(name = "check_in", nullable = true)
	private LocalDateTime checkIn;

	@Column(name = "check_out", nullable = true)
	private LocalDateTime checkOut;

	@Column(name = "description", nullable = true)
	private String description;

	@Column(name = "children_policies", nullable = true)
	private String childrenPolicies;

	@Column(name = "term_and_policies", nullable = true)
	private String termAndPolicies;

	@Column(name = "View", nullable = false)
	private Long view;

	@OneToMany(mappedBy = "hotels")
	@JsonManagedReference
	List<HotelDetails> hotelDetails;

	@OneToMany(mappedBy = "hotels")
	@JsonManagedReference
	List<PhotosOfHotel> photosOfHotels;

	public Hotels(long hotelID, Partners partner, String nameOfHotel, String standard, HotelStatus status,
			Breakfast breakfast, String serviceFee, LocalDateTime checkIn, LocalDateTime checkOut, String description,
			String childrenPolicies, String termAndPolicies) {
		this.hotel_ID = hotelID;
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
