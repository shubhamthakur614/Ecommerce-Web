package com.shubham.EcommerceWeb.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentInformation {

	 @Column(name = "cardholder_name")
	    private String cardholderName;

	    @Column(name = "card_number")
	    private String cardNumber;

	    @Column(name = "expiration_date")
	    private LocalDate expirationDate;

	    @Column(name = "cvv")
	    private String cvv;
}
