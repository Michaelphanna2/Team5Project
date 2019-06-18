$(document).ready(function() {
	$("#news").on("click", function() {
		var url = "https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
		$.ajax({
			url: url,
			method: "GET"
		}).then(function(response){
			console.log(response);
			var articles = response.articles;
			articles.forEach(item => {
				var newDiv = $("<div>");
				newDiv.html(item.author);
				$("#results-display").append(newDiv);

			});
		});

	});
});

// $(function() {
// 	window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];

// 	window.myWidgetParam.push({
// 		id: 19,
// 		cityid: '4560349',
// 		appid: 'b62ffdf3492cad757a89ae568fdac822',
// 		units: 'imperial',
// 		containerid: 'openweathermap-widget-19',
// 	});

// 	(function() {
// 	var script = document.createElement('script');
// 	script.async = true;
// 	script.charset = "utf-8";
// 	script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
// 	var s = document.getElementsByTagName('script')[0];
// 	s.parentNode.insertBefore(script, s);
// 	})();

// 	$.getJSON("https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66");

// 	$.getJSON("https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66");

// 	// searching news articles that mention a specific topic or keyword
// 	var urlAll = "https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66"

// 	//var topHeadlinesTypes= ['sports','news']
// 	var urlTopHeadlines = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0ec608c4c88f4339b03e2366f95f2d66";

// 	$.ajax({
// 		url: urlTweets,
// 		dataType: "jsonp",
// 		success: function(results){
// 			var title = results.response.oneforty;
// 			var numTweets = results.response.trackback_total;
// 			$("#results").append(title + "has" + numTweets + "tweets.");
// 			if (statusTxt == "success") {
// 				document.write("Loaded Successfully")
// 			} else {
// 				document.write("Error: " + data + "\nStatus: " + xhr.status + ": " + xhr.statusText);
// 			}
// 		}

// 		});

// 	// event listener

// 	// ajax call
// 	$.ajax({

// 	});
// 	// append to "results-display" & create new html section element
// 	var resultsDisplay = $("#results-display").text(
// 	// $("#search-button-one").append('<em> + "results" +  </em>');
// );
