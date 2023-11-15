package com.datn.api.services;

import java.util.List;

import org.springframework.stereotype.Component;

import com.datn.api.entity.dto.HotelDto;
import com.datn.api.entity.dto.HotelResponseDto;

@Component
public interface HotelService extends IService<HotelDto, Long> {
	//HotelResponseDto getAllHotels(Integer pageNumber, Integer pageSize, String sortBy, String sortDir);

	List<HotelDto> findAllHotelsByProvince(String provinceID);

	Integer sumHotelsViewOfUser(String id);

	Integer numberOrderOfHotel(String id);

	HotelResponseDto findByKeywords(Integer pageNumber, Integer pageSize, String keywords);

	HotelResponseDto getAllHotels(Integer pageNumber, Integer pageSize);
}
