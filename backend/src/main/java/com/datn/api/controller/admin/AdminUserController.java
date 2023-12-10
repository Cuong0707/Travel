package com.datn.api.controller.admin;

import com.datn.api.entity.dto.HotelResponseDto;
import com.datn.api.entity.dto.UpdateStatusUserForAdminRequest;
import com.datn.api.entity.dto.UsersDto;
import com.datn.api.enums.UserStatus;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.services.OrdersService;
import com.datn.api.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/admins/users")
@PreAuthorize("hasAuthority('admin')")
public class AdminUserController {
    @Autowired
    OrdersService ordersService;
    @Autowired
    UsersService usersService;
    @GetMapping("")
    public ApiResponse<?> getAllUsers(
            @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize,
            @RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir,
            @RequestParam(value = "sortBy", defaultValue = "fullname", required = false) String sortBy
    ){
        return ApiResponse.success(HttpStatus.OK, "success",usersService.getAllUsers(pageNumber, pageSize,sortDir,sortBy));
    }
    @GetMapping("/{id}")
    public ApiResponse<?> getUser(@PathVariable("id")String id){
        return ApiResponse.success(HttpStatus.OK, "success",usersService.usersToDto(usersService.findByIdUser(id)));
    }

    @PutMapping("/{id}")
    public ApiResponse<?> updateStatusUser(@PathVariable String id){
        return ApiResponse.success(HttpStatus.OK,"Update success",usersService.updateStatusForAdmin(id));
    }
}
