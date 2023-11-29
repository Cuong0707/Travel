package com.datn.api.services;

import org.springframework.stereotype.Service;

import com.datn.api.entity.HotelDetails;
import com.datn.api.entity.dto.HotelDetailDto;
import com.datn.api.entity.dto.HotelDetailResponse;
import com.datn.api.entity.dto.HotelDetailsRequest;

@Service
public interface HotelDetailService {

    HotelDetails createHotelsDetail(HotelDetailsRequest hotelDetailsRequest);

    HotelDetails updateHotelsDetail(HotelDetailsRequest hotelDetailsRequest);

    HotelDetailResponse getAllHotelDetail(Integer pageNumber, Integer pageSize, String sortDir, String sortBy);

    HotelDetailDto getOneHotelDetail(Long id);

	boolean deleteHotelDetail(Long id);
}
