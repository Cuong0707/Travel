package com.datn.api.services;

import java.time.LocalDate;

import org.springframework.stereotype.Component;

import com.datn.api.entity.dto.NumberRegister;
import com.datn.api.entity.dto.UserResponse;
import com.datn.api.entity.dto.UsersDto;

@Component
public interface UsersService extends IService<UsersDto, String> {
	UserResponse getAllUsers(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	UsersDto updateForAdmin(String id, UsersDto usersDto);

	UsersDto getUserWithToken(String token);

	UsersDto findUserForAdmin(String id);

	NumberRegister numberRegister(LocalDate startDate, LocalDate endDate);

	Integer numberRegisterNow();

//	List<HotelsDto> getTopViewHotel();

}
