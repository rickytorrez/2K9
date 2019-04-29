package com.ericardo.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
public class helloWorldController {

	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello World";
	}

	// return a bean
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		System.out.println("message");
		return new HelloWorldBean ("Hello World");
	}
}
