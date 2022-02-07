package com.example.doubleu.controller;


import com.example.doubleu.dao.MapDao;
import com.example.doubleu.model.BuildingInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Controller
public class KakaoController {

    @Autowired
    private MapDao mapDao;

    @GetMapping(path = "/")
    public String index(){
        return "index";
    }


//    @GetMapping(path = "/test")
    @RequestMapping(value = "/test", method = RequestMethod.GET) //produces 조건 없이 함
    @ResponseBody
    public String test(){

        System.out.println("test case");
        System.out.println("test case");
        System.out.println("test case");
        System.out.println("test case");
        System.out.println("test case");
        System.out.println("test case");
        return "test";
    }


    @RequestMapping(value = "/kakao/select_building_info", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE) //produces 조건 없이 함
    @ResponseBody
    public String selectBuildingInfo(@RequestParam("keyword") String keyword,
                                     @RequestParam("searchType") Integer searchType){

        System.out.println(keyword);
        System.out.println(searchType);

        //jdbc template 에러로 현재 파라미터를 입력 받지 못하고 있음 문제 해결 전까지는 그냥 keyword 전달
//        List<BuildingInfo> buildingInfoList = mapDao.selectSearch(keyword);
//        return buildingInfoList;
        return keyword;
    }



//
//    @RequestMapping(value = "/insert_img", method = RequestMethod.GET) //produces 조건 없이 함
//    @ResponseBody
//    public String insertImg(@RequestParam("file") MultipartFile file) throws IOException {
//        System.out.println("test case");
//        System.out.println("test case");
//        System.out.println("test case");
//        System.out.println("test case");
//        System.out.println("test case");
//        System.out.println("test case");
//        return "test";
//    }
}
