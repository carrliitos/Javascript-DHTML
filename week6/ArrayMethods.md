# Useful Array Methods
- **find()**
	- Returns the value of the first element in the provided array that satisfies the provided testing function.
	- If the testing condition fails, then the function returns "undefined".
- **includes()**
	- Determines whether an array includes a certain value among its entries; returns *true* or *false* appropriate.
- **findIndex()**
	- Returns the *index* of the first element in the array ***that satisfies the provided testing function***. Otherwise, returns -1, indicating that no element passed the test.
- **forEach()**
	- A method that executes a provided function once for each array element.
- **map()**
	- Allows us to perform the same operation on each of the elements in a given array.
	- It creates a new array with the results of calling a provided function on every element in the calling array.

		<code>const newArray = oldArray.map(function(item) {
				// return modified item to newArray
			});</code>

		<p>or</p>
		<code>
		
			const newArray = oldArray.map(item => {
				// return modified item to newArray
			});
		
		</code>

- **filter()**
	- Allows us to filter elements based on a given condition.
	- It creates a new array with all elements that pass the test implemented by the provided function.

		<code>

			const newArray = oldArray.filter(item => {
				// Test each element using a given condition
				// Returning true keeps the element
			});
		
		</code>