// Define a function to invoke when the "Order" button is pressed
function orderTotals() {
// Read the quantities of each fruits
const apple = document.querySelector("#applequantity").value;
const orange = document.querySelector("#orangequantity").value;
const mango = document.querySelector("#mangoquantity").value;

// Calculate the totals
const totalItems = +apple + +orange + +mango;
var	subTotal = (+apple * 1.25) + (+orange * 0.65) + (+mango * 1.25);
var tax = subTotal * 0.05;
var totalAmount = subTotal + tax;

// Update the text content of the p element that has the id="result"
document.querySelector("#totalItems").textContent = "Total Items: " + totalItems;
document.querySelector("#subTotal").textContent = "Sub Total: $" + subTotal.toFixed(2);
document.querySelector("#tax").textContent = "5% taxes: $" + tax.toFixed(2);
document.querySelector("#totalAmount").textContent = "Total Amount: $" + totalAmount.toFixed(2);
}

document.querySelector("#order").onclick = orderTotals;