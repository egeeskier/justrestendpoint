//new values for top right navigation bar

var requests = "Kayıtlar";
var myRequests = "Kayıtlarım";
var allRequests ="Tüm Kayıtlar";

// new values for search bar
var reference = "Kod";
var requester = "Oluşturan";
var openRequests = "Açık Kayıtlar";
var closedRequests = "Kapalı Kayıtlar";
var anyRequestType = "Tüm Kayıt Tipleri";
var searchForRequests = "Kayıt Ara";



function checkURLforRequestsPortal(pathname){

     if(pathname[pathname.length-1]==="requests"){

       return true;
     }

     return false;

}

function parseQueryString(){


   var str = window.location.search;
   var objURL = {};

   str.replace(
       new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
       function( $0, $1, $2, $3 ){
           objURL[ $1 ] = $3;
       }
   );
   return objURL;
}

//changes names in top-right navigation bar.
function hideRequestsOnNav(){


AJS.$(".cv-requests-nav__text").text(requests);
AJS.$("#requests-nav-dropdown > div > ul > li:nth-child(1) > a").text(myRequests);
AJS.$("#requests-nav-dropdown > div > ul > li:nth-child(2) > a").text(allRequests);


}

//Changes names on the requests list.
function hideRequestsOnSearchBAr(search){


  if(search["requestTypeId"]===undefined){
       AJS.$("#sd-all-requests-filter > div:nth-child(3) > a").text(anyRequestType);
  }


  if(search["status"]==="open"){

     AJS.$("#sd-all-requests-filter > div:nth-child(1) > a").text(openRequests);


  }

  else if(search["status"]==="closed"){

    AJS.$("#sd-all-requests-filter > div:nth-child(1) > a").text(closedRequests);


  }

   AJS.$(".cv-page-title-text").text(requests);
   AJS.$("#status-dropdown > div > ul > div:nth-child(2) > li:nth-child(1) > a").text(openRequests);
   AJS.$("#status-dropdown > div > ul > div:nth-child(2) > li:nth-child(3) > a").text(closedRequests);
   AJS.$("#sd-all-requests-filter > div:nth-child(4) > div > input").attr("placeholder",searchForRequests);
   AJS.$("#requestTypes-dropdown > div > ul > div:nth-child(1) > li:nth-child(1) > a").text(anyRequestType);
   AJS.$("#reference").text(reference);
   AJS.$("#requester").text(requester);

}


AJS.$( document ).ready(function() {

     pathname = window.location.pathname.split("/");
     queryParts = parseQueryString();

     hideRequestsOnNav();

     if(checkURLforRequestsPortal(pathname)){

        hideRequestsOnSearchBAr(queryParts);

     }

});


AJS.$(document).ajaxComplete(function(event, xhr, settings) {


  pathname = window.location.pathname.split("/");
  queryParts = parseQueryString();

  hideRequestsOnNav();

  if(checkURLforRequestsPortal(pathname)){

     hideRequestsOnSearchBAr(queryParts);

  }


});
