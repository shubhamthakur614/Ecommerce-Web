package com.shubham.service;

import java.util.List;

import com.shubham.exception.UserException;
import com.shubham.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public List<User> findAllUsers();

}
