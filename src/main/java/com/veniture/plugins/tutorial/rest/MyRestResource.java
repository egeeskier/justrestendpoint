package com.veniture.plugins.tutorial.rest;

import com.atlassian.plugins.rest.common.security.AnonymousAllowed;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.veniture.plugins.tutorial.pojo.DollarBasedCurrency;
import com.veniture.plugins.tutorial.pojo.Rates;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.Map;


/**
 * A resource of message.
 */

@Path("/message")
public class MyRestResource {

    @GET
    @AnonymousAllowed
    @Produces({MediaType.TEXT_PLAIN})
    public Response getMessage()
    {
        String res = "";
        try {
            res = this.getCurrency();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Response.ok(res).build();
    }

    private String getCurrency() throws IOException {

        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url("https://api.currencyfreaks.com/latest?apikey=751ce34823ee432db41388d1c3a17e0b&format=json")
                .method("GET", null)
                .addHeader("Authorization", "Basic ZWdlLmVza2llcjpEZTYzNjQ5Ny8=")
                .addHeader("Content-Type", "application/json")
                .build();

        com.squareup.okhttp.Response response = client.newCall(request).execute();

        JSONObject obj = new JSONObject(response.body().string());

        String currency = obj.getJSONObject("rates").getString("TRY");

        return currency;


    }

}



