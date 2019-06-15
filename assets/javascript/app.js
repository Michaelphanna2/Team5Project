$(document).ready(function() {
  var proLinks = function() {
    var queryURL = "restcountries-v1.p.rapidapi.com" + "e9f82e2598mshe0f794eb8b3c800p108814jsn600d5649c922";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      createRow(response);
    });
  };
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

}