package com.datn.api.entity;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "OrderID", nullable = false)
	private Long orderID;

	@ManyToOne
	@JoinColumn(name = "PartnerID")
	@JsonBackReference
	private Partners partner;
	
	@ManyToOne
	@JoinColumn(name = "UserID")
	@JsonBackReference
	private Users user;
	
	@Column(name = "OrderDate")
	@CreatedDate
	@Temporal(TemporalType.TIMESTAMP)
	private LocalDateTime orderDate;

	@Column(name = "PaymentMethod", nullable = false, length = 50)
	private String paymentMethod;

	@Column(name = "Status", nullable = false, length = 50)
	private String status;



	@OneToMany(mappedBy = "orders")
	@JsonManagedReference
	List<OrdersOfHotel> orderDetails;

	public Orders(Long orderID,Partners partner, Users user, LocalDateTime orderDate, String paymentMethod, String status) {
		this.orderID = orderID;
		this.partner = partner;
		this.user = user;
		this.orderDate = orderDate;
		this.paymentMethod = paymentMethod;
		this.status = status;
	}

}
