package com.datn.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.datn.api.entity.Partners;

@Repository
public interface PartnerRepository extends JpaRepository<Partners, String> {

	@Query("select p from Partners p where p.user.userID=?1")
	Optional<Partners> findPartnerByUserID(String userID);
}
