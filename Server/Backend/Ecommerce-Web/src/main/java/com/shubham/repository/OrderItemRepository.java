package com.shubham.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shubham.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
