$(document).ready(function() {
//   $.getJSON("restcountries-v1.p.rapidapi.com", + "e9f82e2598mshe0f794eb8b3c800p108814jsn600d5649c922", function(data) {
//   	console.log(data);
  

// $.each(data, function(index, value){
// 	console.log(value);

// 	});
});

window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
        window.myWidgetParam.push({
          id: 19,
          cityid: '4560349',
          appid: 'b62ffdf3492cad757a89ae568fdac822',
          units: 'imperial',
          containerid: 'openweathermap-widget-19',
        });
           (function() {
            var script = document.createElement('script');
            script.async = true;
            script.charset = "utf-8";
            script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(script, s);
          })();

  // var proLinks = function() {
  //   var queryURL = "restcountries-v1.p.rapidapi.com" + "e9f82e2598mshe0f794eb8b3c800p108814jsn600d5649c922";
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function(response) {
  //     createRow(response);
  //   });
  // };

  // After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}
  // var x = document.getElementById("mySearch");
// var proLinks = [
//   weather = {
//     url: openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js
//     location: "",
//     degrees: "",
//     celsius: "",
//     apilink: ""  
//   },
//   {  
//     convert = {

//     }
//   },
//   { 
//     sports = {
//     football: "",
//     cricket: "",
//     }
//   }
// ];

// on click event 
// renderOne =  
// $(document).on("click", ".proLinks", function() {
//   var buttons = $(this).attr("");
//   console.log(buttons);

unirest.get("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%22metric%22+or+%22imperial%22&mode=xml%2C+html&q=London%2Cuk")
.header("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com")
.header("X-RapidAPI-Key", "e9f82e2598mshe0f794eb8b3c800p108814jsn600d5649c922")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});


unirest.get("https://sport-data.p.rapidapi.com/api/listBetMarkets//")
.header("X-RapidAPI-Host", "sport-data.p.rapidapi.com")
.header("X-RapidAPI-Key", "e9f82e2598mshe0f794eb8b3c800p108814jsn600d5649c922")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});