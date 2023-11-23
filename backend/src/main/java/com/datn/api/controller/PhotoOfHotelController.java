package com.datn.api.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.datn.api.entity.PhotosOfHotel;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.repository.HotelsRepository;
import com.datn.api.repository.PhotosOfHotelRepository;
import com.datn.api.services.ImageStorageService;

@RestController
@RequestMapping("/api/v1/photos-of-hotel")
public class PhotoOfHotelController {
    @Autowired
    PhotosOfHotelRepository photosOfHotelRepository;
    @Autowired
    ImageStorageService storageService;

    @Autowired
    HotelsRepository hotelsRepository;
    @PostMapping("/hotels/{id}")

    public ApiResponse<?> create(@PathVariable Long id, @RequestParam List<MultipartFile> files){
       List<PhotosOfHotel> photosOfHotels = new ArrayList<>();
        for(int i=0;i<files.size();i++){
            PhotosOfHotel photosOfHotel = new PhotosOfHotel();

            photosOfHotel.setHotels(hotelsRepository.findById(id).orElseThrow());

            photosOfHotel.setNameOfPhoto("Hinh"+i);
            photosOfHotel.setImage(storageService.storeFile(files.get(i)).toString());
            photosOfHotels.add(photosOfHotelRepository.save(photosOfHotel));
        }
        return ApiResponse.success(HttpStatus.OK,"success",photosOfHotels);
    }

    @PutMapping("/{id}")
    public ApiResponse<?> update(@PathVariable Long id, @RequestParam MultipartFile files){
        PhotosOfHotel photosOfHotel = photosOfHotelRepository.findById(id).orElseThrow();
        photosOfHotel.setImage(storageService.storeFile(files).toString());
        return ApiResponse.success(HttpStatus.OK,"success",photosOfHotel);
    }

    @DeleteMapping("/{id}")
    public ApiResponse<?>delete(@PathVariable Long id){
       try {
           photosOfHotelRepository.delete(photosOfHotelRepository.findById(id).orElseThrow());
        return ApiResponse.success(HttpStatus.OK,"success",null);
       }catch (Exception e){
           throw e;
       }
    }
}

