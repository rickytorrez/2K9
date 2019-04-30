package com.ericardo.finsh.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ericardo.finsh.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
}
