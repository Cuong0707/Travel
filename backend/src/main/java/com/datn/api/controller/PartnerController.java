package com.datn.api.controller;

import com.datn.api.entity.dto.PartnerRequest;
import com.datn.api.entity.dto.UpdatePartnerAdminRequest;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.repository.PartnerRepository;
import com.datn.api.services.PartnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/partners")
public class PartnerController {
    @Autowired
    PartnerRepository partnerRepository;
    @Autowired
    PartnerService partnerService;
    @GetMapping("/{id}")
    public ApiResponse<?> getOnePartner(@PathVariable("id") String id) {
        return ApiResponse.success(HttpStatus.OK, "Success", partnerRepository.findById(id));
    }
//Hello
   @GetMapping("users/{id}")
   public ApiResponse<?> getListPartnerOfUser(@PathVariable("id")String id){
        return null;
   }
    @PostMapping("")
    public ApiResponse<?> create(@RequestBody PartnerRequest partnerRequest){
        return  ApiResponse.success(HttpStatus.OK,"create success partner pending",partnerService.create(partnerRequest));
    }

    @PutMapping("/admin")
    public ApiResponse<?> updateForAdmin(@RequestBody UpdatePartnerAdminRequest updatePartnerAdminRequest){
        return ApiResponse.success(HttpStatus.OK,"update status for partner success and role partner",partnerService.updateForAdmin(updatePartnerAdminRequest));
    }
}
