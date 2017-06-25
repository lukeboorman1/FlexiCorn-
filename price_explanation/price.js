$(document).ready(function() {

	//CORN FLOUR

	frisian_cornflour_min = 0.40;
	frisian_cornflour_max = 1.80;

	vla_cornflour_min = 1.13;
	vla_cornflour_max = 1.37;

	wasa_cornflour_min = 1.71;
	wasa_cornflour_max = 1.87;

	dorritos_cornflour_min = 0.07;
	dorritos_cornflour_max = 2.43;

	//HFCS

	clubmate_hfcs_min = 1.62;
	clubmate_hfcs_max = 1.78;

	cola_hfcs_min = 0.50;
	cola_hfcs_max = 0.60;

	corona_hfcs_min = 1.65;
	corona_hfcs_max = 1.85;

	croissants_hfcs_min = 0.80;
	croissants_hfcs_max = 1.20;

	skittles_hfcs_min = 0.50;
	skittles_hfcs_max = 2.30;

	wicky_hfcs_min = 0.47;
	wicky_hfcs_max = 0.53;

	// CITRIC ACID

	dorritos_acid_min = 1.23;
	dorritos_acid_max = 1.27;

	clubmate_acid_min = 1.69;
	clubmate_acid_max = 1.71;

	cola_acid_min = 0.54;
	cola_acid_max = 0.55;

	strawberries_acid_min = 1.98;
	strawberries_acid_max = 2.02;

	//ASPARTAMINE

	gum_aspa_min = 0.32;
	gum_aspa_max = 0.69;

	redbull_aspa_min = 1.14;
	redbull_aspa_max = 1.34;

	// MALTODREXIN

	frisia_malto_min = 0.40;
	frisia_malto_max = 1.80;

	coffee_malto_min = 0.10;
	coffee_malto_max = 0.20;

	dorritos_malto_min = 1.19;
	dorritos_malto_max = 1.31;

	// ETHYLENE

	banana_eth_min = 1.88;
	banana_eth_max = 1.90;

	// VEGETABLE PLASTIC

	spa_veg_min = 0.63;
	spa_veg_max = 0.67;

	onload_once();

	var total = setInterval(function() {

		//CORN FLOUR

		frisian_cornflour = randomFloatBetween(frisian_cornflour_min, frisian_cornflour_max, 4);
		frisian_price = frisian_cornflour.toFixed(2);
		$("#frisian_cornflour_price").html("€ " + frisian_price);

		vla_cornflour = randomFloatBetween(vla_cornflour_min, vla_cornflour_max, 8);
		vla_price = vla_cornflour.toFixed(2);
		$("#vla_cornflour_price").html("€ " + vla_price);

		wasa_cornflour = randomFloatBetween(wasa_cornflour_min, wasa_cornflour_max, 4);
		wasa_price = wasa_cornflour.toFixed(2);
		$("#wasa_cornflour_price").html("€ " + wasa_price);

		dorritos_cornflour = randomFloatBetween(dorritos_cornflour_min, dorritos_cornflour_max, 8);
		dorritos_price = dorritos_cornflour.toFixed(2);
		$("#dorritos_cornflour_price").html("€ " + dorritos_price);

		//HFCS

		clubmate_hfcs = randomFloatBetween(clubmate_hfcs_min, clubmate_hfcs_max, 8);
		clubmate_price = clubmate_hfcs.toFixed(2);
		$("#clubmate_hfcs_price").html("€ " + clubmate_price);

		cola_hfcs = randomFloatBetween(cola_hfcs_min, cola_hfcs_max, 8);
		cola_price = cola_hfcs.toFixed(2);
		$("#cola_hfcs_price").html("€ " + cola_price);

		corona_hfcs = randomFloatBetween(corona_hfcs_min, corona_hfcs_max, 8);
		corona_price = corona_hfcs.toFixed(2);
		$("#corona_hfcs_price").html("€ " + corona_price);

		croissants_hfcs = randomFloatBetween(croissants_hfcs_min, croissants_hfcs_max, 8);
		croissants_price = croissants_hfcs.toFixed(2);
		$("#croissants_hfcs_price").html("€ " + croissants_price);

		skittles_hfcs = randomFloatBetween(skittles_hfcs_min, skittles_hfcs_max, 8);
		skittles_price = skittles_hfcs.toFixed(2);
		$("#skittles_hfcs_price").html("€ " + skittles_price);

		wicky_hfcs = randomFloatBetween(wicky_hfcs_min, wicky_hfcs_max, 8);
		wicky_price = wicky_hfcs.toFixed(2);
		$("#wicky_hfcs_price").html("€ " + wicky_price);

		// CITRIC ACID

		dorritos_acid = randomFloatBetween(dorritos_acid_min, dorritos_acid_max, 8);
		dorritos_acid_price = dorritos_acid.toFixed(2);
		$("#dorritos_acid_price").html("€ " + dorritos_acid_price);

		clubmate_acid = randomFloatBetween(clubmate_acid_min, clubmate_acid_max, 8);
		clubmate_acid_price = clubmate_acid.toFixed(2);
		$("#clubmate_acid_price").html("€ " + clubmate_acid_price);

		cola_acid = randomFloatBetween(cola_acid_min, cola_acid_max, 8);
		cola_acid_price = cola_acid.toFixed(2);
		$("#cola_acid_price").html("€ " + cola_acid_price);

		strawberries_acid = randomFloatBetween(strawberries_acid_min, strawberries_acid_max, 8);
		strawberries_acid_price = strawberries_acid.toFixed(2);
		$("#strawberries_acid_price").html("€ " + strawberries_acid_price);

		//ASPARTAMINE

		gum_aspa = randomFloatBetween(gum_aspa_min, gum_aspa_max, 8);
		gum_aspa_price = gum_aspa.toFixed(2);
		$("#gum_aspa_price").html("€ " + gum_aspa_price);

		redbull_aspa = randomFloatBetween(redbull_aspa_min, redbull_aspa_max, 8);
		redbull_aspa_price = redbull_aspa.toFixed(2);
		$("#redbull_aspa_price").html("€ " + redbull_aspa_price);

		// MALTODREXIN

		frisia_malto = randomFloatBetween(frisia_malto_min, frisia_malto_max, 8);
		frisia_malto_price = frisia_malto.toFixed(2);
		$("#frisia_malto_price").html("€ " + frisia_malto_price);

		coffee_malto = randomFloatBetween(coffee_malto_min, coffee_malto_max, 8);
		coffee_malto_price = coffee_malto.toFixed(2);
		$("#coffee_malto_price").html("€ " + coffee_malto_price);

		dorritos_malto = randomFloatBetween(dorritos_malto_min, dorritos_malto_max, 8);
		dorritos_malto_price = dorritos_malto.toFixed(2);
		$("#dorritos_malto_price").html("€ " + dorritos_malto_price);

		// ETHYLENE

		banana_eth = randomFloatBetween(banana_eth_min, banana_eth_max, 8);
		banana_eth_price = banana_eth.toFixed(2);
		$("#banana_eth_price").html("€ " + banana_eth_price);

		// VEGETABLE PLASTIC

		spa_veg = randomFloatBetween(spa_veg_min, spa_veg_max, 8);
		spa_veg_price = spa_veg.toFixed(2);
		$("#spa_veg_price").html("€ " + spa_veg_price);

	}, 1000);

	function randomFloatBetween(minValue, maxValue, precision) {
		return Math.random() * (maxValue - minValue) + minValue;
	}

	function onload_once() {
		//CORN FLOUR

		frisian_cornflour = randomFloatBetween(frisian_cornflour_min, frisian_cornflour_max, 4);
		frisian_price = frisian_cornflour.toFixed(2);
		$("#frisian_cornflour_price").html("€ " + frisian_price);

		vla_cornflour = randomFloatBetween(vla_cornflour_min, vla_cornflour_max, 8);
		vla_price = vla_cornflour.toFixed(2);
		$("#vla_cornflour_price").html("€ " + vla_price);

		wasa_cornflour = randomFloatBetween(wasa_cornflour_min, wasa_cornflour_max, 4);
		wasa_price = wasa_cornflour.toFixed(2);
		$("#wasa_cornflour_price").html("€ " + wasa_price);

		dorritos_cornflour = randomFloatBetween(dorritos_cornflour_min, dorritos_cornflour_max, 8);
		dorritos_price = dorritos_cornflour.toFixed(2);
		$("#dorritos_cornflour_price").html("€ " + dorritos_price);

		//HFCS

		clubmate_hfcs = randomFloatBetween(clubmate_hfcs_min, clubmate_hfcs_max, 8);
		clubmate_price = clubmate_hfcs.toFixed(2);
		$("#clubmate_hfcs_price").html("€ " + clubmate_price);

		cola_hfcs = randomFloatBetween(cola_hfcs_min, cola_hfcs_max, 8);
		cola_price = cola_hfcs.toFixed(2);
		$("#cola_hfcs_price").html("€ " + cola_price);

		corona_hfcs = randomFloatBetween(corona_hfcs_min, corona_hfcs_max, 8);
		corona_price = corona_hfcs.toFixed(2);
		$("#corona_hfcs_price").html("€ " + corona_price);

		croissants_hfcs = randomFloatBetween(croissants_hfcs_min, croissants_hfcs_max, 8);
		croissants_price = croissants_hfcs.toFixed(2);
		$("#croissants_hfcs_price").html("€ " + croissants_price);

		skittles_hfcs = randomFloatBetween(skittles_hfcs_min, skittles_hfcs_max, 8);
		skittles_price = skittles_hfcs.toFixed(2);
		$("#skittles_hfcs_price").html("€ " + skittles_price);

		wicky_hfcs = randomFloatBetween(wicky_hfcs_min, wicky_hfcs_max, 8);
		wicky_price = wicky_hfcs.toFixed(2);
		$("#wicky_hfcs_price").html("€ " + wicky_price);

		// CITRIC ACID

		dorritos_acid = randomFloatBetween(dorritos_acid_min, dorritos_acid_max, 8);
		dorritos_acid_price = dorritos_acid.toFixed(2);
		$("#dorritos_acid_price").html("€ " + dorritos_acid_price);

		clubmate_acid = randomFloatBetween(clubmate_acid_min, clubmate_acid_max, 8);
		clubmate_acid_price = clubmate_acid.toFixed(2);
		$("#clubmate_acid_price").html("€ " + clubmate_acid_price);

		cola_acid = randomFloatBetween(cola_acid_min, cola_acid_max, 8);
		cola_acid_price = cola_acid.toFixed(2);
		$("#cola_acid_price").html("€ " + cola_acid_price);

		strawberries_acid = randomFloatBetween(strawberries_acid_min, strawberries_acid_max, 8);
		strawberries_acid_price = strawberries_acid.toFixed(2);
		$("#strawberries_acid_price").html("€ " + strawberries_acid_price);

		//ASPARTAMINE

		gum_aspa = randomFloatBetween(gum_aspa_min, gum_aspa_max, 8);
		gum_aspa_price = gum_aspa.toFixed(2);
		$("#gum_aspa_price").html("€ " + gum_aspa_price);

		redbull_aspa = randomFloatBetween(redbull_aspa_min, redbull_aspa_max, 8);
		redbull_aspa_price = redbull_aspa.toFixed(2);
		$("#redbull_aspa_price").html("€ " + redbull_aspa_price);

		// MALTODREXIN

		frisia_malto = randomFloatBetween(frisia_malto_min, frisia_malto_max, 8);
		frisia_malto_price = frisia_malto.toFixed(2);
		$("#frisia_malto_price").html("€ " + frisia_malto_price);

		coffee_malto = randomFloatBetween(coffee_malto_min, coffee_malto_max, 8);
		coffee_malto_price = coffee_malto.toFixed(2);
		$("#coffee_malto_price").html("€ " + coffee_malto_price);

		dorritos_malto = randomFloatBetween(dorritos_malto_min, dorritos_malto_max, 8);
		dorritos_malto_price = dorritos_malto.toFixed(2);
		$("#dorritos_malto_price").html("€ " + dorritos_malto_price);

		// ETHYLENE

		banana_eth = randomFloatBetween(banana_eth_min, banana_eth_max, 8);
		banana_eth_price = banana_eth.toFixed(2);
		$("#banana_eth_price").html("€ " + banana_eth_price);

		// VEGETABLE PLASTIC

		spa_veg = randomFloatBetween(spa_veg_min, spa_veg_max, 8);
		spa_veg_price = spa_veg.toFixed(2);
		$("#spa_veg_price").html("€ " + spa_veg_price);
	}

});
