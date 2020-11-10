package com.veniture.plugins.tutorial.rest;

import javax.xml.bind.annotation.*;

public class MyRestResourceModel {


    private String message;

    public MyRestResourceModel() {
    }

    public MyRestResourceModel(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}







