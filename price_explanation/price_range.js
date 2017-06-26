$(document).ready(function() {
	july17_min = 11.79705512;
	july17_max = 12.0318189;

	september17_min = 11.79705512;
	september17_max = 12.0318189;

	december17_min = 12.36048819;
	december17_max = 12.58719291;

	march18_min = 12.65762205;
	march18_max = 12.86890945;

	var total = setInterval(function() {
		july17_raw = randomFloatBetween(july17_min, july17_max, 8);
		july17 = july17_raw.toFixed(4);
		// $(".july17_bushel").html(july17);
		$(".july17_bushel").html(july17_raw.toFixed(2));
		$(".july17_kg").html(july17 / 100);
		$(".july17_gr").html(july17 / 10000);
		$(".july17_mg").html(july17 / 100000);

		september17_raw = randomFloatBetween(september17_min, september17_max, 8);
		september17 = september17_raw.toFixed(4);
		$(".september17_bushel").html(september17);
		$(".september17_kg").html(september17 / 100);
		$(".september17_gr").html(september17 / 1000);
		$(".september17_mg").html(september17 / 100000);

		december17_raw = randomFloatBetween(december17_min, december17_max, 8);
		december17 = december17_raw.toFixed(4);
		$(".december17_bushel").html(december17);
		$(".december17_kg").html(december17 / 100);
		$(".december17_gr").html(december17 / 1000);
		$(".december17_mg").html(december17 / 100000);

		march18_raw = randomFloatBetween(march18_min, march18_max, 8);
		march18 = march18_raw.toFixed(4);
		$(".march18_bushel").html(march18);
		$(".march18_kg").html(march18 / 100);
		$(".march18_gr").html(march18 / 1000);
		$(".march18_mg").html(march18 / 100000);

		cornsyropraw = randomFloatBetween(july17_min, july17_max, 2);
		cornsyrop = cornsyropraw + 2.23
		cornsyrop_price = cornsyrop.toFixed(2);
		$(".syrop_cost").html(cornsyrop);

		cornsyroprawkg = randomFloatBetween(july17_min, july17_max, 2);
		cornsyropkg = (cornsyroprawkg + 2.23) / 15.1
		cornsyropkg_price = cornsyropkg.toFixed(2);
		$("syrop_1kg").html(cornsyropkg);

	}, 1000);

	function randomFloatBetween(minValue, maxValue, precision) {
		if (typeof(precision) == 'undefined') {
			precision = 2;
		}
		minValue = minValue - 1;
		return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision));
	}

});
