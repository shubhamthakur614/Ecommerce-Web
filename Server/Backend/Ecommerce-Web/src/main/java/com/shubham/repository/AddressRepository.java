package com.shubham.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shubham.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
