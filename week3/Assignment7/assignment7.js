// Add an event listener
document.querySelector("#calculate").onclick = function() {
	/** Read and validate input datas
		If errors are present, display appropriately
		else, continue on with calculation and display
	*/
	const error_list = validateInputData();
	if(error_list.length > 0) {
		displayErrorMessages(error_list);
	}else {
		calculateResults();
		resetErrorMessages();
	}
}

/* Function for data validation */
function validateInputData() {
	let errors = [];

	const length = document.querySelector("#lengthInput").value;
	if(isNaN(length) || length < 0) {
		errors.push("ERROR: Length input is invalid.");
	}
	const width = document.querySelector("#widthInput").value;
	if(isNaN(width) || width < 0) {
		errors.push("ERROR: Width input is invalid.");
	}
	const distance = document.querySelector("#distanceInput").value;
	if(isNaN(distance) || distance < 0) {
		errors.push("ERROR: Distance input is invalid.");
	}

	return errors;
}

/* Function for displaying error messages */
function displayErrorMessages(error_list) {
	if(error_list.length > 0) {
		let message = "";
		for(let i = 0; i < error_list.length; i++) {
			message += "<p>" + error_list[i] + "</p>";
		}
		document.querySelector("#error").innerHTML = message;
	}
}

/** Function for reseting the error messages */
function resetErrorMessages() {
	document.querySelector("#error").innerHTML = "";
}

/* Function for calculating results */
function calculateResults() {
	let totalArea = 0;
	let price = 0;
	let savings = 0;
	let deliveryCharges = 0;
	let taxedAmount = 0;
	let totalAmount = 0;

	let length = document.querySelector("#lengthInput").value;
	let width = document.querySelector("#widthInput").value;
	let distance = document.querySelector("#distanceInput").value;

	totalArea = parseFloat(length) * parseFloat(width);
	
	if(totalArea > 300) {
		price = totalArea * 5;
		savings = price * 0.1;
		let discountedPrice = price - savings;
		taxedAmount = (0.05 * discountedPrice);
		totalAmount = taxedAmount + discountedPrice;
		
		if(distance > 0) {
			deliveryCharges = 2.50 * parseFloat(distance);
		}else {
			deliveryCharges = 0;
		}

		displayResults(totalArea, price, savings, deliveryCharges, taxedAmount, totalAmount, discountedPrice);
	}else {
		price = totalArea * 5;
		taxedAmount = (0.05 * price) + price;
		totalAmount = price + taxedAmount;

		if(distance > 0) {
			deliveryCharges = 2.50 * parseFloat(distance);
		}else {
			deliveryCharges = 0;
		}

		displayResults(totalArea, price, savings=0, deliveryCharges, taxedAmount, totalAmount, discountedPrice=0);
	}
}

/* Function to display results */
function displayResults(totalArea, price, savings, deliveryCharges, taxedAmount, totalAmount, discountedPrice) {
	document.querySelector("#totalArea").textContent = "Total Area: " + totalArea;
	document.querySelector("#subTotal").textContent = "Subtotal: $" + price;
	document.querySelector("#deliveryCharges").textContent = "Delivery Charge: $" + deliveryCharges;
	if(discountedPrice > 0) {
		document.querySelector("#discount").textContent = "Discount: $" + discountedPrice;
	}
	document.querySelector("#tax").textContent = "Tax Amount: $" + taxedAmount;
	document.querySelector("#totalAmountWithinstallation").textContent = "Total Amount (with installation charge): $" + (totalAmount + (2*totalArea));
	document.querySelector("#totalAmountNoInstall").textContent = "Total Amount (with no installation charge): $" + totalAmount;
}