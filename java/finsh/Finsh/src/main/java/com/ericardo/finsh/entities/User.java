package com.ericardo.finsh.entities;

import java.util.Date;

import javax.persistence.Entity;

@Entity
public class User {

	private Long id;
	
	private String fistName;
	
	private String lastName;
	
	private String email;
	
	private Date dob;

	@Override
	public String toString() {
		return String.format("User [id=%s, fistName=%s, lastName=%s, email=%s, dob=%s]", id, fistName, lastName, email,
				dob);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFistName() {
		return fistName;
	}

	public void setFistName(String fistName) {
		this.fistName = fistName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}
	
}
