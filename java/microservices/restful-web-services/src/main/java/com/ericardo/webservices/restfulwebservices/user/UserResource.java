package com.ericardo.webservices.restfulwebservices.user;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class UserResource {

	@Autowired
	private UserDaoService _uDS;
	
	// retrieve all users - GET /users
	@GetMapping("/users")
	public List<User> retrieveAllUsers(){
		return _uDS.findAll();
	}
	
	// retrieve a single user - GET /user
	@GetMapping("/users/{id}")
	public User retrieveUser(@PathVariable int id) {
		User user = _uDS.findOne(id);
		
		// internal server error - created a runtime exception 
		if(user==null) {
			throw new UserNotFoundException("id-"+ id);
		}
		
		return _uDS.findOne(id);
	}
	
	// create user - POST /users
	@PostMapping("/users")
	public ResponseEntity<Object> createUser(@RequestBody User user) {
		User savedUser = _uDS.save(user);
		
		// returns created status - "201 Created" - also return the location of the created object in the header
		URI location = ServletUriComponentsBuilder
			.fromCurrentRequest()
			.path("/{id}")
			.buildAndExpand(savedUser.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	// delete a user
	// retrieve a single user - GET /user
	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable int id) {
		User user = _uDS.deleteById(id);
		
		// internal server error - created a runtime exception 
		if(user==null) {
			throw new UserNotFoundException("id-"+ id);
		}
	}
	
}
