$(document).ready(function() {
	july_min = 11.79705512;
	july_max = 12.0318189;

	var total = setInterval(function() {
		july = randomFloatBetween(july_min, july_max, 8);
		$("#july_bushel").html(july);
		$("#july_kg").html(july / 1000);
		$("#july_gr").html(july / 1000000);
		$("#july_mg").html(july / 1000000000);

	}, 100);

	function randomFloatBetween(minValue, maxValue, precision) {
		if (typeof(precision) == 'undefined') {
			precision = 2;
		}
		minValue = minValue - 1;
		return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
	}

});
