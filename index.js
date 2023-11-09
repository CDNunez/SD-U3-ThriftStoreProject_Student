//? This array is not to be changed.
const salesTax = [
    {state: 'Alabama', tax: .04},
    {state: 'Alaska', tax: .00},
    {state: 'Arizona', tax: .056},
    {state: 'Arkansas', tax: .065},
    {state: 'California', tax: .0725},
    {state: 'Colorado', tax: .029},
    {state: 'Connecticut', tax: .0635},
    {state: 'Delaware', tax: .00},
    {state: 'DC', tax: .06},
    {state: 'Florida', tax: .06},
    {state: 'Georgia', tax: .04},
    {state: 'Hawaii', tax: .04166},
    {state: 'Idaho', tax: .06},
    {state: 'Illinois', tax: .0625},
    {state: 'Indiana', tax: .07},
    {state: 'Iowa', tax: .06},
    {state: 'Kansas', tax: .065},
    {state: 'Kentucky', tax: .06},
    {state: 'Louisiana', tax: .0445},
    {state: 'Maine', tax: .055},
    {state: 'Maryland', tax: .06},
    {state: 'Massachusetts', tax: .0625},
    {state: 'Michigan', tax: .06},
    {state: 'Minnesota', tax: .06875},
    {state: 'Mississippi', tax: .07},
    {state: 'Missouri', tax: .04225},
    {state: 'Montana', tax: .00},
    {state: 'Nebraska', tax: .055},
    {state: 'Nevada', tax: .0685},
    {state: 'New Hampshire', tax: .00},
    {state: 'New Jersey', tax: .06625},
    {state: 'New Mexico', tax: .05125},
    {state: 'New York', tax: .04},
    {state: 'North Carolina', tax: .0475},
    {state: 'North Dakota', tax: .05},
    {state: 'Ohio', tax: .0575},
    {state: 'Oklahoma', tax: .045},
    {state: 'Oregon', tax: .00},
    {state: 'Pennsylvania', tax: .06},
    {state: 'Rhode Island', tax: .07},
    {state: 'South Carolina', tax: .06},
    {state: 'South Dakota', tax: .06},
    {state: 'Tennessee', tax: .07},
    {state: 'Texas', tax: .0625},
    {state: 'Utah', tax: .061},
    {state: 'Vermont', tax: .06},
    {state: 'Virginia', tax: .053},
    {state: 'Washington', tax: .065},
    {state: 'West Virginia', tax: .06},
    {state: 'Wisconsin', tax: .05},
    {state: 'Wyoming', tax: .04},
];

//! Classes

//*Store Parent Class
class Store {
    static addStore(name,location,tax,inventory,balance,expense,profit,paidTax) {// factory method to create new stores
        let i = tax;
        tax = salesTax[i].tax;
        const newStore = new Store (name,location,tax,inventory,balance,expense,profit,paidTax);//create new store with appropriate tax
        return newStore;
    }

    constructor(name,location,tax,inventory,balance,expense,profit,paidTax){//key/value pairs for store class
        this.name = name;
        this.location = location;
        this.tax = tax;
        this.inventory = [];
        this.balance = 100;
        this.expense = 0;
        this.profit = 0;
        this.paidTax = 0;
    }

    addItem(item, markUp) {//class method to stock item to store class
    if (this.balance > item.purchasePrice){//conditional to determine if there is enough money for store to purchase item
        let storeBalance = this.balance - item.purchasePrice;
        this.balance = Number (storeBalance.toFixed(2));//updates balance
        let storeExpense = this.expense + item.purchasePrice;
        this.expense = Number (storeExpense.toFixed(2))//updates expense
        
        let itemFilter = this.inventory.find(box => { //creates variable that returns whether the variable's upc matches the object's upc
            return box.upc === item.upc
        });
            
        if (itemFilter) {  //if the upc from itemFilter matches the upc from the item passed through then item.quantity is updated
            itemFilter.quantity += item.quantity;//if the item exists, the quantity increases
        } else {
            this.inventory.push(item);//if the item doesn't exist in the array, it is pushed through
        }

        markUp =item.purchasePrice + (item.purchasePrice * markUp); //defines the markUp price of the item
        let taxPrice = markUp * this.tax;//defines the tax amount of the item
        let wholeSale = markUp + taxPrice;//defines the wholeSale price of the item
        item.marketPrice =Number (wholeSale.toFixed(2)); //updates item market price
        console.log(`${this.name} stocked ${item.quantity} ${item.itemName}.`) //this is just to keep track when method fires
    } else if(this.balance < item.purchasePrice) {//conditional to log statement if the store does not have enough funds
        console.log(`${this.name} does not have enough funds to stock ${item.itemName}.`);//keep track of method
    } else {
        console.log("No item selected to add to stock");
    }
    
    }

