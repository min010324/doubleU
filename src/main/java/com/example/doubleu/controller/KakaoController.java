package com.example.doubleu.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class KakaoController {


    @GetMapping(path = "/")
    public String index(){
        return "index";
    }
}
