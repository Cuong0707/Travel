package com.datn.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.datn.api.entity.Orders;
import com.datn.api.entity.Partners;
import com.datn.api.entity.Users;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Long> {
    @Query("select o from Orders o where o.user = ?1")
    Page<Orders> getAllByUser(Users user, Pageable pageable);

    @Query("SELECT o FROM Orders o where o.partner=?1")
	Page<Orders> getOrdersByPartner(Partners partners, Pageable pageable);

	@Query("SELECT o FROM Orders o where o.partner=?1 and o.status='completed'")
	Page<Orders> getCompletedOrdersByPartner(Partners partners, Pageable pageable);
}
