$(document).ready(function() {
	
	// **need to add "clear children feature still"
	$("#news").on("click", function() {
		$("#results-display").append();
		var clearClick = $(this).html();
		// **go back to the api, try to limit search results ("articles" in results)
		var url = "https://newsapi.org/v2/top-headlines?sources=google-news-uk&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
		// "https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
		$.ajax({
			url: url,
			method: "GET",
			clearClick: true
		}).then(function(response){
			console.log(response);
			var articles = response.articles;
			for( var i = 0; i<articles.length; i++){
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

				
			};
		});

	});
	// sports click function
	$("#sports").on("click", function() {
		console.log("click");
		// **go back to the api, try to limit search results ("articles" in results)
		var url = "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
		$.ajax({
			url: url,
			method: "GET",
			clearClick: true
		}).then(function(response){
			console.log(response);

			var articles = response.articles;
			
			for( var i = 0; i<articles.length; i++){
			
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

				
			};
		});

	});

	// weather widget for top of window
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