package com.datn.api.entity.dto;

import java.time.LocalDate;

import com.datn.api.enums.Role;
import com.datn.api.enums.UserStatus;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UsersDto {
	private String userID;
	private String fullname;
	private String email;
	private String password;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate birthday;
	private String phoneNumber;
	private String avatar;
	private UserStatus status;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate registrationDate;
	private Role role;
}
