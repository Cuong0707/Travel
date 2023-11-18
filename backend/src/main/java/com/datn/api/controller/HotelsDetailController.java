package com.datn.api.controller;

import com.datn.api.entity.dto.HotelDetailsRequest;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.services.HotelDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/{id}")
    public ApiResponse<?>getOne(@PathVariable Long id){
        return ApiResponse.success(HttpStatus.OK,"success",hotelDetailService.getOneHotelDetail(id));
    }
    @PostMapping()
    public ApiResponse<?> create(@RequestBody HotelDetailsRequest hotelDetailsRequest){
        return ApiResponse.success(HttpStatus.OK,"create success",hotelDetailService.createHotelsDetail(hotelDetailsRequest));
    }
    @PutMapping()
    public ApiResponse<?> update(@RequestBody HotelDetailsRequest hotelDetailsRequest){
        return ApiResponse.success(HttpStatus.OK,"update success",hotelDetailService.updateHotelsDetail(hotelDetailsRequest));
    }
}
