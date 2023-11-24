package com.datn.api.repository;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> services-test

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.datn.api.entity.Districts;


<<<<<<< HEAD
=======
=======
import com.datn.api.entity.Districts;
import com.datn.api.entity.Hotels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

>>>>>>> update_entity_v0
>>>>>>> services-test
@Repository
public interface DistrictRepository extends JpaRepository<Districts, Long> {
	@Query("select d from Districts d where d.provinces.provinceID like ?1")
	List<Districts> findByProvinces(Long provinceID);
}
