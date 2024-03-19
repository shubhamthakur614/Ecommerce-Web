package com.shubham.service;

import java.util.List;

import com.shubham.exception.ProductException;
import com.shubham.modal.Review;
import com.shubham.modal.User;
import com.shubham.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
