package com.datn.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.datn.api.entity.Hotels;
import com.datn.api.enums.Breakfast;
import com.datn.api.enums.HotelStatus;

import jakarta.transaction.Transactional;


@Repository
public interface HotelsRepository extends JpaRepository<Hotels, Long> {
	// not yet
	@Query(value = "SELECT * FROM Hotels h inner join Partners p where h.partnerID = p.partnerID ?1 and p.status not in ('Draft','Deleted') order by p.create_at desc ", nativeQuery = true)
	List<Hotels> findAllHotelsByProvince(String userId);

	@Query("select h from Hotels h where h.status = 'Available' and (h.nameOfHotel like %?1% or h.description like %?1%)")
	Page<Hotels> findByKeywords(String keywords, Pageable pageable);

	@Query("select h from Hotels h where p.slug = ?1")
	Optional<Hotels> findBySlug(String slug);

	List<Hotels> findByStandard(String standard);
	
	List<Hotels> findByHotelStatus(HotelStatus hotelStatus);

	List<Hotels> findByBreakfast(Breakfast breakfast);

	@Query("select h from Hotels h where h.partnerID.userID = ?1")
	Page<Hotels> findHotelByUserID(String userId, Pageable pageable);

	@Modifying
	@Transactional
	@Query(value = "update Hotels h set h.view = h.view + 1 where h.hotelID = ?1", nativeQuery = true)
	void autoIncreaseViews(Long id);

	@Query("SELECT h FROM Hotels h where h.status = 'Available' GROUP BY h.HotelID ORDER BY o.view DESC")
	Page<Hotels> findHotelsPopular(Pageable pageable);

	@Query("SELECT h FROM Hotels h where h.status = 'Available' and h.standard = '5' GROUP BY h.HotelID ORDER BY o.view DESC")
	Page<Hotels> findHotelsHighStandard(Pageable pageable);

	@Query(value = "SELECT * FROM Hotels h where p.status like 'Available'", nativeQuery = true)
	List<Hotels> findAll();

	@Query(value = "SELECT * FROM Hotels h where h.status like 'Available'", nativeQuery = true)
	Page<Hotels> findAll(Pageable pageable);

	@Query(value = "SELECT * FROM Hotels h where h.status like 'Available'", nativeQuery = true)
	List<Hotels> findAllForAdmin();

	@Query(value = "SELECT * FROM Hotels h where h.status like 'Unavailable'", nativeQuery = true)
	List<Hotels> findByStatusUnavailable();

	@Query("select sum(p.view) from Hotels h where h.user.userID = ?1 ")
	Integer sumHotelsViewOfUser(String id);

	@Query("SELECT p.userID, p.fullname, p.email, h.hotelID, h.nameOfHotel, h.view " +
            "FROM Partners p " +
            "JOIN Orders o ON p.partnerID = o.partner.userID " +
            "JOIN Hotels h ON p.partnerID = h.partner.userID " +
            "WHERE p.TaxCode IS NOT EMPTY " +
            "AND h.view = (SELECT MAX(h2.view) FROM Hotels h2 WHERE h2.partner.userID = p.partnerID) " +
            "GROUP BY p.userID, p.fullname, p.email, h.hotelID, h.nameOfHotel, h.view" +
            "ORDER BY COUNT(o.PartnerID) DESC")
	Page<Object[]> findTop10HotelsWithMostOrdersAndHighestView(Pageable pageable);

	@Query(value = "SELECT * FROM Hotels h where h.partnerID = ?1 and h.status like 'Available'", nativeQuery = true)
	List<Hotels> findAllHotelByUserId(String userId);

}
