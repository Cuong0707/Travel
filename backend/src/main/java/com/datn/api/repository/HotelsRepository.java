package com.datn.api.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.datn.api.entity.Hotels;

import jakarta.transaction.Transactional;

@Repository
public interface HotelsRepository extends JpaRepository<Hotels, Long> {
	// not yet
//	@Query(value = "Select * From Hotels h inner join Partners p on h.PartnerID = p.PartnerID\r\n"
//			+ "						inner join Users u on p.UserID = u.UserID\r\n"
//			+ "                         where u.address like '%?1%'", nativeQuery = true)
//	public List<Hotels> findAllHotelsByProvince(String provinceID);
//
//	@Query("select h from Hotels h where h.status = 'Available' and (h.nameOfHotel like %?1% or h.description like %?1%)")
//	Page<Hotels> findByKeywords(String keywords, Pageable pageable);
//
	@Query("select h from Hotels h where h.status like 'Available' and h.standard like %?1")
	List<Hotels> findByStandard(String standard);

//	List<Hotels> findByBreakfast(Breakfast breakfast);

	@Query("select h from Hotels h where h.partner.user.userID = ?1")
	Page<Hotels> findHotelByUserID(String userID, Pageable pageable);

	@Modifying
	@Transactional
	@Query(value = "update Hotels h set h.view = h.view + 1 where h.hotelID = ?1", nativeQuery = true)
	void autoIncreaseViews(Long id);

//	@Query("SELECT h FROM Hotels h where h.status like 'Available' GROUP BY h.hotelID ORDER BY h.view DESC")
//	Page<Hotels> findHotelsPopular(Pageable pageable);
//
//	@Query("SELECT h FROM Hotels h where h.status like 'Available' and h.standard like '5' GROUP BY h.hotelID ORDER BY h.view DESC")
//	Page<Hotels> findHotelsHighStandard(Pageable pageable);

	@Query(value = "select * from Hotels order by view DESC limit 10", nativeQuery = true)
	Page<Object[]> findTop10HotelsWithMostOrdersAndHighestView(Pageable pageable);
	
//	@Query(value = "SELECT * FROM Hotels h where h.status like 'Available'", nativeQuery = true)
//	List<Hotels> findAll();
//
//	@Query(value = "SELECT * FROM Hotels h where h.status like 'Available'", nativeQuery = true)
//	Page<Hotels> findAll(Pageable pageable);
//
//	@Query(value = "SELECT * FROM Hotels h where h.status like 'Available'", nativeQuery = true)
//	List<Hotels> findAllForAdmin();
//
//	@Query(value = "SELECT * FROM Hotels h where h.status like 'Unavailable'", nativeQuery = true)
//	List<Hotels> findByStatusUnavailable();
//
//	@Query("select sum(h.view) from Hotels h where h.partner.user.userID = ?1 ")
//	Integer sumHotelsViewOfUser(String id);
//
//
//	@Query(value = "SELECT * FROM Hotels h where h.partnerID = ?1 and h.status like 'Available'", nativeQuery = true)
//	List<Hotels> findAllHotelByUserId(String partnerID);

}
