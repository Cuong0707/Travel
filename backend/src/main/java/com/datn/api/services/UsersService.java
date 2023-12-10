package com.datn.api.services;

import java.time.LocalDate;
import java.util.List;

import com.datn.api.entity.Users;
import com.datn.api.entity.dto.PartnersDto;
import com.datn.api.enums.UserStatus;
import org.springframework.stereotype.Component;

import com.datn.api.entity.dto.NumberRegister;
import com.datn.api.entity.dto.UserResponse;
import com.datn.api.entity.dto.UsersDto;
import org.springframework.web.multipart.MultipartFile;

@Component
public interface UsersService extends IService<UsersDto, String> {
	UserResponse getAllUsers(Integer pageNumber, Integer pageSize,  String sortDir,String sortBy);

	UsersDto updateForAdmin(String id, UsersDto usersDto);

	UsersDto getUserWithToken(String token);

    List<PartnersDto> findByKeywords(String keywords);

	Users findByIdUser(String id);

	UsersDto findUserForAdmin(String id);

    Users dtoToUsers(UsersDto usersDto);

	UsersDto usersToDto(Users users);

	NumberRegister numberRegister(LocalDate startDate, LocalDate endDate);

	Integer numberRegisterNow();


	Users updateStatusAndRoleForAdmin(Users users);

	UsersDto updateStatusForAdmin(String id);

	Users updateAvatarForUser(MultipartFile file);

	Users updateAvatarForAdmin(String id, MultipartFile file);

//	List<HotelsDto> getTopViewHotel();

}
