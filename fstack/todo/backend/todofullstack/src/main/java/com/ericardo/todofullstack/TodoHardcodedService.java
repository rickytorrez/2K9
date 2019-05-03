package com.ericardo.todofullstack;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class TodoHardcodedService {

	// for now, this will act as our database
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "ricky", "Take a nap", new Date(), false));
		todos.add(new Todo(++idCounter, "ricky", "Learn about micro-services", new Date(), false));
		todos.add(new Todo(++idCounter, "ricky", "Learn angular", new Date(), false));
	}
	
	// find all
	public List<Todo> findAll(){
		return todos;
	}
	
}
