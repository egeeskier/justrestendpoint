package com.veniture.plugins.tutorial.rest;
import com.atlassian.plugins.rest.common.security.AnonymousAllowed;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import org.json.JSONArray;
import org.json.JSONObject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;


/**
 * A resource of group users.
 */

@Path("/user")
public class MyRestResource {
    @GET
    @Path("/Groups/{username}")
    @AnonymousAllowed
    //@Produces({MediaType.APPLICATION_JSON})
    public Response getGroups(@PathParam("username") String username) throws IOException {

        OkHttpClient client = new OkHttpClient();

        //String url = "https://test.veniture.com.tr/rest/api/2/user?username="+username+"&expand=groups";
        String url = "https://jira.anadolusigorta.com.tr/rest/api/2/user?username="+username+"&expand=groups";

        //String url= "https://jiratest.anadolusigorta.com.tr/rest/api/2/user?username="+username+"&expand=groups";

        Request request = new Request.Builder()
                .url(url)
                .method("GET", null)
                .addHeader("Authorization", "Basic YXBpLmFkbWluOnN5c2FkbWluMjAxOCo=")
                //.addHeader("Cookie", "JSESSIONID=749F6AC3DAEB615D7688C6BA9836FEF9; atlassian.xsrf.token=BG12-C9VR-IIJ4-136H_a464e03b52209d4b956edf379b1f7b3d29a82053_lin")
                .build();

        com.squareup.okhttp.Response response = client.newCall(request).execute();

        String a = response.body().string();

        return Response.ok().entity(a).build();
    }

    @GET
    @Path("/Roles/{username}")
    @AnonymousAllowed
    public Response getApplicationRoles(@PathParam("username") String username) throws IOException {

        OkHttpClient client = new OkHttpClient();

        String url =" https://test.veniture.com.tr/rest/api/2/user?username="+username+"&expand=applicationRoles";
        Request request = new Request.Builder()
                .url(url)
                .method("GET", null)
                .addHeader("Authorization", "Basic ZWdlLmVza2llcjpTdGFydDEyMyE=")
                .build();

        com.squareup.okhttp.Response response = client.newCall(request).execute();

        String a = response.body().string();

        return Response.ok().entity(a).build();
    }

    }





