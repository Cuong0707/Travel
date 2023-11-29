package com.datn.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.datn.api.entity.dto.HotelDetailsRequest;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.services.HotelDetailService;

@RestController
@RequestMapping("/api/v1/hotels-detail")
public class HotelsDetailController {
    @Autowired
    HotelDetailService hotelDetailService;
    @GetMapping()
    public ApiResponse<?> getAll(@RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
                                 @RequestParam(value = "pageSize", defaultValue = "8", required = false) Integer pageSize,
                                 @RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir,
                                 @RequestParam(value = "sortBy", defaultValue = "typeOfRoom", required = false) String sortBy){
        return ApiResponse.success(HttpStatus.OK, "success",hotelDetailService.getAllHotelDetail(pageNumber,pageSize,sortDir,sortBy));
    }

	@PreAuthorize("hasAnyAuthority('partner','admin')")
    @GetMapping("/{id}")
    public ApiResponse<?>getOne(@PathVariable Long id){
        return ApiResponse.success(HttpStatus.OK,"success",hotelDetailService.getOneHotelDetail(id));
    }

	@PreAuthorize("hasAnyAuthority('partner')")
    @PostMapping()
    public ApiResponse<?> create(@RequestBody HotelDetailsRequest hotelDetailsRequest){
        return ApiResponse.success(HttpStatus.OK,"create success",hotelDetailService.createHotelsDetail(hotelDetailsRequest));
    }

	@PreAuthorize("hasAnyAuthority('partner','admin')")
    @PutMapping()
    public ApiResponse<?> update(@RequestBody HotelDetailsRequest hotelDetailsRequest){
        return ApiResponse.success(HttpStatus.OK,"update success",hotelDetailService.updateHotelsDetail(hotelDetailsRequest));
    }

	@PreAuthorize("hasAnyAuthority('admin')")
	@DeleteMapping("/{hotelDetailID}")
	public ApiResponse<?> deleteHotelDetail(@PathVariable("hotelDetailID") Long hotelID) {
		String successMessage = "DELETED!";
		return ApiResponse.success(HttpStatus.OK, successMessage, hotelDetailService.deleteHotelDetail(hotelID));
	}

}
