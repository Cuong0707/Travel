package com.datn.api.repository;

import com.datn.api.entity.Partners;
import com.datn.api.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartnerRepository extends JpaRepository<Partners, String> {

}
