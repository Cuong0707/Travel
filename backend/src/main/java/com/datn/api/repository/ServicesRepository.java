package com.datn.api.repository;

import com.datn.api.entity.Services;
import com.datn.api.entity.Users;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicesRepository extends JpaRepository<Services, String> {

}
