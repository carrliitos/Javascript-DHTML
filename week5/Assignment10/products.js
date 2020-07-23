const products = [
	{
		type: 'electronics',
		name: 'Audio Technica ATH-M50x',
		price: 119.99,
		quantity: 2
	},
	{
		type: 'electronics',
		name: 'Sennheiser HD 202 II',
		price: 24.50,
		quantity: 5
	},
	{
		type: 'electronics',
		name: 'GPX HM3817DTBK Micro System',
		price: 135.99,
		quantity: 1
	},
	{
		type: 'electronics',
		name: 'Samsung MX-J630 2.0 Channel 230 Watt System',
		price: 117.99,
		quantity: 4
	},
	{
		type: 'electronics',
		name: 'M-Audio Bass Traveler',
		price: 29.00,
		quantity: 9
	},
	{
		type: 'electronics',
		name: 'HLED Strip light kit',
		price: 17.95,
		quantity: 5
	},
	{
		type: 'movies',
		name: 'Spectre',
		price: 19.99,
		quantity: 0
	},
	{
		type: 'movies',
		name: 'Finding Dory',
		price: 19.99,
		quantity: 4
	},
	
	{
		type: 'movies',
		name: 'Terminator: Genisys',
		price: 14.95,
		quantity: 3
	},
	{
		type: 'movies',
		name: 'Interstellar',
		price: 12.00,
		quantity: 4
	},
	{
		type: 'movies',
		name: 'Transformers: Age of Extinction',
		price: 9.95,
		quantity: 7
	},
	{
		type: 'movies',
		name: 'Eye in the Sky',
		price: 14.95,
		quantity: 6
	},
	{
		type: 'movies',	
		name: 'Venom',
		price: 22.99,
		quantity: 0
	},
	{
		type: 'movies',
		name: 'The spy who dumped me',
		price: 29.00,
		quantity: 8
	},
	{
		type: 'movies',
		name: 'Mamma Mia, Here We Go Again',
		price: 22.99,
		quantity: 4
	},
	{
		type: 'video-games',
		name: 'Battlefield 1',
		price: 59.99,
		quantity: 3
	},
	{
		type: 'video-games',
		name: 'Overwatch',
		price: 40.00,
		quantity: 1
	},
	{
		type: 'video-games',
		name: 'Gears of War 4',
		price: 59.99,
		quantity: 8
	},
	{
		type: 'video-games',
		name: 'Titanfall 2',
		price: 59.99,
		quantity: 7
	},
	{
		type: 'video-games',
		name: 'Sid Meier\'s Civilization VI ',
		price: 59.99,
		quantity: 4
	},
	{
		type: 'video-games',
		name: 'The Sims 4',
		price: 39.99,
		quantity: 2
	},
	{
		type: 'video-games',
		name: 'Grand Theft Auto V',
		price: 59.99,
		quantity: 7
	}
];

// Define an array to store selected item's array-index
let selectedItems = [];
// Display products list
displayProductList();

function displayProductList() {
	let output = "";
	// find the length of the product list
	const max = products.length;

	for(let index = 0; index < max; index++) {
		// For each "index", identify the corresponding product
		const p = products[index];
		const price = parseFloat(p.price);

		// Create a table row (HTML structure) using each product
		output += "<tr><td><input type=\"checkbox\" onclick=\"updateCart(" + index + ")\" id=\"c-" + index + "\" /> ";
		output +=   p.name + "</td>";		
		output += "<td id=\"ch-" + (index + 1) + "-label\" >" + p.type + "</td>";
		output += "<td>" + price.toFixed(2) + "</td>";				
		output += "</tr>";

		/* use these for buttons
		output += "<tr><td id=\"ch-" + (index + 1) + "-type\" >" + p.type + "</td>";
		output += "<td id=\"ch-" + (index + 1) + "-label\" >" + p.name + "</td>";
		output += "<td id=\"ch-" + (index + 1) + "-price\" >" + price.toFixed(2) + "</td>";
		output += "<td><button type=\"button\" class=\"btn btn-primary\" class=\"add-btn\" onclick=\"addItemToCart(" + index + ")\" >Add</button></td>";
		output += "</tr>";
		*/
	}
	// Display the HTML structure
	document.querySelector("#product-list").innerHTML = output;		

	// Initial shopping cart is empty	
	document.querySelector(".cart-total").innerHTML = "Shopping cart is empty";
}

/* Check box Function */
function updateCart(index) {
	// Use the id attribute to identify the selected checkbox
	const itemId = "#c-" + index;
	if ( document.querySelector(itemId).checked) {
		// Add index of the selected item to the selectedItems array
		selectedItems.push(index);
	} else {
	// Remove index of the selected item to the selectedItems array
		selectedItems = selectedItems.filter(function(item){
		return item !== index;
	});
	}
	// Display items in the shopping cart
	displayShoppingCart();
	// Calculate and display total amount
	displayResult();
}

/* Button Function */
// function addItemToCart(index) {
// 	selectedItems.push(index);
// 	// Display items in the shopping cart
// 	displayShoppingCart();
// 	// Calculate and display total amount
// 	displayResult();
// }

function displayShoppingCart() {
	const max = selectedItems.length;
	if ( max === 0) {
		// Shopping cart is empty
		document.querySelector(".cart-total").innerHTML = "Shopping cart is empty";
		document.querySelector(".cart-items").innerHTML = "";
		resetCalculations();
		document.querySelector("#shoppingcart").style.visibility = 'visible';
		return;
	}
	let itemInfo = "";
	for (let i = 0; i < max; i++) {
		const arrayIndex = selectedItems[i];
		const item = products[arrayIndex];
		const itemPrice = parseFloat(item.price);
		itemInfo += "<tr><td>" + item.name + "</td>";
		itemInfo += "<td>" + itemPrice.toFixed(2) + "</td>";
		itemInfo += "<td><button class=\"btn btn-danger\" type=\"button\" onclick=\"deleteItem(" + arrayIndex + ")\">Remove</button></td></tr>"; 
	}

	document.querySelector(".cart-items").innerHTML = itemInfo;
	// Update total number of items selected
	document.querySelector(".cart-total").innerHTML = "<strong>Total selected items:</strong> " + max;
	document.querySelector("#shoppingcart").style.visibility = 'visible';
}

function displayResult(){
	if (selectedItems.length > 0) {
		let total = 0;
		let subtotal = 0;
		const max = selectedItems.length;
		for (let i=0; i < max; i++){
		// Read array-index of each selected item
			const item = selectedItems[i];
			// Identify the corresponding product in the products array
			const product = products[item];
			// Use the selected item, which is an object, to calculate subtotal
			subtotal +=   product.price;
		}
		
		// Calculate taxes
		const taxes = subtotal*0.05;
		
		// Calculate the final amount
		const final_amount = (subtotal + taxes)*0.80;
		
		
		// Display result
		document.querySelector('.subtotal').textContent = "$" + subtotal.toFixed(2);
		document.querySelector('.tax').textContent = "$" + taxes.toFixed(2);
		document.querySelector('.total').textContent = "$" + (subtotal + taxes).toFixed(2);
		document.querySelector('.final').textContent = "$" + final_amount.toFixed(2);
	}
}

function resetCalculations() {
	// Reset the output
	document.querySelector('.subtotal').textContent = 0;
	document.querySelector('.tax').textContent = 0;
	document.querySelector('.total').textContent = 0;
	document.querySelector('.final').textContent = 0;
}
	
function deleteItem(index) {
	selectedItems = selectedItems.filter(function(item){
		return item !== index;
	});
	displayShoppingCart();
	displayResult();
}