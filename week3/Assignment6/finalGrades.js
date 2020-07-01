// Add an event listener to the element identified by the ID attribute "calculate"
document.querySelector("#calculate").onclick = function() {
	/** Read and validate input datas
		If errors are present, display appropriately
		else, continue on with calculation and display
	*/
	const error_list = validateInputData();
	if(error_list.length > 0) {
		displayErrorMessages(error_list);
		resetCalculations();
	}else {
		displayResults();
		resetErrorMessages();
	}
}

/** Function for data validation */
function validateInputData() {
	let errors = [];

	const exam1 = document.querySelector("#exam-1").value;
	if(isNaN(exam1) || exam1 < 0) { 
		errors.push("ERROR: Exam 1 score is invalid.");
	}

	const exam2 = document.querySelector("#exam-2").value;
	if(isNaN(exam2) || exam2 < 0) { 
		errors.push("ERROR: Exam 2 score is invalid.");
	}

	const exam3 = document.querySelector("#exam-3").value;
	if(isNaN(exam3) || exam3 < 0) { 
		errors.push("ERROR: Exam 3 score is invalid.");
	}

	const exam4 = document.querySelector("#exam-4").value;
	if(isNaN(exam4) || exam4 < 0) { 
		errors.push("ERROR: Final Exam score is invalid.");
	}

	// Check that each exam scores are no greater than 75 points
	let exams = [exam1, exam2, exam3, exam4];
	for(var i = 0; i < exams.length; i++) {
		if(exams[i] > 75) {
			errors.push("ERROR: Exam scores cannot be greater than 75 points.");
		}
	}

	return errors;
}

/** Function for displaying error messages */
function displayErrorMessages(error_list) {
	if(error_list.length > 0) {
		let message = "";
		for(let i = 0; i < error_list.length; i++) {
			message += "<p>" + error_list[i] + "</p>";
		}
		// Display our errors
		document.querySelector("#error").innerHTML = message;
	}
	// reset data output
	resetCalculations();
}

/** Function for reseting the error messages */
function resetErrorMessages() {
	document.querySelector("#error").innerHTML = "";
}

/** Function for reseting calculations */
function resetCalculations() {
	document.querySelector("#total").textContent = 0;
	document.querySelector("#grade").textContent = "";
}

/** Function for displaying the results */
function displayResults() {
	let total = 0;
	let grade = "";
	for(var i = 1; i <= 4; i++) {
		total += Number(document.querySelector("#exam-" + i).value);
	}

	if(total < 180) {
		document.querySelector("#total").textContent = total;
		document.querySelector("#grade").textContent = "F";
	}else if(total >= 180 && total <= 209) {
		document.querySelector("#total").textContent = total;
		document.querySelector("#grade").textContent = "D";
	}else if(total >= 201 && total <= 239) {
		document.querySelector("#total").textContent = total;
		document.querySelector("#grade").textContent = "C";
	}else if(total >= 240 && total <= 269) {
		document.querySelector("#total").textContent = total;
		document.querySelector("#grade").textContent = "B";
	}else {
		document.querySelector("#total").textContent = total;
		document.querySelector("#grade").textContent = "A";
	}
}