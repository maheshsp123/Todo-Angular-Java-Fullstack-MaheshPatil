package com.mahesh.rest.webservices.firstRestWebService.toDo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class  ToDo {
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String description;
	private Date targetDate;
	private Boolean done;
	
	
	
	public ToDo(long id, String username, String description, Date targetDate, Boolean done) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.done = done;
	}
	protected ToDo() {
		
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public Boolean isDone() {
		return done;
	}
	public void setDone(Boolean done) {
		this.done = done;
	}
	
	

}
