package com.shubham.service;

import com.shubham.exception.ProductException;
import com.shubham.modal.Cart;
import com.shubham.modal.CartItem;
import com.shubham.modal.User;
import com.shubham.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public CartItem addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
