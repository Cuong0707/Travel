package com.datn.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.datn.api.entity.dto.PartnerRequest;
import com.datn.api.entity.dto.UpdatePartnerAdminRequest;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.repository.PartnerRepository;
import com.datn.api.services.PartnerService;

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

	@PreAuthorize("hasAnyAuthority('admin')")
   @GetMapping("users/{id}")
   public ApiResponse<?> getListPartnerOfUser(@PathVariable("id")String id,
                                              @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
                                              @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize){
       return ApiResponse.success(HttpStatus.OK, "Success", partnerService.findByUser(id,pageNumber,pageSize));
   }
    @PostMapping("")
    public ApiResponse<?> create(@RequestBody PartnerRequest partnerRequest){
        return  ApiResponse.success(HttpStatus.OK,"create success partner pending",partnerService.create(partnerRequest));
    }

	@PreAuthorize("hasAnyAuthority('admin')")
    @PutMapping("/admin")
    public ApiResponse<?> updateForAdmin(@RequestBody UpdatePartnerAdminRequest updatePartnerAdminRequest){
        return ApiResponse.success(HttpStatus.OK,"update status for partner success and role partner",partnerService.updateForAdmin(updatePartnerAdminRequest));
    }
}
