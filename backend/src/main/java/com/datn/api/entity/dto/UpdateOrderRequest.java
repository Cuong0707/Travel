package com.datn.api.entity.dto;

import lombok.Data;

@Data
public class UpdateOrderRequest {
    Long orderId;
    String status;
}
