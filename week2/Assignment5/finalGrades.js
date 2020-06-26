// read values
function readValues() {
	const exam1 = document.querySelector("#exam-1").value;
	const exam2 = document.querySelector("#exam-2").value;
	const exam3 = document.querySelector("#exam-3").value;
	const finalExam = document.querySelector("#exam-4").value;

	const validData = validate(exam1, exam2, exam3, finalExam);

	if(validData) {
		displayResults(exam1, exam2, exam3, finalExam)
	}else {
		document.querySelector("#error").textContent = "ERROR: Scores can only be between 0 and 75 points!";
	}
}

// validate data
function validate(exam1, exam2, exam3, exam4) {
	var exams = [exam1, exam2, exam3, exam4];
	for (var i = 0; i < exams.length; i++) {
		if(exams[i] < 0 || exams[i] > 75) {
			return false;
		}
	}
	return true;
}

// calculate and display results
function displayResults(exam1, exam2, exam3, exam4) {
	const grade = "";
	const total = parseInt(exam1) + parseInt(exam2) + parseInt(exam3) + parseInt(exam4);

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

document.querySelector("#calculate").onclick = readValues;