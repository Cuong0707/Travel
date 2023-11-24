package com.datn.api.controller;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> services-test
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceController {
<<<<<<< HEAD
=======
=======
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/services")
public class ServiceController {
    @Autowired
    ServicesRepository servicesRepository;

    @GetMapping()
    public ApiResponse<?> getAll(){
        return ApiResponse.success(HttpStatus.OK,"success",servicesRepository.findAll());
    }
>>>>>>> update_entity_v0
>>>>>>> services-test
}
