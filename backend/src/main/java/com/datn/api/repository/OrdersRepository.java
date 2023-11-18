package com.datn.api.repository;

import com.datn.api.entity.Orders;
import com.datn.api.entity.Partners;
import com.datn.api.entity.Users;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
    @Query("select o from Orders o where o.user = ?1")
    Page<Orders> getAllByUser(Users user, Pageable pageable);

    @Query("SELECT o FROM Orders o where o.partner=?1 and o.status='completed'")
    List<Orders> getOrdersByPartner(Partners partners);
}
