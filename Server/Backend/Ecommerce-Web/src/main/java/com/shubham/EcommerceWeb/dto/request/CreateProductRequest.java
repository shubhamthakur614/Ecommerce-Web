package com.shubham.EcommerceWeb.dto.request;

import java.util.Set;

import com.shubham.EcommerceWeb.entity.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateProductRequest {

	private String title;

	private String description;

	private int price;

	private int discountedPrice;

	private int discountPercent;

	private int quantity;

	private String brand;

	private String color;

	private Set<Size> size;

	private String imageUrl;

	private String topLevelCategory;

	private String secondLevelCategory;

	private String thirdLevelCategory;
}
