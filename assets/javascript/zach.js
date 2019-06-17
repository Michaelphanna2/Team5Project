$(function() {

	// searching news articles that mention a specific topic or keyword
	var urlOne = "https://newapi.org/v2/everything?" + 
				"q=Apple&" + "from=2019-06-16&" + "sortBy=popularity&" +
				"apiKey=0ec608c4c88f4339b03e2366f95f2d66";
	var req = new Request (url);

	fetch(req)
	.then(function(response) {
		console.log(response.json());
	})

	var urlTwo = "https://newsapi.org/v2/top-headlines?" + 
		"sources=bbc-news&" + 
		"apiKey=0ec608c4c88f4339b03e2366f95f2d66";

	var req = new Request(url);
	fetch(req) 
	.then(function(respones){
		console.log(respone.json());
	})

$(".search-button-one").append('<em> "results" </em>');


$.ajax({
	url: urlOne, urlTwo,
	dataType: "jsonp"
	success: function(results){
		var title = results.response.oneforty;
		var numTweets = results.response.trackback_total;
		$("#results").append(title + "has" + numTweets + "tweets.");
		if (statusTxt == "success") {
			document.write("Loaded Successfully")
		} else {
			document.write("Error: " + data + "\nStatus: " + xhr.status + ": " + xhr.statusText);
		}
		}

		}

	)
}