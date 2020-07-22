# Javascript fat arrow functions and template literals:
- **String interpolation**
	- A feature that allows you to work with string literals
	- Example:
	
	`const customer = "Foo Bar";`
	`console.log((`)Hello ${customer}(`))`
	
	- The output of this code is: Hello {customer} (whatever the function of the customer is)

- **Multi-line Strings**
	- String can span multiple lines in your code.
	- You can use backticks to write multi-line strings without the need to concatenate them
	- Example:

	`const message = (`)Please enter a password that
			has at least 8 characters and 
			include a capital letter(`);
	console.log(message);`

- **Fat Arrow Functions (=>)**
	- They are shorthand for writing functions
	- Example:

	`const sum = function(arg1, arg2) {
		return arg1 + arg2;
	}`

	- 