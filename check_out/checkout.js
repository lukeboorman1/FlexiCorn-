$(document).ready(function() {
	var lastTouchEnd = 0;
	document.addEventListener('touchend', function(event) {
		var now = (new Date()).getTime();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false);

	document.addEventListener('touchmove', function(event) {
		if (event.scale !== 1) {
			event.preventDefault();
		}
	}, false);

	var price;
	var quantity;

	$('#finalise').click(function() {
		calc_total_price();
	});

	function calc_total_price() {
		var num_products = $('td div');
		var total_price = 0;

		for (var i = 0; i < num_products.length; i++) {
			num_products[i]
			total_price += calc(i);
			if (i === (num_products.length - 1)) {

				total_price = "€ " + parseFloat(Math.round(total_price * 100) / 100).toFixed(2);
				console.log(total_price);
				$("body").children().remove();
				$("body").append('<header><img id="header" src="../img/flexicorn.svg" alt=""><h3>FlexiCorn</h3></header><span class="checkout_price">' + total_price + "</span><span class=' checkout_descr '>Please refer to the cashier to finalise checkout</span><span class='checkout_descr'>Thank you for shopping at FlexiCorn</span>" + '<div class="outer"><div class="inner"><div class="center" id="padding-top"><a href="../check_out" class="btn_center">Finish Checkout</a></div></div></div>');

			};
		};
	};

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

	// plus minus --------------------------------------------------

	$('.counter').click(function() {
		counter(this);
	})

	function counter(element) {
		var input_element;
		input_element = $(element).siblings()[0]

		if (element.classList[0] == "plus") {
			var value = parseInt(input_element.value, 10);
			value = isNaN(value)
				? 0
				: value;
			value++;

			if (value <= 10 && value >= 0) {
				input_element.value = value;
			}
		}
		if (element.classList[0] == "min") {

			var value = parseInt(input_element.value, 10);
			value = isNaN(value)
				? 0
				: value;
			value--;
			if (value <= 10 && value >= 0) {
				input_element.value = value;
			}
		}
	}

});

function incrementValue() {
	var value = parseInt(input_element.value, 10);
	value = isNaN(value)
		? 0
		: value;
	value++;
	input_element.value = value;
}
