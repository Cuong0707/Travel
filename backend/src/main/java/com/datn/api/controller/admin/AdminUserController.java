package com.datn.api.controller.admin;

import com.datn.api.exceptions.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/admin")
@PreAuthorize("hasAuthority('admin')")
public class AdminUserController {
    @PostMapping("")
    public ApiResponse<?>test(){
        return ApiResponse.success(HttpStatus.OK,"test","e");
    }
}
