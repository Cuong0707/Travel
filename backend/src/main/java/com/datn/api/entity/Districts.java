package com.datn.api.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
public class Districts {
	@Id
	@Column(name = "DistrictID", nullable = false)
	private int districtID;

	@Column(name = "NameOfDistrict", nullable = false, length = 30)
	private String nameOfDistrict;

	@OneToMany(mappedBy = "districts")
	@JsonManagedReference
	List<Provinces> provinces;

	@OneToMany(mappedBy = "districts")
	@JsonManagedReference
	List<Users> users;
}
