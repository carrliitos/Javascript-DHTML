/**
* Benzon Carlitos Salazar
* CS381 - Assignment 1
*/

// Define the array with the scores
const examScores = [25, 34, 78, 87, 99, 83, 92, 88, 81, 73, 70, 79, 63, 67];

function grades(grades){
	// Define the grades;
	var gradeA = 0;
	var gradeB = 0;
	var gradeC = 0;
	var gradeD = 0;
	var gradeF = 0;
	for(let i = 0; i < examScores.length; i++) {
		// list of scores greater than 90
		if(examScores[i] < 60) {
			gradeF++;
		}else if(examScores[i] >= 60 && examScores[i] < 70) {
			gradeD++;
		}else if(examScores[i] >= 70 && examScores[i] < 80) {
			gradeC++;
		}else if(examScores[i] >= 80 && examScores[i] < 90) {
			gradeB++;
		}else {
			gradeA++;
		}
	}
	console.log("Total number of A's: " + gradeA);
	console.log("Total number of B's: " + gradeB);
	console.log("Total number of C's: " + gradeC);
	console.log("Total number of D's: " + gradeD);
	console.log("Total number of F's: " + gradeF);
}
// Calculate the average score
var averageTestScores = 0;
var sum = 0;
var numberOfScores = examScores.length;
// Loop through the array and add each element
for(let j = 0; j < numberOfScores; j++) {
	sum = sum + examScores[j];
	averageTestScores = sum / numberOfScores;
}

console.log("Average Score: " + averageTestScores.toFixed(2));
grades.apply(examScores);