package com.shubham.EcommerceWeb.service;

import com.shubham.EcommerceWeb.entity.User;
import com.shubham.EcommerceWeb.exception.UserException;

public interface UserService {

	public User findUserById(Long userId) throws UserException;

	public User findUserProfileByJwt(String jwt) throws UserException;
}
