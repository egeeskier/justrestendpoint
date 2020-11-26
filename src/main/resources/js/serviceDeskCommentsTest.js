
function hide_elements() {

  AJS.$(".activity-item.worker-comment").children("header").text("Anadolu Sigorta");

  AJS.$(".activity-item.worker-comment").children(".aui-avatar.aui-avatar-medium").children(".aui-avatar-inner").children("img").attr('src', "https://upload.wikimedia.org/wikipedia/commons/9/9e/Anadolu_Sigorta_logo.svg");

  //yeni ekleme -- cozulme islemi icin
  AJS.$(".activity-item.resolution-update" ).children(".content").text("kaydınız");

  // belki ekstra --escalation islemi icin
  AJS.$(".activity-item.status-update" ).children(".content").text("kaydınız");


}


function checkUrlForPortal(pathname){

  var parts_url= pathname.split('/');

  if(parts_url[parts_url.length-3]==="portal"){
    return true;
  }

  return false;
}


AJS.$(document).ready(function() {


  var pathname = window.location.pathname;


  if (checkUrlForPortal(pathname)) {

    hide_elements();

  }
});



AJS.$(document).ajaxComplete(function(event, xhr, settings) {

    var pathname = window.location.pathname;


    if (checkUrlForPortal(pathname)) {


        AJS.$(document).ready(function() {

           hide_elements();

    });


  }

});
