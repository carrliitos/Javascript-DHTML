# Javascript fat arrow functions and template literals:
- **String interpolation**
	- A feature that allows you to work with string literals
	- Example:
	
		<code>
			const customer = "Foo Bar";
			console.log(`Hello ${customer}`);

			function getCustomer() {
				return "Foo Bar";
			}

			console.log(`Hello ${getCustomer()}`);
		</code>
	
	- The output of this code is: Hello Foo Bar.

- **Multi-line Strings**
	- String can span multiple lines in your code.
	- You can use backticks to write multi-line strings without the need to concatenate them
	- Example:

		<code>
			const message = `Please enter a password that
				has at least 8 characters and 
				include a capital letter`;
			console.log(message);
		</code>

- **Fat Arrow Functions (=>)**
	- They are shorthand for writing functions
	- Example:
	
		<code>
			const sum = function(arg1, arg2) {
				return arg1 + arg2;
			}
		</code>
	
	- *Arrow function expression* is an alternative to a regular function expression
	- Example:

		<code>
			(arg1, arg2, arg3, ..., argN) => {statements}
		</code>

	- Using **=>**, we can define the sum as:
	
		<code>
			const sum = (arg1, arg2) => {
				return arg1 + arg2;
			}
		</code>

	- Another example: Suppose we wish to display each element of the following array:
	
		<code>
			const data = ["Sam Walton", "Bill Gates", "Warren Buffet"];
		</code>

	- We could either use a loop, **forEach() method**, or we can use the fat arrow:
	
		<code>
			data.forEach((line) => {
				console.log(line);
			});	
		</code>