package com.shubham.EcommerceWeb.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.shubham.EcommerceWeb.dto.request.CreateProductRequest;
import com.shubham.EcommerceWeb.entity.Product;
import com.shubham.EcommerceWeb.exception.ProductException;

public interface ProductService {

	public Product createProduct(CreateProductRequest creteproductRequest);

	public Page<Product> getAllProducts(String category, List<String> colors, List<String> sizes, Integer minPrice,
			Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize);

	public Product findProductById(Long id)throws ProductException;

	public String deleteProduct(Long productId) throws ProductException;

	public Product updateProduct(Long productId, Product req) throws ProductException;

	public List<Product> findProductByCategory(String category);
}
