package com.example.doubleu;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@Controller
public class Test {


    @GetMapping(path = "/api/test" )
    public HashMap hello(){
        HashMap res = new HashMap();
        res.put("message", "hello");

        return res;
    }

}
