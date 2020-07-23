# Final Project
Use the courses array of objects defined below to display a list of courses available for next semester.
Add a filter mechanism to filter courses based on the following categories:
- Core courses
- Elective courses
- Unique courses
- 300 or above courses

## TODO:
- [x] Use a table to display courses list
- [x] Add a link/checkbox/button to each courses to select/plan for next semester
- [x] Use a table to display selected/planned courses (similar to a shopping cart).
	- [x] Add a button/link to remove courses from the cart.
- [x] Display total credits selected/planned for the next semester.
- [x] Display an appropriate message if the shopping cart is empty.
- [x] Display error messages if the selected course is already in the shopping cart.

The JSON courses:

<code>
	courses = [
		{
			subject: 'CompSci', 
			courseid: 172, 
			title: 'Intro to Java',
			credits: 3, 
			category: 'core' 
		
		},
		{
			subject: 'CompSci', 
			courseid: 174, 
			title: 'Intro to C++', 
			credits: 3, 
			category: 'core'
		
		},
		{
			subject: 'CompSci', 
			courseid: 215, 
			title: 'Discrete Structures', 
			credits: 3, 
			category: 'unique'
		},
		{ 
			subject: 'CompSci', 
			courseid: 220, 
			title: 'Intermediate Java', 
			credits: 3, 
			category: 'core'
		},
		{ 
			subject: 'CompSci', 
			courseid: 222, 
			title: 'Intermediate C++', 
			credits: 3, 
			category: 'core'
		},
		{ 
			subject: 'CompSci', 
			courseid: 223, 
			title: 'Data Structures', 
			credits: 3, 
			category: 'core'
		},
		{ 
			subject: 'CompSci', 
			courseid: 271, 
			title: 'Assembly Programming', 
			credits: 3, 
			category: 'core'
		},
		{ 
			subject: 'CompSci', 
			courseid: 310, 
			title: 'Intermediate Data Science', 
			credits: 3, 
			category: 'elective'
		},
		{ 
			subject: 'CompSci', 
			courseid: 332, 
			title: 'Intro to AI', 
			credits: 3, 
			category: 'elective'
		},
		{ 
			subject: 'CompSci', 
			courseid: 366, 
			title: 'Database Management Systems', 
			credits: 3, 
			category: 'core'
		},
		{ 
			subject: 'CompSci', 
			courseid: 381, 
			title: 'Javascript', 
			credits: 3, 
			category: 'elective'
		},
		{ 
			subject: 'CompSci', 
			courseid: 382, 
			title: 'Server-side Scripting', 
			credits: 3, 
			category: 'elective'
		},
		{ 
			subject: 'CompSci', 
			courseid: 433, 
			title: 'Theory of Algorithms', 
			credits: 3, 
			category: 'core'
		},
		{ 
			subject: 'CompSci', 
			courseid: 476, 
			title: 'Software Engineering', 
			credits: 3, 
			category: 'core'
		},
		{ 
			subject: 'CompSci', 
			courseid: 481, 
			title: 'Unix System Administration', 
			credits: 3, 
			category: 'elective'
		},
		{ 
			subject: 'CompSci', 
			courseid: 482, 
			title: 'Advanced Web Application Development ', 
			credits: 3, 
			category: 'elective'
		},
		{ 
			subject: 'Math', 
			courseid: 250, 
			title: 'Business Calculus', 
			credits: 5, 
			category: 'unique'
		},
		{ 
			subject: 'Math', 
			courseid: 253, 
			title: 'Calculus I', 
			credits: 5, 
			category: 'unique'
		},
		{ 
			subject: 'Math', 
			courseid: 280, 
			title: 'Discrete Mathematics', 
			credits: 3, 
			category: 'unique'
		},
		{ 
			subject: 'Math', 
			courseid: 342, 
			title: 'Statistics', 
			credits: 3, 
			category: 'elective'
		},
		{ 
			subject: 'Math', 
			courseid: 347, 
			title: 'Scientific Computing', 
			credits: 3, 
			category: 'elective'
		},
		{ 
			subject: 'Math', 
			courseid: 355, 
			title: 'Linear Algebra', 
			credits: 3, 
			category: 'elective'
		},
		{ 
			subject: 'Math', 
			courseid: 471, 
			title: 'Numerical Analysis', 
			credits: 3, 
			category: 'elective'
		},
	];
</code>