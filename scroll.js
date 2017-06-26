$('document').ready(function() {
	$("html, body").animate({
		scrollTop: $(document).height()
	}, 40000, "linear");
	setTimeout(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 40000, "linear");
	}, 40000);
	var scrolltopbottom = setInterval(function() {
		// 40000 - it will take 4 secound in total from the top of the page to the bottom
		$("html, body").animate({
			scrollTop: $(document).height()
		}, 40000, "linear");
		setTimeout(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 40000, "linear");
		}, 40000);
	}, 8000);
});
