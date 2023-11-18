package com.datn.api.controller;

import com.datn.api.exceptions.ApiResponse;
import com.datn.api.repository.PartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/partners")
public class PartnerController {
    @Autowired
    PartnerRepository partnerRepository;

    @GetMapping("/{id}")
    public ApiResponse<?> getOnePartner(@PathVariable("id") String id) {
        return ApiResponse.success(HttpStatus.OK, "Success", partnerRepository.findById(id));
    }
}
