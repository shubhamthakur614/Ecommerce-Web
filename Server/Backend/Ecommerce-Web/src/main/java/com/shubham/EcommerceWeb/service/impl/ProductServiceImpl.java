package com.shubham.EcommerceWeb.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.shubham.EcommerceWeb.dto.request.CreateProductRequest;
import com.shubham.EcommerceWeb.entity.Category;
import com.shubham.EcommerceWeb.entity.Product;
import com.shubham.EcommerceWeb.exception.ProductException;
import com.shubham.EcommerceWeb.repository.CategoryRespository;
import com.shubham.EcommerceWeb.repository.ProductRepository;
import com.shubham.EcommerceWeb.service.ProductService;
import com.shubham.EcommerceWeb.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

	private final ProductRepository productRepository;

	private final CategoryRespository categoryRespository;
	
	private final UserService userService;

	@Override
	public Product createProduct(CreateProductRequest creteproductRequest) {
		Category topLevel = categoryRespository.findByName(creteproductRequest.getTopLevelCategory());

		if (topLevel == null) {

			Category topLavelCategory = new Category();
			topLavelCategory.setName(creteproductRequest.getTopLevelCategory());
			topLavelCategory.setLevel(1);

			topLevel = categoryRespository.save(topLavelCategory);
		}

		Category secondLevel = categoryRespository.findByNameAndParant(creteproductRequest.getSecondLevelCategory(),
				topLevel.getName());
		if (secondLevel == null) {

			Category secondLavelCategory = new Category();
			secondLavelCategory.setName(creteproductRequest.getSecondLevelCategory());
			secondLavelCategory.setParentCategory(topLevel);
			secondLavelCategory.setLevel(2);

			secondLevel = categoryRespository.save(secondLavelCategory);
		}

		Category thirdLevel = categoryRespository.findByNameAndParant(creteproductRequest.getThirdLevelCategory(),
				secondLevel.getName());
		if (thirdLevel == null) {

			Category thirdLavelCategory = new Category();
			thirdLavelCategory.setName(creteproductRequest.getThirdLevelCategory());
			thirdLavelCategory.setParentCategory(secondLevel);
			thirdLavelCategory.setLevel(3);

			thirdLevel = categoryRespository.save(thirdLavelCategory);
		}

		Product product = new Product();
		product.setTitle(creteproductRequest.getTitle());
		product.setColor(creteproductRequest.getColor());
		product.setDescription(creteproductRequest.getDescription());
		product.setDiscountedPrice(creteproductRequest.getDiscountedPrice());
		product.setDiscountPercent(creteproductRequest.getDiscountPercent());
		product.setImageUrl(creteproductRequest.getImageUrl());
		product.setBrand(creteproductRequest.getBrand());
		product.setPrice(creteproductRequest.getPrice());
		product.setSizes(creteproductRequest.getSize());
		product.setQuantity(creteproductRequest.getQuantity());
		product.setCategory(thirdLevel);
		product.setCreatedAt(LocalDateTime.now());

		Product savedProduct = productRepository.save(product);

		System.out.println("products - " + product);

		return savedProduct;
	}

	@Override
	public Page<Product> getAllProducts(String category, List<String> colors, List<String> sizes, Integer minPrice,
			Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
		Pageable pageable = PageRequest.of(pageNumber, pageSize);

		List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);

		if (!colors.isEmpty()) {
			products = products.stream().filter(p -> colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColor())))
					.collect(Collectors.toList());

		}

		if (stock != null) {

			if (stock.equals("in_stock")) {
				products = products.stream().filter(p -> p.getQuantity() > 0).collect(Collectors.toList());
			} else if (stock.equals("out_of_stock")) {
				products = products.stream().filter(p -> p.getQuantity() < 1).collect(Collectors.toList());
			}

		}
		int startIndex = (int) pageable.getOffset();
		int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());

		List<Product> pageContent = products.subList(startIndex, endIndex);
		Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());
		return filteredProducts; // If color list is empty, do nothing and return all products
	}

	@Override
	public String deleteProduct(Long productId) throws ProductException {
		Product product = findProductById(productId);

		System.out.println("delete product " + product.getId() + " - " + productId);
		product.getSizes().clear();
//		productRepository.save(product);
//		product.getCategory().
		productRepository.delete(product);

		return "Product deleted Successfully";
	}

	@Override
	public Product updateProduct(Long productId, Product req) throws ProductException {
		Product product = findProductById(productId);

		if (req.getQuantity() != 0) {
			product.setQuantity(req.getQuantity());
		}
		if (req.getDescription() != null) {
			product.setDescription(req.getDescription());
		}

		return productRepository.save(product);
	}

	@Override
	public List<Product> findProductByCategory(String category) {
		System.out.println("category --- " + category);

		List<Product> products = productRepository.findByCategory(category);

		return products;
	}

	@Override
	public Product findProductById(Long id) throws ProductException {
		Optional<Product> opt = productRepository.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}
		throw new ProductException("product not found with id " + id);
	}

}
