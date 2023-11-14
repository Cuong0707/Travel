package com.datn.api.services;

import java.nio.ByteBuffer;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.datn.api.entity.Users;
import com.datn.api.entity.dto.AuthenticationRequest;
import com.datn.api.entity.dto.AuthenticationResponse;
import com.datn.api.entity.dto.ChangePasswordRequest;
import com.datn.api.entity.dto.ProfileGoogle;
import com.datn.api.entity.dto.RegisterRequest;
import com.datn.api.enums.Role;
import com.datn.api.enums.UserStatus;
import com.datn.api.exceptions.DuplicateRecordException;
import com.datn.api.exceptions.NotFoundException;
import com.datn.api.repository.UsersRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

	private final UsersRepository repository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;

	@Autowired
	UsersServiceImpl usersService;

	public AuthenticationResponse register(RegisterRequest request) {
		var user = repository.findByEmailAndPasswordNotNull(request.getEmail()).orElse(null);
		if (user != null)
			throw new DuplicateRecordException("Email đã tồn tại");

		var users = Users.builder().userID(shortUUID()).fullname(request.getFullname())
				.password(passwordEncoder.encode(request.getPassword())).email(request.getEmail())
				.birthday(request.getBirthday()).avatar(request.getAvatar()).address(request.getAddress())
				.registrationDate(LocalDateTime.now()).status(UserStatus.active).role(Role.USER).build();
		Users userSaved = repository.save(users);
		var jwtToken = jwtService.generateToken(users);
		return AuthenticationResponse.builder().infoUser(usersService.usersToDto(userSaved)).token(jwtToken).build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		try {
			authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
			var users = repository.findByEmailAndPasswordNotNull(request.getEmail())
					.orElseThrow(() -> new NotFoundException("Email không tồn tại"));
			users.setLastLogin(LocalDateTime.now());
			String jwtToken = jwtService.generateToken(users);
			Users userSaved = repository.save(users);
			return AuthenticationResponse.builder().infoUser(usersService.usersToDto(users)).token(jwtToken).build();
		} catch (DuplicateRecordException ex) {
			throw new DuplicateRecordException("Sai mật khẩu");
		}

	}

	public AuthenticationResponse loginWithGoogle(ProfileGoogle profileGoogle) {

		var users = Users.builder().userID(shortUUID()).fullname(profileGoogle.getName()).password(null).birthday(null)
				.email(profileGoogle.getEmail() + "--google").avatar(profileGoogle.getImageUrl()).address(null)
				.registrationDate(LocalDateTime.now()).status(UserStatus.active).role(Role.USER).build();
		Optional<Users> optional = repository.findByEmailAndPasswordNull(users.getEmail());

		var userSaved = optional.isPresent() ? optional.get() : repository.save(users);
		var jwtToken = jwtService.generateToken(userSaved);

		return AuthenticationResponse.builder().infoUser(usersService.usersToDto(userSaved)).token(jwtToken).build();
	}

	public static String shortUUID() {
		UUID uuid = UUID.randomUUID();
		long l = ByteBuffer.wrap(uuid.toString().getBytes()).getLong();
		return Long.toString(l, Character.MAX_RADIX);
	}

	public AuthenticationResponse changePassword(ChangePasswordRequest request) {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getEmail(), request.getOldPassword()));
			var users = repository.findByEmailAndPasswordNotNull(request.getEmail())
					.orElseThrow(() -> new NotFoundException("Email không tồn tại"));
			users.setPassword(passwordEncoder.encode(request.getNewPassword()));
			String jwtToken = jwtService.generateToken(users);
			Users userSaved = repository.save(users);
			return AuthenticationResponse.builder().infoUser(usersService.usersToDto(users)).token(jwtToken).build();
		} catch (DuplicateRecordException ex) {
			throw new DuplicateRecordException("Sai mật khẩu");
		}

	}
}
