package com.datn.api.services;

import com.datn.api.entity.HotelDetails;
import com.datn.api.entity.OrdersOfHotel;
import com.datn.api.entity.dto.HotelDetailDto;
import com.datn.api.entity.dto.OrderDetailDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class OrderOfHotelServiceImpl implements OrderOfHotelService {
    @Autowired
    ModelMapper modelMapper;
    public OrderDetailDto orderDetailDto(OrdersOfHotel ordersOfHotel) {
        OrderDetailDto orderDetailDto = modelMapper.map(ordersOfHotel, OrderDetailDto.class);
        orderDetailDto.setHotelDetailId(ordersOfHotel.getHotelDetails().getHotelDetailID());
        orderDetailDto.setOrderId(ordersOfHotel.getOrders().getOrderID());
        return orderDetailDto;
    }
}
