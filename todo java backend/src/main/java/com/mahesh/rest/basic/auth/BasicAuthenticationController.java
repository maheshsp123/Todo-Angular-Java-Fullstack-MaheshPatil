package com.mahesh.rest.basic.auth;

import javax.management.RuntimeErrorException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class BasicAuthenticationController {
	
	//@RequestMapping(method=RequestMethod.GET, path="/hello-world")
	//or
	
	@GetMapping(path="/basicauth") 
	public AuthenticationBean helloWorldBean() {
		//throw new RuntimeException("this error generated message");
		return new AuthenticationBean("basic authentication- authentication bean message");
	}
	
	
	
}
