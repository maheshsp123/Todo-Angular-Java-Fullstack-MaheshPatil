package com.mahesh.rest.webservices.firstRestWebService.jwt.resource;

import java.io.Serializable;

public class JwtTokenResponse implements Serializable {

  // serialVersionUID num is replaced with dummy long value
  private static final long serialVersionUID = 8888888888888888888L;
  

  private final String token;

    public JwtTokenResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token;
    }
}