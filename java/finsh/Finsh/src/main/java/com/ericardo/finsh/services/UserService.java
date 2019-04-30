package com.ericardo.finsh.services;

import org.springframework.stereotype.Service;

import com.ericardo.finsh.entities.User;
import com.ericardo.finsh.repositories.UserRepository;

@Service
public class UserService {

	private UserRepository _uR;
	
	public UserService(UserRepository _uR) {
		this._uR = _uR;
	}
	
	public User create(User user) {
		return this._uR.save(user);
	}
	
}
