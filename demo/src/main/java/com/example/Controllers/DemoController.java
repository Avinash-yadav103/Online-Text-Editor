package com.example.Controllers;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;

// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.*;


public class DemoController{

    @GetMapping("/test")
    public String index() {
        return "index";
    }

    // @GetMapping("/test")
    // public String pricing(){
    //     return "pricing";
    // }
    

}



