package com.example.doubleu.config;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

//DAO,SERVICE<- DB접근
@Configuration
@ComponentScan(basePackages = {"com.example.doubleu.dao", "com.example.doubleu.service"})
@Import({DBConfig.class})
public class ApplicationConfig {

}


