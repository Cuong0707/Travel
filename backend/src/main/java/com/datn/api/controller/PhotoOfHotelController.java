package com.datn.api.controller;

import com.datn.api.entity.PhotosOfHotel;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.repository.PhotosOfHotelRepository;
import com.datn.api.services.ImageStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/hotels-detail")
public class PhotoOfHotelController {
    @Autowired
    PhotosOfHotelRepository photosOfHotelRepository;
    @Autowired
    ImageStorageService storageService;
    @PostMapping("hotels/{id}")
    public ApiResponse<?> create(@PathVariable Long id, @RequestParam List<MultipartFile> files){
       List<PhotosOfHotel> photosOfHotels = new ArrayList<>();
        for(int i=0;i<files.size();i++){
            PhotosOfHotel photosOfHotel = new PhotosOfHotel();
            photosOfHotel.setNameOfPhoto("Hinh"+i);
            photosOfHotel.setImage(storageService.storeFile(files.get(i)).toString());
            photosOfHotels.add(photosOfHotelRepository.save(photosOfHotel));
        }
        return ApiResponse.success(HttpStatus.OK,"success",photosOfHotels);
    }
}
