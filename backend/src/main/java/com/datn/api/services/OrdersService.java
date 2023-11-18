package com.datn.api.services;

import com.datn.api.entity.Orders;
import com.datn.api.entity.dto.OrderDto;
import com.datn.api.entity.dto.OrderRequest;
import com.datn.api.entity.dto.OrderResponse;
import com.datn.api.entity.dto.UpdateOrderRequest;
import org.springframework.stereotype.Service;

@Service
public interface OrdersService {
    Orders create(OrderRequest orderRequest);

    Orders updateForUser(UpdateOrderRequest request);

    Orders updateForPartner(UpdateOrderRequest request);

    OrderDto getOneOrder(Long id);

    OrderResponse getAllOrder(Integer pageNumber, Integer pageSize, String sortDir, String sortBy);
    OrderResponse getOrdersOfUser(String id, Integer pageNumber, Integer pageSize, String sortDir, String sortBy);
}
