package com.mahesh.rest.webservices.firstRestWebService;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class MyBcryptEncoderTest {

	public static void main(String[] args) {
		
		BCryptPasswordEncoder encoder= new BCryptPasswordEncoder();
		//encode value is replaced with dummy string
		String encodedstring= encoder.encode("replacedvalue");
		System.out.println(encodedstring);

	}

}
