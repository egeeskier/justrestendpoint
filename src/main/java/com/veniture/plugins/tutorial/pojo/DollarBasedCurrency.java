package com.veniture.plugins.tutorial.pojo;
import java.util.List;

public class DollarBasedCurrency {

    private String date;
    private String base;
    private  List <Rates> rates;


    public List<Rates> getRates() {
        return rates;
    }

    public void setRates(List<Rates> rates) {
        this.rates = rates;
    }



    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getBase() {
        return base;
    }

    public void setBase(String base) {
        this.base = base;
    }



}