    $(document).ready(function() {
	// $(".query_btn").click(function(){
	//     var query_param = $(this).prev().val();
	// })

	// search button handler
	$("#postForm").submit(function(e) {
		e.preventDefault();
		var search = $("#input").val();
		var body = $("#body").val();
		
		$.post(url, {title:title, body:body})
			.done(function(data){
			console.log("data");
			});

		console.log(e);
        // ajax & api begin
        
        
        var foff = "https://www.foaas.com/?callback=?";
        // asshole/:from?callback=?"
		var userInput = "";
		
		var url = foff
			// "https://newsapi.org/v2/everything?q=Apple&from=2019-06-19&sortBy=popularity&apiKey=0ec608c4c88f4339b03e2366f95f2d66";
		$.ajax({
            url: url,
			method: "GET",
            dataType: "json"
            
		}).done(function(data){
			console.log(data);
			donald = "Donald Trump";
			if(userInput == donald);
				

			$.map(data, function(post, i){
				$("#result-display").append("<div>" + post.title + "</div><p>" + post.body+ "</p>");
			});
		});
            
	});
        
    });