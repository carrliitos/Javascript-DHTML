courses = [
	{
		subject: "CompSci", 
		courseid: 172, 
		title: "Intro to Java",
		credits: 3, 
		category: "core" 
	},
	{
		subject: "CompSci", 
		courseid: 174, 
		title: "Intro to C++", 
		credits: 3, 
		category: "core"
	},
	{
		subject: "CompSci", 
		courseid: 215, 
		title: "Discrete Structures", 
		credits: 3, 
		category: "unique"
	},
	{ 
		subject: "CompSci", 
		courseid: 220, 
		title: "Intermediate Java", 
		credits: 3, 
		category: "core"
	},
	{ 
		subject: "CompSci", 
		courseid: 222, 
		title: "Intermediate C++", 
		credits: 3, 
		category: "core"
	},
	{ 
		subject: "CompSci", 
		courseid: 223, 
		title: "Data Structures", 
		credits: 3, 
		category: "core"
	},
	{ 
		subject: "CompSci", 
		courseid: 271, 
		title: "Assembly Programming", 
		credits: 3, 
		category: "core"
	},
	{ 
		subject: "CompSci", 
		courseid: 310, 
		title: "Intermediate Data Science", 
		credits: 3, 
		category: "elective"
	},
	{ 
		subject: "CompSci", 
		courseid: 332, 
		title: "Intro to AI", 
		credits: 3, 
		category: "elective"
	},
	{ 
		subject: "CompSci", 
		courseid: 366, 
		title: "Database Management Systems", 
		credits: 3, 
		category: "core"
	},
	{ 
		subject: "CompSci", 
		courseid: 381, 
		title: "Javascript", 
		credits: 3, 
		category: "elective"
	},
	{ 
		subject: "CompSci", 
		courseid: 382, 
		title: "Server-side Scripting", 
		credits: 3, 
		category: "elective"
	},
	{ 
		subject: "CompSci", 
		courseid: 433, 
		title: "Theory of Algorithms", 
		credits: 3, 
		category: "core"
	},
	{ 
		subject: "CompSci", 
		courseid: 476, 
		title: "Software Engineering", 
		credits: 3, 
		category: "core"
	},
	{ 
		subject: "CompSci", 
		courseid: 481, 
		title: "Unix System Administration", 
		credits: 3, 
		category: "elective"
	},
	{ 
		subject: "CompSci", 
		courseid: 482, 
		title: "Advanced Web Application Development ", 
		credits: 3, 
		category: "elective"
	},
	{ 
		subject: "Math", 
		courseid: 250, 
		title: "Business Calculus", 
		credits: 5, 
		category: "unique"
	},
	{ 
		subject: "Math", 
		courseid: 253, 
		title: "Calculus I", 
		credits: 5, 
		category: "unique"
	},
	{ 
		subject: "Math", 
		courseid: 280, 
		title: "Discrete Mathematics", 
		credits: 3, 
		category: "unique"
	},
	{ 
		subject: "Math", 
		courseid: 342, 
		title: "Statistics", 
		credits: 3, 
		category: "elective"
	},
	{ 
		subject: "Math", 
		courseid: 347, 
		title: "Scientific Computing", 
		credits: 3, 
		category: "elective"
	},
	{ 
		subject: "Math", 
		courseid: 355, 
		title: "Linear Algebra", 
		credits: 3, 
		category: "elective"
	},
	{ 
		subject: "Math", 
		courseid: 471, 
		title: "Numerical Analysis", 
		credits: 3, 
		category: "elective"
	},
]

let selectedItems = [];
displayCoursesList();

function displayCoursesList() {
	let output = "";
	const max = courses.length;

	for(let index = 0; index < max; index++) {
		const course = courses[index];

		output += "<tr><td id=\"ch-" + (index + 1) + "-subject\" >" + course.subject + "</td>";
		output += "<td id=\"ch-" + (index + 1) + "-courseID\" >" + course.courseid + "</td>";
		output += "<td id=\"ch-" + (index + 1) + "-title\" >" + course.title + "</td>";
		output += "<td id=\"ch-" + (index + 1) + "-credits\" >" + course.credits + "</td>";
		output += "<td id=\"ch-" + (index + 1) + "-category\" >" + course.category + "</td>";
		output += "<td><button type=\"button\" class=\"btn btn-primary\" class=\"add-btn\" onclick=\"addItemToCart(" + index + ")\" >Add to cart</button></td>";
		output += "</tr>";
	}

	document.querySelector("#courseList").innerHTML = output;
}

function addItemToCart(index) {
	selectedItems.push(index);
	for(let i = 0; i < selectedItems.length; i++) {
		if(selectedItems[i] == selectedItems[i + 1]) {
			alert("Class is already added to shopping cart");
			selectedItems.pop(i + 1);
		}else {
			displayShoppingCart();
			displayResult();
		}
	}
}

function displayShoppingCart() {
	const max = selectedItems.length;
	if(max == 0) {
		document.querySelector(".cartSummary").innerHTML = "Shopping cart is empty";
		document.querySelector("#totalCredits").innerHTML = "";
		document.querySelector(".cartItems").innerHTML = "";
		resetCalculations();
		document.querySelector("#shoppingcart").style.visibility = 'visible';
		return;
	}

	let itemInfo = "";
	let totalCredits = 0;
	for (let i = 0; i < max; i++) {
		const arrayIndex = selectedItems[i];
		const course = courses[arrayIndex];
		const credits = course.credits

		itemInfo += "<tr><td>" + course.subject + "</td>";
		itemInfo += "<td>" + course.courseid + "</td>";
		itemInfo += "<td>" + course.title + "</td>";
		itemInfo += "<td>" + course.credits + "</td>";
		itemInfo += "<td><button class=\"btn btn-danger\" type=\"button\" onclick=\"deleteItem(" + arrayIndex + ")\">Remove</button></td></tr>"; 
		totalCredits += parseInt(credits);
	
	}

	document.querySelector(".cartItems").innerHTML = itemInfo;
	// Update total number of items selected
	document.querySelector(".cartSummary").innerHTML = "<strong>Total classes selected:</strong> " + max;
	document.querySelector("#totalCredits").innerHTML = "<strong>Total Credits:</strong> " + totalCredits;
	document.querySelector("#shoppingcart").style.visibility = 'visible';
}

function displayResult(){
	if (selectedItems.length > 0) {
		let itemInfo = "";
		const max = selectedItems.length;
		for (let i=0; i < max; i++){
			const index = selectedItems[i];
			const course = courses[index];

			itemInfo += "<tr><td>" + course.title + "</td>";
			itemInfo += "<td>" + course.credits + "</td></tr>";
		}
		document.querySelector(".summaryBody").innerHTML = itemInfo;
	}
}

function resetCalculations() {
	document.querySelector('.summaryBody').textContent = "";
}

function deleteItem(index) {
	selectedItems = selectedItems.filter(function(item){
		return item !== index;
	});
	displayShoppingCart();
	displayResult();
}