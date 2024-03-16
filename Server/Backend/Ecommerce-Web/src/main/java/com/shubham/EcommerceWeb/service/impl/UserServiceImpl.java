package com.shubham.EcommerceWeb.service.impl;

import org.springframework.stereotype.Service;

import com.shubham.EcommerceWeb.entity.User;
import com.shubham.EcommerceWeb.exception.UserException;
import com.shubham.EcommerceWeb.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Override
	public User findUserById(Long userId) throws UserException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		// TODO Auto-generated method stub
		return null;
	}

}
