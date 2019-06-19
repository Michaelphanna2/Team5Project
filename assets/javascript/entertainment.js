$(document).ready(function() {
	// **need to add "clear children feature still"
	$("#entertainment").on("click", function() {
		
		// **go back to the api, try to limit search results ("articles" in results)
        key = "c095f624fd7ced1034d7f0e0c1e1e802"
        var url = "https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=0ec608c4c88f4339b03e2366f95f2d66"
        

		
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

