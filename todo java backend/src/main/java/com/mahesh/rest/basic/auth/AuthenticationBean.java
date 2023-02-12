package com.mahesh.rest.basic.auth;

public class AuthenticationBean {
	private String message;
	public AuthenticationBean(String msg) {
		this.message= msg;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
}
