package com.datn.api.repository;

<<<<<<< HEAD

import java.util.Optional;

=======
<<<<<<< HEAD

import java.util.Optional;

=======
import com.datn.api.entity.Hotels;
import com.datn.api.entity.Partners;
import com.datn.api.entity.Users;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
>>>>>>> update_entity_v0
>>>>>>> services-test
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD
import com.datn.api.entity.Partners;

=======
<<<<<<< HEAD
import com.datn.api.entity.Partners;

=======
import java.util.Optional;
>>>>>>> update_entity_v0
>>>>>>> services-test

@Repository
public interface PartnerRepository extends JpaRepository<Partners, String> {
    Optional<Partners> findByEmail(String email);

<<<<<<< HEAD

	@Query("select p from Partners p where p.user.userID=?1")
	Optional<Partners> findPartnerByUserID(String userID);
=======
<<<<<<< HEAD

	@Query("select p from Partners p where p.user.userID=?1")
	Optional<Partners> findPartnerByUserID(String userID);
=======
    @Query("select o from  Partners o where  o.user=?1")
    Page<Partners> findByUser(Users users, Pageable pageable);
>>>>>>> update_entity_v0
>>>>>>> services-test
}
