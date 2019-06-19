$(doucment).ready(function () {
    // search button handler
	$("#search-button-z").on("click", function(e) {
        console.log(e);
    // $("#results-display").append();
    // search input handler
    $('input').focus(function() {
        $(this).css("background", "yellow");

    });

    $('input').blur(function() {
        $(this).css("background", "white");

    });

			// $("#results-display").hide();
			// $("#results-display").show();
		var url = "https://newsapi.org/v2/everything?q=Apple&from=2019-06-16&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
		$.ajax({
			url: url,
			method: "GET"
		}).then(function(resonse){
			console.log(response);
		});

	});
    var clearClick = $(this).html();
		// $("#results-display").append();
		// $("#results-display").hide();
		// $("#results-display").show();


});