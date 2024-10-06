// 1. Store Details
const storeName = "Tech Haven";
const storeLocation = "Metro Manila";
const storeCapacity = 500; // Maximum number of products the store can hold

// 2. Dynamic Product Inventory
let products = [
    { name: "Laptop", price: 18999, quantity: 50 },
    { name: "Smartphone", price: 9999, quantity: 100 },
    { name: "Tablet", price: 12999, quantity: 80 }
];

// 3. Inventory Validation
function checkInventoryCapacity() {
    let totalProducts = 0;

    products.forEach(product => {
        totalProducts += product.quantity;
    });

    if (totalProducts > storeCapacity) {
        console.log("Store is over capacity!");
        return false;
    }
    return true;
}

// 4. Product Manipulation
function addProduct(productName, price, quantity) {
    let totalProducts = 0;
    products.forEach(product => {
        totalProducts += product.quantity;
    });

    if (totalProducts + quantity > storeCapacity) {
        console.log("Cannot add more products. Store is at full capacity.");
        return;
    }
    
    products.push({ name: productName, price: price, quantity: quantity });
    console.log(`${productName} added to the store.`);
}

function removeProduct(productName, quantity) {
    let product = products.find(p => p.name === productName);
    
    if (product) {
        if (product.quantity - quantity < 0) {
            console.log("Error: Cannot remove more than the available quantity.");
        } else {
            product.quantity -= quantity;
            console.log(`${quantity} units of ${productName} removed. Updated quantity: ${product.quantity}`);
        }
    } else {
        console.log(`Product ${productName} not found.`);
    }
}

// 5. Most Expensive Product
function getMostExpensiveProduct() {
    let mostExpensive = products[0];
    
    products.forEach(product => {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    });
    
    return mostExpensive;
}

// 6. Total Inventory Value
function calculateTotalInventoryValue() {
    let totalValue = 0;
    
    products.forEach(product => {
        totalValue += product.price * product.quantity;
    });
    
    return totalValue;
}

// 7. User Interaction
function promptUser() {
    let newProductName = prompt("Enter new product name:");
    let newProductPrice = parseFloat(prompt("Enter product price:"));
    let newProductQuantity = parseInt(prompt("Enter product quantity:"));

    addProduct(newProductName, newProductPrice, newProductQuantity);

    console.log(`Total Inventory Value: ${calculateTotalInventoryValue()}`);

    let removeResponse = prompt("Would you like to remove a product? (yes/no)");
    
    if (removeResponse.toLowerCase() === "yes") {
        let productToRemove = prompt("Enter the product name you want to remove:");
        let quantityToRemove = parseInt(prompt("Enter the quantity to remove:"));
        removeProduct(productToRemove, quantityToRemove);
    }
}

// 8. Comments: The following are console log outputs as per instructions

function showDetails(){

    console.log(`Store Name: ${storeName}`);
    console.log(`Store Location: ${storeLocation}`);

    let totalProductQuantity = 0;
    products.forEach(product => {
        totalProductQuantity += product.quantity;
    });
    console.log(`Total Number of Products: ${totalProductQuantity}`);

    console.log(`Total Inventory Value: ${calculateTotalInventoryValue()}`);

    let mostExpensiveProduct = getMostExpensiveProduct();
    console.log(`Most Expensive Product: ${mostExpensiveProduct.name}`);

    if (!checkInventoryCapacity()) {
        console.log("Store is over capacity, cannot add new products.");
    }

}

showDetails();
console.log(`Type promptUser() to start
and showDetails() to see details`);

