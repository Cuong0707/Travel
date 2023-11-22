package com.datn.api.controller;

import com.datn.api.entity.dto.HotelDetailDto;
import com.datn.api.entity.dto.HotelResponseDto;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.services.UsersService;
import com.datn.api.services.UsersServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
//    @Autowired
//    UsersServiceImpl usersService;
//    @GetMapping("/partners/{id}/hotels")
//    public ApiResponse<?> getAllHotels(
//            @PathVariable String id,
//            @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
//            @RequestParam(value = "pageSize", defaultValue = "8", required = false) Integer pageSize,
//            @RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir,
//            @RequestParam(value = "sortBy", defaultValue = "nameOfHotel", required = false) String sortBy
//    ){
//     return   usersService.getUsersOfHotel(id);
//    }

//    @GetMapping("/{id}")
//    public ApiResponse<?> getOneUser(@PathVariable String id){
//
//    }
}
