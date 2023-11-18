package com.datn.api.entity.dto;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class OrderRequest {
    private Long orderId;
    private String partnerId;
    private String userId;
    private String paymentMethod;
    private String orderStatus;
    private List<OrdersOfHotelDto> orderDetails;
}
