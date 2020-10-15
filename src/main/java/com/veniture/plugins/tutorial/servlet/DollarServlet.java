package com.veniture.plugins.tutorial.servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.atlassian.jira.bc.issue.IssueService;
import com.atlassian.jira.bc.issue.search.SearchService;
import com.atlassian.jira.bc.project.ProjectService;
import com.atlassian.jira.config.ConstantsManager;
import com.atlassian.jira.issue.Issue;
import com.atlassian.jira.issue.IssueInputParameters;
import com.atlassian.jira.issue.MutableIssue;
import com.atlassian.jira.issue.issuetype.IssueType;
import com.atlassian.jira.issue.search.SearchException;
import com.atlassian.jira.issue.search.SearchResults;
import com.atlassian.jira.web.bean.PagerFilter;
import com.atlassian.plugin.spring.scanner.annotation.component.Scanned;
import com.atlassian.plugin.spring.scanner.annotation.imports.JiraImport;
import com.atlassian.query.Query;
import com.atlassian.templaterenderer.TemplateRenderer;
import com.atlassian.jira.jql.builder.JqlClauseBuilder;
import com.atlassian.jira.jql.builder.JqlQueryBuilder;
import com.atlassian.jira.project.Project;
import com.atlassian.jira.security.JiraAuthenticationContext;
import com.atlassian.jira.user.ApplicationUser;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;
import java.io.File;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;

@Scanned
public class DollarServlet extends HttpServlet {

    private static final Logger log = LoggerFactory.getLogger(DollarServlet.class);
    private static final String DOLLAR_TEMPLATE = ("/templates/dollarTemplate.vm");

    @JiraImport
    private TemplateRenderer templateRenderer;




    public DollarServlet(TemplateRenderer templateRenderer){

        this.templateRenderer=templateRenderer;


    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url("http://localhost:8080/rest/myrestresource/1.0/message")
                .method("GET", null)
                .addHeader("Authorization", "Basic ZWdlLmVza2llcjpEZTYzNjQ5Ny8=")
                .addHeader("Content-Type", "application/json")
                .addHeader("Cookie", "JSESSIONID=B584B0E9E63D1D6071F604E682BF46AD; atlassian.xsrf.token=B689-2KI6-DN6Y-KEGD_40281b173a20c4a3801fa8f379fa207b17d80b9b_lin")
                .build();

        Response response = client.newCall(request).execute();

        String currency = (response.body().string());

        resp.setContentType("text/html;charset=utf-8");

        /*
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();

        out.println("<html>");
        out.println("<head>");
        out.println("<title>Hola</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<p>1 Dollar is:</p");
        out.println("<p>"+ currency +"tl"+"</p");
        out.println("</body>");
        out.println("</html>");
        */

        Map<String, Object> context = new HashMap<>();

        context.put("currency",currency);

        templateRenderer.render(DOLLAR_TEMPLATE, context, resp.getWriter());

    }



}
