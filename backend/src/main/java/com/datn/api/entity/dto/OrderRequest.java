package com.datn.api.entity.dto;

import java.util.List;

import lombok.Data;

@Data
public class OrderRequest {
    private Long orderId;
    private String partnerId;
    private String userId;
    private String paymentMethod;
    private String orderStatus;
<<<<<<< HEAD

    private List<OrdersOfHotelDto> ordersOfHotels;

=======
<<<<<<< HEAD

    private List<OrdersOfHotelDto> ordersOfHotels;

=======
    private List<OrdersOfHotelDto> ordersOfHotels;
>>>>>>> update_entity_v0
>>>>>>> services-test
}