    sellItem(item, toSell){//class method to sell item in store class
        if (item.quantity >= 1 && item.quantity >= toSell) {//conditional to confirm item is in stock and if there is enough to sell it
            let storeBalance = this.balance + item.marketPrice;
            this.balance = Number (storeBalance.toFixed(2)); //update store balance
            let storeProfit = this.profit + (item.marketPrice - item.purchasePrice);
            this.profit = Number (storeProfit.toFixed(2)); //update store profit
            item.quantity = item.quantity - toSell;//updates item quantity by subtracting how many items toSell
            let taxWithheld = this.paidTax + (item.marketPrice * this.tax);
            this.paidTax  = Number (taxWithheld.toFixed(2)); //update paidTax
            console.log(`${this.name} sold ${toSell} ${item.itemName}.`) //keeps track of method
        } else {
            console.log(`${this.name} out of ${item.itemName}.`);
        }
    }
}



//*Product Class


class Product { //class to create objects with product parameters
    constructor(upc,itemName,department,purchasePrice,quantity,marketPrice){//parameters of product class
        this.upc = upc;
        this.itemName = itemName;
        this.department = department;
        this.purchasePrice = purchasePrice;
        this.quantity = quantity;
        this.marketPrice = marketPrice;
    }
}

//console.log(salesTax.length); //51 -- know the amount of index in array
//console.table(salesTax); //21=MA 6=CT 19=Maine -- table array values with their index


//! CREATE STORES

//?MA Stores
const maStore1 = Store.addStore("Big Al's Thrift Store", {state:"MA" , city: "Springfield"}, 21);
//const maStore2 = Store.addStore("Big Beth's Thrift Store", {state:"MA" , city: "Holyoke"}, 21);
//const maStore3 = Store.addStore("Big Carl's Thrift Store", {state:"MA" , city: "Westfield"}, 21);

// console.log(maStore1,maStore2,maStore3);

//? CT Stores
//const ctStore1 = Store.addStore("Medium Dave's Thrift Store", {state: "CT", city: "Windsor"}, 6);
const ctStore2 = Store.addStore("Medium Ellis' Thrift Store", {state: "CT", city: "Waterbury"}, 6);
//const ctStore3 = Store.addStore("Medium Fabian's Thrift Store", {state: "CT", city: "Hartford"}, 6);

// console.log(ctStore1,ctStore2,ctStore3);

//?MN Stores
//const mnStore1 = Store.addStore("Small Giovanni's Thrift Store", {state: "MN", city:"placeholder"}, 19);
//const mnStore2 = Store.addStore("Small Helena's Thrift Store", {state: "MN", city:"placeholder"}, 19);
const mnStore3 = Store.addStore("Small Ismael's Thrift Store", {state: "MN", city:"Portland"}, 19);

// console.log(mnStore1,mnStore2,mnStore3);



//! Inventory
const pins = new Product(10, 'Pins', 'Accessories', 1, 10);
const animalPins = new Product(10, 'Pins', 'Accessories', 1, 10);
const badges = new Product(10, 'Badges', 'Accessories', 1, 5);

const lipStick = new Product(11, "Lip Stick", 'Makeup', 5, 1);
const eyeShadow = new Product(11, "Eye Shadow", 'Makeup', 4, 1);

const skinnyJeans = new Product(12, "Skinny Jeans", "Pants", 25, 1);
const bootCutJeans = new Product(12, "Boot Cut Jeans", "Pants", 20, 1);
const straightJeans = new Product(12, "Straight Jeans", "Pants", 15, 1);

const shirts = new Product(13, "T-Shirts", "Clothes", 12, 2);
const shoes = new Product (14, "Converse", "Shoes", 10, 1);
const belt = new Product (15, "Leather belt", "Accessories", 5, 15);

const car = new Product (16, "Honda", "Auto", 16000, 1);


//! Stocking

//* First Store
maStore1.addItem(skinnyJeans, .6);
maStore1.addItem(bootCutJeans, .5);
maStore1.addItem(shirts, .6);
maStore1.addItem(shirts, .6);
//* Second Store
ctStore2.addItem(pins, .5);
ctStore2.addItem(pins, .5);
ctStore2.addItem(animalPins, .5);
ctStore2.addItem(badges, .8);
//* Third Store
mnStore3.addItem(shoes, .5);
mnStore3.addItem(belt, .3);
mnStore3.addItem(car, .8);
//! Selling

//* First Store
maStore1.sellItem(shirts, 1);
maStore1.sellItem(bootCutJeans, 1);
//* Second Store
ctStore2.sellItem(pins, 5);
//* Third Store
mnStore3.sellItem(belt, 10);
mnStore3.sellItem(belt, 10);//test to try out overselling an item
//! Testing
/* 
    Simply console log each store to check the completed details.
*/

console.log(maStore1);

console.log('-------------------------------'); //divider for readability


console.log(ctStore2);

console.log('-----------------------------'); //divider for readability


console.log(mnStore3);
