// manipulating an array of objects
function Course (subject ,courseNumber, title, credits){
		this.subject = subject;
		this.courseNumber = courseNumber;
		this.title = title;
		this.credits = credits;
		
 }

// define an array to store courses
const courseList = [];
	 
// add courses
courseList.push(new Course('CompSci', 172, 'Intro to Java', 3));
courseList.push(new Course('CompSci', 174, 'Intro to C++', 3));  
courseList.push(new Course('CompSci', 271, 'Assembly', 3));
courseList.push(new Course('CompSci', 381, 'Javascript', 3));
courseList.push(new Course('CompSci', 382, 'PHP', 3));
courseList.push(new Course('Math', 152, 'Pre-calc', 5));
courseList.push(new Course('Math', 253, 'Calc I', 5));
courseList.push(new Course('Math', 280, 'Discrete', 3));
	 
/* Use a loop to go through each element in the courseList array and display
	    Math courses 
*/
const mathCourses = [];
const max  = courseList.length;
	
//Filter math courses
for (let i = 0; i < max; i++) {
	/* Each course is an object with four properties: subject, courseNumber, title, credits
	   use the 'subject' property to filter courses where subject equals 'Math'.
	   Use the syntax
	     object.property 
	to  access any 'property of an object.
	For example, courseList[0].subject identifies the 'subject' property of
	courseList[0] element.
	*/
	if ( courseList[i].subject === 'Math') {
		// add it to the mathCourses array
		mathCourses.push(courseList[i]);
	}
}
	
// Find the number of 'Math courses
const numMathCourses = mathCourses.length;
	
/* if the number of 'Math' courses is greater than 0 then display 'Math' courses.
		Otherwise, display an appropriate message.
*/
	
if (numMathCourses > 0) {
	displayCourseList('Math', mathCourses);
} else {
	console.log( "There are no Math courses");
}
	
function displayCourseList(subject, list) {
	console.log("List of " + subject + ' courses');
	const max = list.length;
	for (let i = 0; i < max; i++) {
		console.log("Course: " + list[i].subject + ' ' + list[i].courseNumber);
	}	
}