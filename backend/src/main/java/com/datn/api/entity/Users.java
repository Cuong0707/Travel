package com.datn.api.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.datn.api.enums.Role;
import com.datn.api.enums.UserStatus;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Users implements UserDetails {
	@Id
	@Column(name = "AccountID", nullable = false, length = 10)
	private String accountId;

	@Column(name = "Password", nullable = true, length = -1)
	private String password;

	@Column(name = "Token", nullable = true, length = -1)
	private String token;

	@Column(name = "Fullname", nullable = false, length = 50)
	private String fullname;

	@Column(name = "Avatar", nullable = true, length = -1)
	private String avatar;

	@Column(name = "PhoneNumber", nullable = true, length = 11)
	private String phoneNumber;

	@Column(name = "Email", nullable = false, length = 50, unique = true)
	private String email;

	@Column(name = "Birthday", nullable = true)
	private LocalDate birthday;

	@Column(name = "Registration_Date", nullable = true)
	@CreatedDate
	@Temporal(TemporalType.TIMESTAMP)
	private LocalDateTime registrationDate;

	@Column(name = "Last_Login", nullable = true)
	private LocalDateTime lastLogin;

	@Column(name = "Status", nullable = true)
	@Enumerated(EnumType.STRING)
	private UserStatus status;

	@Column(name = "Role", nullable = true)
	@Enumerated(EnumType.STRING)
	private Role role;

	@OneToOne(mappedBy = "accountId", cascade = CascadeType.ALL)
	@JsonManagedReference
	private Admins admins;

	@OneToOne(mappedBy = "accountId", cascade = CascadeType.ALL)
	@JsonManagedReference
	private Partners partners;

	@OneToMany(mappedBy = "users")
	@JsonManagedReference
	List<Orders> orders;

	public Users(String accountId, String password, String token, String fullname, String email, String phoneNumber,
			String avatar, LocalDate birthday, LocalDateTime registrationDate, LocalDateTime lastLogin,
			UserStatus status, Role role) {
		this.accountId = accountId;
		this.fullname = fullname;
		this.email = email;
		this.password = password;
		this.token = token;
		this.phoneNumber = phoneNumber;
		this.avatar = avatar;
		this.birthday = birthday;
		this.registrationDate = registrationDate;
		this.lastLogin = lastLogin;
		this.status = status;
		this.role = role;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority(role.name()));
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	// Tài khoản chưa hết hạn ?
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	// Tài khoản chưa bị khóa ?
	public boolean isAccountNonLocked() {
		return this.status != UserStatus.Suspended;
	}

	@Override
	// Thông tin đăng nhập chưa hết hạn ?
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
