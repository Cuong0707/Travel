package com.datn.api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
public class Provinces {
	@Id
	@Column(name = "ProvinceID", nullable = false)
	private int provinceId;

	@Column(name = "NameOfProvince", nullable = false, length = 30)
	private String nameOfProvince;

	@ManyToOne
	@JoinColumn(name = "DistrictID")
	@JsonBackReference
	private Districts districts;
}
