package com.datn.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.datn.api.entity.dto.HotelDto;
import com.datn.api.entity.dto.HotelResponseDto;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.services.HotelServiceImpl;

@RestController
@RequestMapping("/api/v1/hotels")
public class HotelController {
	@Autowired
	HotelServiceImpl hotelService;

	@GetMapping("")
	public ApiResponse<HotelResponseDto> getAllHotels(
            @RequestParam(value = "q", defaultValue = "", required = false) String keywords,
            @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
            @RequestParam(value = "pageSize", defaultValue = "8", required = false) Integer pageSize){
				return ApiResponse.success(HttpStatus.OK, "success",hotelService.getAllHotels(pageNumber, pageSize));
	}

	@GetMapping("/increase-view/{id}")
	public ApiResponse<?> increaseViews(@PathVariable("id") Long id) {
		hotelService.autoIncreaseViews(id);
		return ApiResponse.success(HttpStatus.OK, "View đã tăng", null);
	}

	@GetMapping("/{id}")
	public ApiResponse<HotelDto> getHotel(@PathVariable("id") Long id) {
		HotelDto hotel = hotelService.findById(id);
		String successMessage = "Tìm thấy hotel có id " + id;
		return ApiResponse.success(HttpStatus.OK, successMessage, hotel);
	}

	@PutMapping("/{hotelID}")
	@PreAuthorize("hasAnyAuthority('PARTNER','ADMIN')")
	public ApiResponse<HotelDto> updateHotel(@RequestBody HotelDto hotelDto, @PathVariable Long hotelID) {
		HotelDto updateHotel = hotelService.update(hotelDto, hotelID);
		String successMessage = "updated success";
		return ApiResponse.success(HttpStatus.OK, successMessage, updateHotel);
	}

	@DeleteMapping("/{hotelID}")
	@PreAuthorize("hasAnyAuthority('PARTNER','ADMIN')")
	public ApiResponse<HotelDto> deleteHotel(@PathVariable("hotelID") Long hotelID) {
		hotelService.delete(hotelID);
		String successMessage = "DELETED!";
		return ApiResponse.success(HttpStatus.OK, successMessage, null);
	}

	@GetMapping("/search")
	public ApiResponse<HotelResponseDto> search(
			@RequestParam(value = "q", defaultValue = "", required = false) String keywords,
			@RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
			@RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize) {
		return ApiResponse.success(HttpStatus.OK, "sucesss",
				hotelService.findByKeywords(pageNumber, pageSize, keywords));
	}

}
