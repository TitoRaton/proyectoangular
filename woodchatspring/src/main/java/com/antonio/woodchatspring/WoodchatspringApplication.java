package com.antonio.woodchatspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(scanBasePackages = {"com.antonio.config",
		"com.antonio.controller",
		"com.antonio.models",
		"com.antonio.services",})

@EnableMongoRepositories(basePackages = "com.antonio.repositories")
public class WoodchatspringApplication {

	public static void main(String[] args) {

		SpringApplication.run(WoodchatspringApplication.class, args);
	}

}