$(document).on("ready", function(){
	var timeout = setTimeout(hideDistractions, 3000)

	$(document).on('mousemove', function() {
		showDistractions();
	    clearTimeout(timeout);

	    timeout = setTimeout(hideDistractions, 3000);
	});
});

var hideDistractions = function() {
    $(".distraction").addClass("is-hidden")
    $("#myCanvas").addClass("has-mouse-hidden")
}

var showDistractions = function() {
	$(".distraction").removeClass("is-hidden")
	$("#myCanvas").removeClass("has-mouse-hidden")
}