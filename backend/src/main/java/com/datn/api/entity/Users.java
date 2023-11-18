package com.datn.api.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.datn.api.enums.Role;
import com.datn.api.enums.UserStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
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
	@Column(name = "user_id", nullable = false, length = 18)
	private String userId;

	@Column(name = "fullname", nullable = false, length = 255)
	private String fullname;

	@Column(name = "email", nullable = false, length = 100, unique = true)
	private String email;

	@Column(name = "password", nullable = false, length = -1)
	private String password;

	@Column(name = "image", nullable = true, length = -1)
	private String image;

	@Column(name = "birthday", nullable = true)
	private LocalDate birthday;

	@Column(name = "description", nullable = true, length = -1)
	private String description;

	@Column(name = "registered_at", nullable = true)
	@CreatedDate
	@Temporal(TemporalType.TIMESTAMP)
	private LocalDateTime registeredAt;

	@Column(name = "last_login", nullable = true)
	@LastModifiedDate
	private LocalDateTime lastLogin;

	@Column(name = "token", nullable = true, length = -1)
	private String token;

	@Column(name = "role", nullable = true)
	@Enumerated(EnumType.STRING)
	private Role role;

	@Column(name = "status", nullable = true)
	@Enumerated(EnumType.STRING)
	private UserStatus status;

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
		return true;
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
