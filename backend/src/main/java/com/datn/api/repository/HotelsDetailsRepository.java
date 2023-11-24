package com.datn.api.repository;

import com.datn.api.entity.Admins;
import com.datn.api.entity.HotelDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelsDetailsRepository extends JpaRepository<HotelDetails, Long> {
    @Query("select o from  HotelDetails o where o.isDelete=false")
    Page<HotelDetails> getAll(Pageable pageable);
}
