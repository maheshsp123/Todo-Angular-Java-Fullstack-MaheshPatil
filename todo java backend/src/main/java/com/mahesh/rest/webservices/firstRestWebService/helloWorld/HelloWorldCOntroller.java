package com.mahesh.rest.webservices.firstRestWebService.helloWorld;

import javax.management.RuntimeErrorException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class HelloWorldCOntroller {
	
	//@RequestMapping(method=RequestMethod.GET, path="/hello-world")
	//or
	@GetMapping(path="/hello-world")
	public String HelloWorld() {
		return "hello world- REST web app-1";
	}
	
	
	@GetMapping(path="/hello-wrold-bean") 
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("this error generated message");
		return new HelloWorldBean("hello world bean-changed");
	}
	
	@GetMapping(path="/hello-world-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean("hello world variable="+name);
	}
	
}
