package com.datn.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.datn.api.entity.dto.OrderRequest;
import com.datn.api.entity.dto.UpdateOrderRequest;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.services.OrdersService;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    @Autowired
    OrdersService ordersService;

    @GetMapping()
    public ApiResponse<?> getAll(@RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
                                 @RequestParam(value = "pageSize", defaultValue = "8", required = false) Integer pageSize,
                                 @RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir,
                                 @RequestParam(value = "sortBy", defaultValue = "orderDate", required = false) String sortBy)
    {

        return ApiResponse.success(HttpStatus.OK,"success",ordersService.getAllOrder(pageNumber,pageSize,sortDir,sortBy));
    }
    @GetMapping("/{id}")
    public ApiResponse<?> getOne(@PathVariable Long id)
    {
        return ApiResponse.success(HttpStatus.OK,"success",ordersService.getOneOrder(id));
    }
    @GetMapping("/users/{id}")
    public ApiResponse<?> getOrderOfUser(
                                @PathVariable String id,
                                @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
                                 @RequestParam(value = "pageSize", defaultValue = "8", required = false) Integer pageSize,
                                 @RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir,
                                 @RequestParam(value = "sortBy", defaultValue = "orderDate", required = false) String sortBy)
    {
        return ApiResponse.success(HttpStatus.OK,"success",ordersService.getOrdersOfUser(id,pageNumber,pageSize,sortDir,sortBy));
    }

	@GetMapping("/partner/{id}")
	public ApiResponse<?> getOrderOfPartner(@PathVariable String id,
			@RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
			@RequestParam(value = "pageSize", defaultValue = "8", required = false) Integer pageSize,
			@RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir,
			@RequestParam(value = "sortBy", defaultValue = "orderDate", required = false) String sortBy) {
		return ApiResponse.success(HttpStatus.OK, "success",
				ordersService.getOrdersOfPartner(id, pageNumber, pageSize, sortDir, sortBy));
	}

    @PostMapping()
    public ApiResponse<?> create(@RequestBody OrderRequest orderRequest){
        return ApiResponse.success(HttpStatus.OK,"success",ordersService.create(orderRequest));
    }
    @PutMapping("/users")
    public ApiResponse<?> updateForUser(@RequestBody UpdateOrderRequest updateOrderRequest){
        return ApiResponse.success(HttpStatus.OK,"success",ordersService.updateForUser(updateOrderRequest));
    }

    @PutMapping("/partners")
    public ApiResponse<?> updateForPartner(@RequestBody UpdateOrderRequest updateOrderRequest){
        return ApiResponse.success(HttpStatus.OK,"success",ordersService.updateForPartner(updateOrderRequest));
    }

}
