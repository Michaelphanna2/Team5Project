$(document).ready(function() {
	// **need to add "clear children feature still"
	$("#news").on("click", function() {
		// **go back to the api, try to limit search results ("articles" in results)
		var url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
			// "https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
		$.ajax({
			url: url,
			method: "GET",
		}).then(function(response) {
			console.log(response);
			var articles = response.articles;
			for (var i = 0; i < articles.length; i++) {
				var article = articles[i];

				// create container div
				var newDiv = $("<div>");
				newDiv.html(article.title);

				// creating img
				var newProperty = $("<img>");
				newProperty.attr("src", article.urlToImage);

				// add image to div
				newDiv.append(newProperty);

				// add container div to results display
				$("#results-display").append(newDiv);
			}
		});
	});


// **Needs to clear click children from previous clicks still**
	$("#sports").on("click", function() {
		var url =
			"https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
		$.ajax({
			url: url,
			method: "GET",
		}).then(function(response) {
			console.log(response);

			var article = response.articles;
			// looping through array
			var articles = response.articles;
			for (var i = 0; i < articles.length; i++){
				var article = articles[i];
				// creates container div
				var newDiv = $("<div>");
				
				// prints to html
				newDiv.html(article.title);

				// adds img from article
				var newProperty = $("<img>");
				newProperty.attr("src", article.urlToImage);

				// adds img to div
				newDiv.append(newProperty);

				// add container
				$("#results-display").append(newDiv);
			}
		});
	});
	// searching news articles that mention a specific topic or keyword
	// var urlEverything =
	// 	"https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
	
	//var topHeadlinesTypes= ['sports','news']
	// var urlTopHeadlines =
	// 	"https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
	// // searching news articles that mention a specific topic or keyword
	// var urlEverything = "https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66"
	
	// //var topHeadlinesTypes= ['sports','news']
	// 	var urlTopHeadlines = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
	
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
			
});
// 	$.getJSON("https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66");

// 	$.getJSON("https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66");

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
