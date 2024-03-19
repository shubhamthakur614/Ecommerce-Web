package com.shubham.service;

import java.util.List;

import com.shubham.exception.ProductException;
import com.shubham.modal.Rating;
import com.shubham.modal.User;
import com.shubham.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
