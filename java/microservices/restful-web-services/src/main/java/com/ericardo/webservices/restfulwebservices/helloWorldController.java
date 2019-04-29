package com.ericardo.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
public class helloWorldController {

	// returns helloWorld
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
	
	// returns a string with a path variable value
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean (String.format("Hello World %s", name));
	}
}
