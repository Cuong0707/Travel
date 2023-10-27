package com.datn.api.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Partners {
	@Id
	@Column(name = "PartnerID", nullable = false, length = 10)
	private String partnerId;

	@Column(name = "NameOfCompany", nullable = false, length = 255)
	private String nameOfCompany;

	@Column(name = "TaxCode", nullable = false, length = 10)
	private String taxCode;

	@Column(name = "AvatarOfCompany", nullable = false, length = 50)
	private String avatarOfCompany;

	@Column(name = "BusinessLicense", nullable = false, length = 50)
	private String businessLicense;

	@Column(name = "Website", nullable = true, length = -1)
	private String website;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "AccountId")
	@JsonBackReference
	private Users accountId;

	@ManyToOne
	@JoinColumn(name = "ServiceID")
	@JsonBackReference
	private Services services;

	@OneToMany(mappedBy = "partners")
	@JsonManagedReference
	List<Orders> orders;

	@OneToMany(mappedBy = "partners")
	@JsonManagedReference
	List<Hotels> hotels;

	public Partners(String partnerId, String nameOfCompany, String taxCode, String avatarOfCompany,
			String businessLicense, String website) {
		this.partnerId = partnerId;
		this.nameOfCompany = nameOfCompany;
		this.taxCode = taxCode;
		this.avatarOfCompany = avatarOfCompany;
		this.businessLicense = businessLicense;
		this.website = website;
	}

}
