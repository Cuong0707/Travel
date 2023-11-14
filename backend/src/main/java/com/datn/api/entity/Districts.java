package com.datn.api.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
@Table(name = "districts")
public class Districts {
	@Id
	@Column(name = "district_id", nullable = false)
	private long districtID;

	@Column(name = "name_of_district", nullable = false, length = 30)
	private String nameOfDistrict;

	@OneToMany(mappedBy = "districts")
	@JsonManagedReference
	List<Provinces> provinces;

	@OneToMany(mappedBy = "districts")
	@JsonManagedReference
	List<Users> users;
}
