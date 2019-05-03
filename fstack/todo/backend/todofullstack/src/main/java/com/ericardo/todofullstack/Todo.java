package com.ericardo.todofullstack;

import java.util.Date;

public class Todo {

	// entity attributes
	private int id;
	private String username;
	private String description;
	private Date targetDate;
	private boolean isDone;

	// constructor
	public Todo(int idCounter, String username, String description, Date targetDate, boolean isDone) {
		super();
		this.id = idCounter;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}	

	// gets and sets
	public int getId() {
		return id;
	}


	public void setId(int id) {
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

	public boolean isDone() {
		return isDone;
	}

	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}

}
