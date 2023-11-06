package com.datn.api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
public class Admins {
	@Id
	@Column(name = "AdminID", nullable = false, length = 10)
	private String adminID;

	@Column(name = "NameOfAdmin", nullable = false, length = 50)
	private String nameOfAdmin;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "UserID")
	@JsonBackReference
	private Users users;
}
