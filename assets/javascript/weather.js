$(document).ready(function() {
	// **need to add "clear children feature still"
	$("#news").on("click", function() {
		$("#results-display").append();
		// **go back to the api, try to limit search results ("articles" in results)
		var url = "https://newsapi.org/v2/top-headlines?sources=google-news-uk&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
		// "https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
		$.ajax({
			url: url,
			method: "GET"
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
    
});