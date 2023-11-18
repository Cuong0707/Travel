package com.datn.api.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "district_id", nullable = false)
	private Long districtID;

	@Column(name = "name_of_district", nullable = false, length = 30)
	private String nameOfDistrict;

	@ManyToOne
	@JoinColumn(name = "province_id")
	@JsonManagedReference
	private Provinces provinces;

	@OneToMany(mappedBy = "districts")
	@JsonManagedReference
	List<Users> users;
}
