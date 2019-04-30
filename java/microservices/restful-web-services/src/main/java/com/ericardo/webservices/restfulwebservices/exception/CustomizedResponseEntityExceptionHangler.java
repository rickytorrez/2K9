package com.ericardo.webservices.restfulwebservices.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.ericardo.webservices.restfulwebservices.user.UserNotFoundException;

// controller advice lets it be used across multiple controllers
@ControllerAdvice
@RestController
public class CustomizedResponseEntityExceptionHangler 
extends ResponseEntityExceptionHandler {

	@ExceptionHandler(Exception.class)
	public final ResponseEntity<Object> handleAllException
		(Exception ex, WebRequest request){
		ExceptionResponse _exRes = new ExceptionResponse(new Date(), ex.getMessage(), 
				request.getDescription(false));
		return new ResponseEntity(_exRes, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	public final ResponseEntity<Object> handleUserNotFound
		(UserNotFoundException ex, WebRequest request){
		ExceptionResponse _exRes = new ExceptionResponse(new Date(), ex.getMessage(), 
				request.getDescription(false));
		return new ResponseEntity(_exRes, HttpStatus.NOT_FOUND);
	}
}
