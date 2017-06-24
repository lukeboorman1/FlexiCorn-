$(document).ready(function() {

	// var x = document.getElementById("myNumber").value;
	// document.getElementById("demo").innerHTML = x;

	var price;
	var quantity;

	setInterval(function() {

		console.log(calc(0));

		var num_products = $('td div');
		// var total_price;

		for (var i = 0; i < num_products.length; i++) {
			num_products[i]

			total_price += calc(num_products[i]);
			console.log(total_price);
		}
	}, 500);

	function calc(product) {
		// find the price
		price = $('td div')[product].innerHTML;
		// clean up the price
		price = price.slice(1, price.length);
		price = parseFloat(price);

		//find the quantity
		quantity = $("input[name*='quantity']")[product].value;

		// calc total of this product
		var total = price * quantity;

		// return this number
		return parseFloat(total.toFixed(2));
	};

});
