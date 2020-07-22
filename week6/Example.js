// Example to use find(), map(), filter(), reduce(), forEach() methods

const products = [{
	type: 'electronics',
	name: 'Audio Technica ATH-M50x',
	price: 119.99,
	quantity: 2 },
   {
	type: 'electronics',
	name: 'Sennheiser HD 202 II',
	price: 24.50,
	quantity: 5 },
   {
	type: 'electronics',
	name: 'GPX HM3817DTBK Micro System',
	price: 135.99,
	quantity: 1 },
   {
	type: 'electronics',
	name: 'Samsung MX-J630 2.0 Channel 230 Watt System',
	price: 117.99,
	quantity: 4 },
   {
	type: 'electronics',
	name: 'M-Audio Bass Traveler',
	price: 29.00,
	quantity: 9 },
   {
	type: 'electronics',
	name: 'HLED Strip light kit',
	price: 17.95,
	quantity: 5 },
   { type: 'movies', name: 'Spectre', price: '19.99', quantity: 0 },
   {
	type: 'movies',
	name: 'Finding Dory',
	price: 19.99,
	quantity: 4 },
   
   {
	type: 'movies',
	name: 'Terminator: Genisys',
	price: 14.95,
	quantity: 3 },
   {
	type: 'movies',
	name: 'Interstellar',
	price: 12.00,
	quantity: 4 },
   {
	type: 'movies',
	name: 'Transformers: Age of Extinction',
	price: 9.95,
	quantity: 7 },
   {
	type: 'movies',
	name: 'Eye in the Sky',
	price: 14.95,
	quantity: 6 },
   {
	type: 'movies',
	name: 'Venom', 
	price: '22.99', 
	quantity: 0 },
   {
	type: 'movies',
	name: 'The spy who dumped me',
	price: 29.00,
	quantity: 8 },
   {
	type: 'movies',
	name: 'Mamma Mia, Here We Go Again',
	price: 22.99,
	quantity: 4 },
   {
	type: 'electronics',
	name: 'M-Audio Bass Traveler',
	price: 29.00,
	quantity: 5 },
   {
	type: 'video-games',
	name: 'Battlefield 1',
	price: 59.99,
	quantity: 3 },
   {
	type: 'video-games',
	name: 'Overwatch',
	price: 40.00,
	quantity: 1 },
   {
	type: 'video-games',
	name: 'Gears of War 4',
	price: 59.99,
	quantity: 8 },
   {
	type: 'video-games',
	name: 'Titanfall 2',
	price: 59.99,
	quantity: 7 },
   {
	type: 'video-games',
	name: 'Sid Meier\'s Civilization VI ',
	price: 59.99,
	quantity: 4 },
   {
	type: 'video-games',
	name: 'The Sims 4',
	price: 39.99,
	quantity: 2 },
   {
	type: 'video-games',
	name: 'Grand Theft Auto V',
	price: 59.99,
	quantity: 7 }];

// Problem 1: Find all the products with a price > 100
const problem1 = products.filter(item => {
	item.price > 100;
});

// Problem 2: Find all the electronics with a price > 100
const problem2 = products.filter(item => {
	item.price > 100 && item.type === `electronics`;
});

// Problem 3: Find the revenue generated by each product: revenue = price * quantity
let message1 = "";
products.forEach(item => {
	message1 += "<p>" + item.name + ", " + item.price * item.quantity + "</p>";
});

// Problem 4: Find the revenue
const revenue = products.reduce((acc, item) => {
	acc + item.price * item.quantity, 0;
});

// Problem 5: Find the revenue generated by electronic items
const electronicRevenue = products.filter(item => item.type === 'electronics').reduce( (acc, item) => acc + item.price * item.quantity, 0)