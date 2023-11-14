package com.datn.api.entity.dto;

import com.datn.api.enums.UserStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PartnersDto {
	private String id;
	private String fullname;
	private String email;
	private String nameOfCompany;
	private String avatar;
	private UserStatus userStatus;
	private String website;
}
