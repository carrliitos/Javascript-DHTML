# Working with Data
- The fetch() function returns a "PROMISE"
	- A "PROMISE" is a way in JavaScript to handle any synchronous event, it gets resolved when the event is over.
	- we can use the method .then(), which is a method that can handle this response
- catch() method allows us to catch errors (similar to try-catch-finally method in JAVA).
- Async/await allows us to condense our code into a more read-able code.
	- We can only use the keyword <code>await</code> in the context of an asynchronous function
		- Example:
		
			<code>
					async function catchTree() {
						const response = await fetch("TreeStructure.png");
					}
			</code>

	- Basically, we're saying, "await the result of fetch, and store that result in this variable called response."

# Working with Tabular Data (CSVs) - [Part 2](https://github.com/carrliitos/Javascript-DHTML/tree/master/Misc/WorkingWithData/Part2)
- We'll be working with [Nasa's Combined Land-Surface Air and Sea-Surface Water Temperature Anomalies (Land-Ocean Temperature Index, LOTI)](https://data.giss.nasa.gov/gistemp/)
- We'll use [Chart.js](https://www.chartjs.org/) to visualize our table with a line graph.
![Sample Graph](https://github.com/carrliitos/Javascript-DHTML/blob/master/Misc/WorkingWithData/Part2/SampleGraph.png)

# Working with External APIs and JSON
- Application Programming Interface
	- These interface concepts are similar to the interfaces we write in Java.
	- For the purpose of this "learning", we'll only be working with using the fetch() method and dealing with URLs
	- For data, we'll be working with [Real-time ISS location](https://wheretheiss.at/), which is a website for for tracking the location of and getting fly-over notifications for the **Internation Space Station**.
	- The API is accessible [here](https://wheretheiss.at/w/developer).
	- For this project, we want to figure out the Latitude and Longitude of the ISS, and also to be able to map those coordinates.
		- To accomplish the second task, we will be using the [Leaflet](https://www.leafletjs.com) library, which is *"an open-source JavaScript library for mobile-friendly interactive maps"*.
	- Things to look for when working with APIs:
		1. What is the **authentication** requirement?
		2. What is the **rate limit**?
			- How many requests can we do per second?
		3. Some other information on **Responses**.
		4. What are the **Endpoints**?
			- These describes the path, the URL path, that you can request a certain bit of data from.
			- Certain APIs will have different Endpoints.
			- Important to check the examples for what the endpoints should look like.
- JSON (JavaScript Object Notation)
	- We've been working with JSON files, but we've only worked with when they're embedded in our code, instead of a separate file.
	<code>	
	
		let pos = {
			longitude: -45,
			latitude: 100
		}
		console.log(pos);
	
	</code>

	- Fundamentally, it is data, written as objects in JavaScript syntax.
![Project 3](https://github.com/carrliitos/Javascript-DHTML/blob/master/Misc/WorkingWithData/Part3/ISS.png)