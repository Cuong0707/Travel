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
public class Services {
	@Id
	@Column(name = "ServiceID", nullable = false, length = 10)
	private String serviceId;

	@Column(name = "Service", nullable = false, length = 255)
	private String service;

	@OneToMany(mappedBy = "services")
	@JsonManagedReference
	List<Partners> partners;

	public Services(String serviceId, String service) {
		this.serviceId = serviceId;
		this.service = service;
	}

}
