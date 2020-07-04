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

		return price, savings, discountedPrice;
	}else {
		price = totalArea * 5;
	}

	if(distance > 0) {
		return deliveryCharges = 2.50 * parseFloat(distance);
	}else {
		return deliveryCharges = 0;
	}
}

/* Function to display results */
function displayResults(totalArea, price, savings, deliveryCharges, taxedAmount, totalAmount) {
	document.querySelector("#outputWithInstallation").textContent = "With installation charge:";
	
}