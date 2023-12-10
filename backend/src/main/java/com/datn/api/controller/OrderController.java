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

import com.datn.api.entity.dto.OrderRequest;
import com.datn.api.entity.dto.OrderResponse;
import com.datn.api.entity.dto.UpdateOrderRequest;
import com.datn.api.exceptions.ApiResponse;
import com.datn.api.services.OrdersService;


@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    @Autowired
    OrdersService ordersService;
    //checked
    @GetMapping("/{id}")
    public ApiResponse<?> getOne(@PathVariable Long id)
    {
        return ApiResponse.success(HttpStatus.OK,"success",ordersService.getOneOrder(id));
    }
    //checked
    @GetMapping("/users")
	public ApiResponse<OrderResponse> getOrderOfUser(
                                @RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
                                @RequestParam(value = "pageSize", defaultValue = "8", required = false) Integer pageSize,
                                @RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir,
			@RequestParam(value = "sortBy", defaultValue = "orderDate", required = false) String sortBy)
			throws Exception
    {
        return ApiResponse.success(HttpStatus.OK,"success",ordersService.getOrdersOfUser(pageNumber,pageSize,sortDir,sortBy));
    }
    //checked
	@PreAuthorize("hasAnyAuthority('admin')")
	@GetMapping("/partners/{id}")
	public ApiResponse<?> getOrderOfPartnerForAdmin(@PathVariable String id,
			@RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
			@RequestParam(value = "pageSize", defaultValue = "8", required = false) Integer pageSize,
			@RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir,
			@RequestParam(value = "sortBy", defaultValue = "orderDate", required = false) String sortBy) {
		return ApiResponse.success(HttpStatus.OK, "success",
				ordersService.getOrdersOfPartnerForAdmin(id, pageNumber, pageSize, sortDir, sortBy));
	}
    //checked
    @PreAuthorize("hasAnyAuthority('partner')")
    @GetMapping("/partners")
    public ApiResponse<?> getOrderOfPartner(@RequestParam(value = "pageNumber", defaultValue = "0", required = false) Integer pageNumber,
                                            @RequestParam(value = "pageSize", defaultValue = "8", required = false) Integer pageSize,
                                            @RequestParam(value = "sortDir", defaultValue = "asc", required = false) String sortDir,
                                            @RequestParam(value = "sortBy", defaultValue = "orderDate", required = false) String sortBy) {
        return ApiResponse.success(HttpStatus.OK, "success",
                ordersService.getOrdersOfPartner( pageNumber, pageSize, sortDir, sortBy));
    }
    //checked
    @PostMapping("")
    public ApiResponse<?> create(@RequestBody OrderRequest orderRequest){
        return ApiResponse.success(HttpStatus.OK,"success",ordersService.create(orderRequest));
    }
    //checked
    @PutMapping("/{id}/users")
    public ApiResponse<?> updateForUser(@PathVariable Long id,@RequestBody UpdateOrderRequest updateOrderRequest){
        return ApiResponse.success(HttpStatus.OK,"success",ordersService.updateForUser(id,updateOrderRequest));
    }
    //checked
    @PreAuthorize("hasAnyAuthority('partner','admin')")
    @PutMapping("/{id}/partners")
    public ApiResponse<?> updateForPartner(@PathVariable Long id,@RequestBody 	UpdateOrderRequest updateOrderRequest){
        return ApiResponse.success(HttpStatus.OK,"success",ordersService.updateForPartner(id,updateOrderRequest));
    }

}
