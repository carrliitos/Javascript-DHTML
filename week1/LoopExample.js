// define array
const examScores = [75, 76, 80, 98, 100, 78, 76, 88, 98, 72];
// define and initialize a "total" variable
let total = 0;
// find the length of the array
const max = examScores.length;
// use a loop to check if each element of examScore array is greater than or equal to 80.
for(let i = 0; i< max; i++) {
	if(examScores[i] >= 80){
		total++;
	}
}
// Display total number of scores greater than 80
console.log("Total number of scores greater than or equal to 80: " + total);