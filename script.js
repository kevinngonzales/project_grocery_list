// Create an object variable called groceryItems
const groceryItems = [
    { name: 'Apple', category: 'Fruits', price: 1.0, quantity: 6 },
    { name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },
    { name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },
    { name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },
    { name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12 }
];



// Create a variable called groceryList that grabs our HTML element with an id of
// ‘groceryList’
// Create a variable called totalCostElement that grabs our HTML element with an id of
// ‘totalCost’
// Create a variable called totalQuantityElement that grabs our HTML element with an
// id of ‘totalQuantity’
let groceryList = document.getElementById("groceryList");
let totalCostElement = document.getElementById("totalCost");
let totalQuantityElement = document.getElementById("totalQuantity");



// Create a function called displayGroceryItems
function displayGroceryItems() {
    // Set the groceryList ’s HTML to be empty
    groceryList.textContent = "";
    // Create a variable called totalCost and set it to 0
    // Create a variable called totalQuantity and set it to 0
    let totalCost = 0;
    let totalQuantity = 0;
    // Create a forEach to loop over the groceryItems object with
    // Set the key to be named item
    Object.keys(groceryItems).forEach(key => {
        let item = groceryItems[key];
        // Create a variable called itemDiv that will create a new <div>
        // element
        let itemDiv = document.createElement("div");
        // Set the itemDiv ’s HTML to: <b>${item.name}</b> (${item.category}):
        // $${item.price} - ${item.quantity} units using backticks
        itemDiv.innerHTML = (`<b>${item.name}</b> (${item.category}):
    $${item.price} - ${item.quantity} units`);
        // Append the itemDiv to the groceryList
        groceryList.appendChild(itemDiv);
        totalCost += item.price * item.quantity;
        // Set totalCost to be the item ’s price multiplied by the item ’s quantity
        // Set totalQuantity to be each item added to one another
        // Using a JavaScript method,
        // make sure the price only displays up to 2 decimal places (e.g. $10.60)
        totalCost = parseFloat(totalCost.toFixed(2));
        totalQuantity += item.quantity;
    });
    // Below (and outside of) the forEach loop, set the following:
    // totalCostElement should be set to totalCost 
    // totalQuantityElement should be set to totalQuantity
    totalCostElement.textContent = "Total Cost: $" + totalCost;
    totalQuantityElement.textContent = "Total Quantity: " + totalQuantity;
}



// Create a function called isolateCategory with a parameter called category
function isolateCategory(category) {
    // Set the groceryList ’s HTML to be empty
    groceryList.textContent = "";
    // Create a variable called filteredItems that will use JavaScript’s filter
    // method on groceryItems. Name the key item
    // Set the category of the item s to be triple-equals to category
    let filteredItems = groceryItems.filter(item => item.category === category);
    // Below filteredItems , use a forEach loop to iterate over filteredItems .
    // Name the key item
    filteredItems.forEach(item => {
        // Create a variable called itemDiv that will create a new <div>
        // element        
        let itemDiv = document.createElement("div");
        // (Inside) Set the itemDiv ’s HTML to be: <b>${item.name}</b>
        // (${item.category}): $${item.price} - ${item.quantity} units using backticks
        itemDiv.innerHTML = (`<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity} units`);
        // Append the itemDiv to the groceryList
        groceryList.appendChild(itemDiv);
    });
}



// Create a function called showAllCategories
function showAllCategories() {
    // Have it call the displayGroceryItems function    
    displayGroceryItems();
}



// Create a function called orderItemsByCost
function orderItemsByCost() {
    // Using the JavaScript sort method, use two keys a and b
    // To have the items sort in ascending order, use the expression
    // b.price - a.price
    groceryItems.sort((a, b) => b.price - a.price);
    // Below the sort method, call the displayGroceryItems function
    displayGroceryItems();
}



// Create a function called addItemPrompt
function addItemPrompt() {
    // Create four variables for name , category , price , and quantity
    // Set each to a prompt that will ask the user for their respective information
    let name = prompt("Item Name");
    let category = prompt("Category");
    let price = prompt("Price");
    let quantity = prompt("Quantity");
    // Create a conditional that checks if any of the above categories are
    // missing using the || operator
    // Alert the user when a piece of information is missisng
    // Use a return to stop the function’s execution
    if (!name || !category || !price || !quantity) {
        alert("Please input valid information.");
        return;
    }
    // Below the conditional, create a variable called priceValue
    // Using a parseFloat method, pass in price
    // Create a variable called quantityValue
    // Using a parseInt method, pass in quantity
    let priceValue = parseFloat(price);
    let quantityValue = parseInt(quantity);
    // Below both priceValue and quantityValue , create a condition that checks if either
    // is NaN by using the isNaN method and the || operator
    // Alert the user if either is not a valid numeric value
    // Use a return to break the function’s execution
    if (isNaN(priceValue) || isNaN(quantityValue)) {
        alert("Please input numerical values.");
        return;
    }
    // Below the conditional, create an object called newItem with keys name , category ,
    // price , and quantity , and values name , category , price , and quantityValue
    let newItem = {
        name: name,
        category: category,
        price: price,
        quantity: quantityValue
    };
    // Below newItem , use JavaScript’s push method to add newItem to groceryItems
    groceryItems.push(newItem);
    // Call the displayGroceryItems function
    displayGroceryItems();
}



// Below all of the above functions, call the displayGroceryItems function
displayGroceryItems();