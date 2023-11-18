package com.datn.api.repository;

import com.datn.api.entity.Admins;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminsRepository extends JpaRepository<Admins, String> {
}
