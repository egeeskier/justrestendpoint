var user;
var user_groups = [];

/*

346: get it help-- (common,computers)
348: set a wifi account(logins)
359 :report a system problem(applications)
360 : upgrade or change a server(servers)

*/

const groups_credentials = {
                             "Requests":[
                                 {

                                   "id" : 1,

                                   "Elements" : [
                                     "122",
                                     "123",
                                     "124",
                                     "125",
                                     "126",
                                     "108",
                                     "109",
                                     "113",
                                     "116",
                                     "117",
                                     "119",
                                     "120",
                                     "121",
                                     "62"
                                   ],

                                    "AllowedGroups" :[
                                         "1701",
                                         "1702",
                                         "1703",
                                         "dk_bt",
                           			  "dntc"
                                      ]
                                 },
                                 {

                                 "id" : 2,

                                   "Elements" : [
                                     "96",
                                     "97",
                                     "98",
                                     "99",
                                     "110"
                                   ],

                                    "AllowedGroups" :[
                                         "1701",
                           			  "dntc"
                                      ]
                                 },
                                 {

                                   "id" : 3,

                                   "Elements" : [
                                   "72",
                                   "73",
                                   "74",
                                   "92",
                                   "93",
                                   "94",
                                   "95",
                                   "100",
                                   "101",
                                   "102",
                                   "103",
                                   "104",
                                   "111",
                                   "112",
                                   "114",
                                   "115",
                                   "105",
                                   "106",
                                   "107",
                                   "78",
                                   "79",
                                   "80",
                                   "81",
                                   "127",
                                   "129",
                                   "130",
                                   "131",
                                   "132",
                                   "141",
                                   "75",
                                   "76",
                                   "77",
                                   "82",
                                   "84",
                                   "85",
                                   "86",
                                   "87",
                                   "88",
                                   "89",
                                   "90",
                                   "91"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                           			  "dntc"
                                      ]
                                 },
                                 {

                                   "id" : 4,

                                   "Elements" : [
                           "145",
                           "146",
                           "147",
                           "148",
                           "149",
                           "150",
                           "151",
                           "152",
                           "153",
                           "154",
                           "155",
                           "156",
                           "157",
                           "158",
                           "159",
                           "163",
                           "164",
                           "165",
                           "166",
                           "167",
                           "168",
                           "169",
                           "170",
                           "171",
                           "172",
                           "173",
                           "175",
                           "179",
                           "181",
                           "182",
                           "184",
                           "185",
                           "186",
                           "187",
                           "189",
                           "203",
                           "204",
                           "205",
                           "224",
                           "225",
                           "227",
                           "280",
                           "281",
                           "282",
                           "283",
                           "316",
                           "317",
                           "318"
                                   ],

                                    "AllowedGroups" :[
                                         "acente",
                                         "broker",
                                         "kıbrıs",
                                         "banka",
                                         "diğer bankalar",
                                         "isbank",
                                         "cgrm",
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc"
                                      ]
                                 },
                                 {

                                   "id" : 5,

                                   "Elements" : [
                                     "285"
                                   ],

                                    "AllowedGroups" :[
                                         "acente",
                                         "broker",
                                         "kıbrıs",
                                         "banka",
                                         "diğer bankalar",
                                         "isbank",
                                         "cgrm",
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc",
                                         "asmdhst",
                                         "asmdecz"
                                      ]
                                 },
                                 {

                                   "id" : 6,

                                   "Elements" : [
                                     "191",
                                     "234",
                                     "235",
                                     "236",
                                     "322"

                                   ],

                                    "AllowedGroups" :[
                                         "acente",
                                         "broker",
                                         "kıbrıs",
                                         "banka",
                                         "diğer bankalar",
                                         "isbank",
                                         "cgrm",
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc",
                                         "eksper",
                                         "osi"
                                      ]
                                 },
                                 {

                                   "id" : 7,

                                   "Elements" : [
                                     "250",
                                     "251",
                                     "252",
                                     "253",
                                     "254",
                                     "255",
                                     "256",
                                     "257",
                                     "258",
                                     "284",
                                     "319",
                                     "321"
                                   ],

                                    "AllowedGroups" :[
                                         "acente",
                                         "broker",
                                         "kıbrıs",
                                         "banka",
                                         "diğer bankalar",
                                         "isbank",
                                         "cgrm",
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc",
                                         "eksper",
                                         "osi",
                                         "hukuk"
                                      ]
                                 },
                                 {

                                   "id" : 8,

                                   "Elements" : [
                                     "315",
                                     "320",
                                     "325"
                                   ],

                                    "AllowedGroups" :[
                                         "acente",
                                         "broker",
                                         "kıbrıs",
                                         "banka",
                                         "diğer bankalar",
                                         "isbank",
                                         "cgrm",
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc",
                                         "eksper",
                                         "osi",
                                         "hukuk",
                                         "asmdhst",
                                         "asmdecz"
                                      ]
                                 },
                                 {

                                   "id" : 9,

                                   "Elements" : [
                                     "180",
                                     "183"
                                   ],

                                    "AllowedGroups" :[
                                         "acente",
                                         "broker",
                                         "kıbrıs",
                                         "banka",
                                         "diğer bankalar",
                                         "isbank",
                                         "cgrm",
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc",
                                         "eksper",
                                         "osi",
                                         "hukuk"
                                      ]
                                 },
                                 {

                                   "id" : 10,

                                   "Elements" : [
                                     "161",
                                     "324"
                                   ],

                                    "AllowedGroups" :[
                                         "acente",
                                         "broker",
                                         "kıbrıs",
                                         "banka",
                                         "diğer bankalar",
                                         "isbank",
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc"
                                      ]
                                 },
                                 {

                                   "id" : 11,

                                   "Elements" : [
                                     "264"
                                   ],

                                    "AllowedGroups" :[
                                         "acente",
                                         "broker",
                                         "kıbrıs",
                                         "cgrm",
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc",
                                         "asmdhst",
                                         "asmdecz"
                                      ]
                                 },
                                 {

                                   "id" : 12,

                                   "Elements" : [
                                     "263",
                                     "190",
                                     "192",
                                     "193",
                                     "223",
                                     "230",
                                     "231",
                                     "232",
                                     "233",
                                     "323"

                                   ],

                                    "AllowedGroups" :[
                                         "acente",
                                         "broker",
                                         "kıbrıs",
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc"
                                      ]
                                 },
                                 {

                                   "id" : 13,

                                   "Elements" : [
                                     "293"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc",
                                         "cgrm"
                                      ]
                                 },
                                 {

                                   "id" : 14,

                                   "Elements" : [
                                     "265",
                                     "266",
                                     "267",
                                     "268",
                                     "269"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc",
                                         "cgrm",
                                         "asmdecz",
                                         "asmdhst"
                                      ]
                                 },
                                 {

                                   "id" : 15,

                                   "Elements" : [
                                     "177",
                                     "178"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc",
                                         "kıbrıs"
                                      ]
                                 },
                                 {

                                   "id" : 16,

                                   "Elements" : [
                                     "160"
                                   ],

                                    "AllowedGroups" :[
                                         "1406",
                                         "1701",
                                         "1702",
                                         "1703",
                                         "dk_bt",
                                         "dntc"
                                      ]
                                 },
                                 {

                                   "id" : 17,

                                   "Elements" : [
                                     "270",
                                     "162",
                                     "174",
                                     "176",
                                     "200",
                                     "220",
                                     "248",
                                     "260",
                                     "274",
                                     "275",
                                     "276",
                                     "277",
                                     "278",
                                     "279",
                                     "297",
                                     "298",
                                     "299",
                                     "300",
                                     "301",
                                     "302",
                                     "303",
                                     "304",
                                     "305",
                                     "306",
                                     "307",
                                     "308"
                                   ],

                                    "AllowedGroups" :[
                                         "1701",
                                         "1702",
                                         "1703",
                                         "dk_bt",
                                         "dntc"
                                      ]
                                 },
                                 {

                                   "id" : 18,

                                   "Elements" : [
                                     "288"
                                   ],

                                    "AllowedGroups" :[
                                         "1701",
                                         "1702",
                                         "1703",
                                         "dk_bt"
                                      ]
                                 },
                                 {

                                   "id" : 19,

                                   "Elements" : [
                                     "177",
                                     "178"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                                         "dk_bt",
                                         "dntc",
                                         "kıbrıs"
                                      ]
                                 },
                                 {

                                   "id" : 20,

                                   "Elements" : [
                                     "309",
                                     "310",
                                     "311",
                                     "312",
                                     "313",
                                     "314"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "1701",
                                         "dntc"
                                      ]
                                 },
                                 {

                                   "id" : 21,

                                   "Elements" : [
                                     "188"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                                         "dntc"
                                      ]
                                 },
                                 {

                                   "id" : 22,

                                   "Elements" : [
                                       "194",
                                       "195",
                                       "196",
                                       "197",
                                       "198",
                                       "199",
                                       "201",
                                       "202",
                                       "206",
                                       "207",
                                       "208",
                                       "209",
                                       "210",
                                       "211",
                                       "212",
                                       "213",
                                       "214",
                                       "215",
                                       "216",
                                       "217",
                                       "218",
                                       "219",
                                       "221",
                                       "222",
                                       "228",
                                       "229",
                                       "261",
                                       "272",
                                       "273",
                                       "286",
                                       "287",
                                       "289",
                                       "290",
                                       "291",
                                       "292",
                                       "294",
                                       "295",
                                       "296",
                                       "226",
                                       "237",
                                       "238",
                                       "239",
                                       "240",
                                       "241",
                                       "242",
                                       "243",
                                       "244",
                                       "245",
                                       "246",
                                       "247"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                                         "dntc",
                                         "dk_bt"
                                      ]
                                 },
                                 {

                                   "id" : 23,

                                   "Elements" : [
                                     "262"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                                         "dntc",
                                         "dk_bt",
                                         "eksper",
                                         "osi"
                                      ]
                                 },
                                 {

                                   "id" : 24,

                                   "Elements" : [
                                     "249"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                                         "dntc",
                                         "dk_bt",
                                         "hukuk"
                                      ]
                                 },
                                 {

                                   "id" : 25,

                                   "Elements" : [
                                     "259"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                                         "dntc"
                                      ]
                                 },
                           	  {

                                   "id" : 26,

                                   "Elements" : [
                                     "83"
                                   ],

                                    "AllowedGroups" :[
                                         "prs_kdr",
                                         "prs_soz",
                           			  "dntc"
                                      ]
                                 }

                               ]
                           };

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


AJS.$(document).ready(function() {

  AJS.$.get("/rest/auth/1/session", function(data) {

    user = data.name;
    //console.log("username is " + user);
    var groups_url = "https://jira.anadolusigorta.com.tr/rest/myrestresource/1.0/user/Groups/" + user;

    var settings = {
      "url": groups_url,
      "method": "GET",
      "timeout": 0,
      //"headers": {
        //"Authorization": "Basic ZWdlLmVza2llcjpTdGFydDEyMyE=",
      //},
    };

    AJS.$.ajax(settings).done(function(response) {

      //console.log(response);

      var response_groups = JSON.parse(response);

      for (var i = 0; i < response_groups.groups.items.length; i++) {

        //console.log("assigned groups"+response_groups.groups.items[i].name);
        user_groups.push(response_groups.groups.items[i].name);
      }

      //console.log("user_groups are:" + user_groups);



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
