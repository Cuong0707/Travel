package com.datn.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datn.api.entity.dto.UsersDto;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.services.UsersServiceImpl;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
	@Autowired
	UsersServiceImpl usersService;

	@GetMapping("/token/{token}")
	public ApiResponse<UsersDto> getUser(@PathVariable("token") String token) {
		return ApiResponse.success(HttpStatus.OK, "success", usersService.getUserWithToken(token));
	}

	@PutMapping("/update")
	public ApiResponse<?> update(@RequestBody UsersDto usersDto) {
		try {
			UsersDto user = usersService.updateForUser(usersDto);
			return ApiResponse.success(HttpStatus.OK, "Update success", user);
		} catch (Exception e) {
			return ApiResponse.error(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}
}
