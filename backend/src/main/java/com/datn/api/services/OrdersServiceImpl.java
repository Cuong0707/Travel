package com.datn.api.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import com.datn.api.entity.Orders;
import com.datn.api.entity.OrdersOfHotel;
import com.datn.api.entity.Users;
import com.datn.api.entity.dto.OrderDto;
import com.datn.api.entity.dto.OrderRequest;
import com.datn.api.entity.dto.OrderResponse;
import com.datn.api.entity.dto.UpdateOrderRequest;
import com.datn.api.enums.OrderStatus;
import com.datn.api.repository.OrdersOfHotelRepository;
import com.datn.api.repository.OrdersRepository;
import com.datn.api.repository.PartnerRepository;
import com.datn.api.repository.UsersRepository;

@Component
public class OrdersServiceImpl implements OrdersService{
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    OrdersRepository ordersRepository;

    @Autowired
    UsersRepository usersRepository;
    @Autowired
    PartnerRepository partnerRepository;
    @Autowired
    OrdersOfHotelRepository ordersOfHotelRepository;

    private Double sum=0D;
    @Override
    public Orders create(OrderRequest orderRequest){
        try{
            Orders orders = new Orders();
            orders.setUser(usersRepository.findById(orderRequest.getUserId()).orElseThrow());
            orders.setPartner(partnerRepository.findById(orderRequest.getPartnerId()).orElseThrow());
            orders.setPaymentMethod(orderRequest.getPaymentMethod());
            orders.setOrderDate(LocalDateTime.now());
            Orders ordersSaved = ordersRepository.save(orders);
            OrdersOfHotel ordersOfHotel = new OrdersOfHotel();
            orderRequest.getOrderDetails().forEach(item->{
                ordersOfHotel.setAmountOfRoom(item.getAmountOfRoom());
                ordersOfHotel.setCheckInDate(item.getCheckInDate());
                ordersOfHotel.setLengthOfStay(item.getLengthOfStay());
                ordersOfHotel.setNumberOfChildren(item.getNumberOfChildren());
                ordersOfHotel.setNumberOfPeople(item.getNumberOfPeople());
                ordersOfHotel.setOriginalPrice(item.getOriginalPrice());
                ordersOfHotel.setPromotionPrice(item.getPromotionPrice());
                ordersOfHotel.setOrders(ordersSaved);
                ordersOfHotel.setHotelDetails(ordersOfHotelRepository.findById(item.getHotelDetailId()).orElseThrow().getHotelDetails());
                ordersOfHotelRepository.save(ordersOfHotel);
            });
            return orders;
        }catch (Exception e){
            throw new RuntimeException("Create Order error");
        }

    }
    @Override
    public Orders updateForUser(UpdateOrderRequest request) {
        Orders orders = ordersRepository.findById(request.getOrderId()).orElseThrow();
        if (orders.getStatus().equals(OrderStatus.pending)) {
            if (request.getStatus().equals("canceled")) {
                orders.setStatus(OrderStatus.canceled);
            } else {
                throw new RuntimeException("User can only update order with status canceled");
            }
            return ordersRepository.save(orders);
        }
        throw new RuntimeException("User cannot update status while status is not pending");
    }
    @Override
    public Orders updateForPartner(UpdateOrderRequest request) {
        Orders orders = ordersRepository.findById(request.getOrderId()).orElseThrow();

        if (orders.getStatus().equals(OrderStatus.completed)) {
            throw new RuntimeException("Partner cannot update status while status is completed");
        }
        if (request.getStatus().equals("confirmed")) {
            orders.setStatus(OrderStatus.confirmed);
        } else if (request.getStatus().equals("completed")) {
            orders.setStatus(OrderStatus.completed);
        } else if (request.getStatus().equals("canceled")) {
            orders.setStatus(OrderStatus.canceled);
        } else {
            throw new IllegalArgumentException("Invalid order status: " + request.getStatus());
        }
        return ordersRepository.save(orders);
    }
    @Override
    public OrderDto getOneOrder(Long id){
        Optional<Orders> orders = ordersRepository.findById(id);
        if(orders.isPresent()){
            return hotelDetailDto(orders.get());
        }
        throw new RuntimeException("Not found order with Id"+id);
    }
    @Override
    public OrderResponse getAllOrder(Integer pageNumber, Integer pageSize, String sortDir, String sortBy){
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(pageNumber, pageSize,sort);

        Page<Orders> orders = ordersRepository.findAll(pageable);

        List<Orders> ordersList = orders.getContent();

        List<OrderDto> content = ordersList.stream().map(this::hotelDetailDto).toList();

        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setContent(content);
        orderResponse.setPageNumber(orders.getNumber());
        orderResponse.setPageSize(orders.getSize());
        orderResponse.setTotalElements(orders.getTotalElements());
        orderResponse.setTotalPages(orders.getTotalPages());
        orderResponse.setLastPage(orders.isLast());
        return orderResponse;
    }
    @Override
    public OrderResponse getOrdersOfUser(String id, Integer pageNumber, Integer pageSize, String sortDir, String sortBy){
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(pageNumber, pageSize,sort);
        Users users = usersRepository.findById(id).orElseThrow();
        Page<Orders> orders = ordersRepository.getAllByUser(users,pageable);

        List<Orders> ordersList = orders.getContent();


        List<OrderDto> content = ordersList.stream().map(this::hotelDetailDto).toList();

        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setContent(content);
        orderResponse.setPageNumber(orders.getNumber());
        orderResponse.setPageSize(orders.getSize());
        orderResponse.setTotalElements(orders.getTotalElements());
        orderResponse.setTotalPages(orders.getTotalPages());
        orderResponse.setLastPage(orders.isLast());
        return orderResponse;
    }
    public OrderDto hotelDetailDto(Orders orders) {
        OrderDto orderDto = modelMapper.map(orders, OrderDto.class);
		orderDto.setPartnerID(orders.getPartner().getPartnerID());
        orderDto.setUserID(orders.getUser().getUserID());
        List<OrdersOfHotel> ordersOfHotels = ordersOfHotelRepository.findOrdersOfHotelByOrders(orders);
        ordersOfHotels.forEach(orderOfHotel -> {
            if(orderOfHotel.getPromotionPrice()==null){
                sum+=orderOfHotel.getOriginalPrice()*orderOfHotel.getLengthOfStay();
            }else {
                sum+=orderOfHotel.getPromotionPrice()*orderOfHotel.getLengthOfStay();
            }
        });
        orderDto.setTotalPrice(sum);
        return orderDto;
    }

}
