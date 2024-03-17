package com.shubham.EcommerceWeb.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.shubham.EcommerceWeb.config.JwtProvider;
import com.shubham.EcommerceWeb.entity.User;
import com.shubham.EcommerceWeb.exception.UserException;
import com.shubham.EcommerceWeb.repository.UserRepository;
import com.shubham.EcommerceWeb.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final JwtProvider jwtProvider;

	private final UserRepository userRepository;

	@Override
	public User findUserById(Long userId) throws UserException {
		Optional<User> user = userRepository.findById(userId);
		if (user.isPresent()) {
			return user.get();
		}
		throw new UserException("User not Found with Id: " + userId);
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		String email = jwtProvider.getEmailFromToken(jwt);
		User user = userRepository.findByEmail(email);

		if (user == null) {
			throw new UserException("User not Found with email " + email);
		}
		return user;
	}

}
