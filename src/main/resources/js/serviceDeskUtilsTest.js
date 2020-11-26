var user;
var user_groups = [];

/*

346: get it help-- (common,computers)
348: set a wifi account(logins)
359 :report a system problem(applications)
360 : upgrade or change a server(servers)

*/

const groups_credentials =  {

  "Requests": [{

      "id": 1,

      "Elements": [
        "346",
        "348",
        "360"
      ],

      "AllowedGroups": [

        "AtlassianAdmins",
        "jira-administrators",
        "venitureTurkeyTeam"

      ]
    },

    {

      "id": 2,

      "Elements": [
        "348",
        "359",
        "700"
      ],

      "AllowedGroups": [

        "AtlassianAdmins",
        "jira-administrators",
        "Interns"

      ]
    }

  ]
};

function checkUrlForPortal(pathname){

  var parts_url= pathname.split('/');

  if(parts_url[parts_url.length-2]==="portal"){
    return true;
  }

  return false;
}

function isUserInGroup(user_groups,AllowedGroups){

    for (var i = 0; i < user_groups.length; i++) {

      for (var j = 0; j < AllowedGroups.length; j++) {

       if(user_groups[i]===AllowedGroups[j]){
         return true;
       }
      }
    }
  return false;
}

function mapGroupsAndUser(groups_credentials,user_groups){

      var hide_elements = [];

      for (var i = 0 ; i < groups_credentials.Requests.length; i++){

           if(!isUserInGroup(user_groups,groups_credentials.Requests[i].AllowedGroups))

         {

                Array.prototype.push.apply(hide_elements, groups_credentials.Requests[i].Elements);
         }
      }


      //console.log("hide elements are:"+hide_elements);

      return hide_elements;
 }


var pathname = window.location.pathname;



AJS.$(document).ready(function() {

  AJS.$.get("/rest/auth/1/session", function(data) {

    user = data.name;
    //console.log("username is " + user);

    var groups_url = "https://test.veniture.com.tr/rest/myrestresource/1.0/user/Groups/" + user;

    console.log(groups_url);

    var settings = {
      "url": groups_url,
      "method": "GET",
      "timeout": 0,

      //used Tugba's account for Authorization
      //"headers": {
       //"Authorization": "Basic dGd1bHRhYmFrOjEyMw=="

     // },
    };

    AJS.$.ajax(settings).done(function(response) {

      console.log(response);

      var response_groups = JSON.parse(response);

      for (var i = 0; i < response_groups.groups.items.length; i++) {

        console.log("assigned groups"+response_groups.groups.items[i].name);
        user_groups.push(response_groups.groups.items[i].name);
      }

      console.log("user_groups are: " + user_groups);

      // hide functions
      setInterval(function() {


        var hide_elements = mapGroupsAndUser(groups_credentials,user_groups);
        //console.log("hide_elements from 91:"+hide_elements);

       for(var i = 0 ; i < hide_elements.length; i++){

           AJS.$('span[data-id="' + hide_elements[i] + '"]').hide();
           AJS.$('a[data-id="' + hide_elements[i] + '"]').parent().parent().hide();
           AJS.$('a[data-id="' +hide_elements[i] + '"]').parent().parent().siblings("img").hide();
       }


      }, 10);

    });

  });

});



