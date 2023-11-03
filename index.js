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
    static addStore(name,location,tax,inventory,balance,expense,profit,paidTax) {
        let i = tax;
        tax = salesTax[i].tax;
        const newStore = new Store (name,location,tax,inventory,balance,expense,profit,paidTax);
        return newStore;
    }

    constructor(name,location,tax,inventory,balance,expense,profit,paidTax){
        this.name = name;
        this.location = location;
        this.tax = tax;
        this.inventory = [];
        this.balance = 100;
        this.expense = 0;
        this.profit = 0;
        this.paidTax = 0;
    }

    // addItem(item){
    //     if (this.balance > item.purchasePrice) {
    //         this.balance = this.balance - item.purchasePrice;
    //         this.inventory.push(item);
    //         if (this.inventory.includes(item.upc)) {
    //             item.quantity = item.quantity++;
    //             this.inventory.push(item);
    //         }
    //     } else {
    //         console.log("Not Enough Funds");
    //     }
    // }

    addItem(item) {
    if (this.balance > item.purchasePrice){//function to determine if there is enough money for store to purcahse item
        this.balance = this.balance - item.purchasePrice;//updates balance
        this.expense = this.expense + item.purchasePrice;//updates expense
        if (this.inventory.includes(item)) {//checks if item is already in inventory
            item.quantity++;//updates the quantity of item in stock
        } else {
            this.inventory.push(item);//else stocks item
        }
        let markup =item.purchasePrice + (item.purchasePrice * .2);
        let taxPrice = markup * this.tax;
        let wholeSale = markup + taxPrice;
        item.marketPrice =Number (wholeSale.toFixed(2));
    }
    
    }

    sellItem(){

    }
}


//*Product Parent Class


class Product {
    constructor(upc,itemName,department,purchasePrice,quantity,marketPrice){
        this.upc = upc;
        this.itemName = itemName;
        this.department = department;
        this.purchasePrice = purchasePrice;
        this.quantity = quantity;
        this.marketPrice = marketPrice;
    }
}

const pants = new Product(12, "Jeans", "Clothes", 25, 1);
//console.log(pants);

//console.log(salesTax.length); //51
//console.table(salesTax); //21=MA 6=CT 19=Maine


//! CREATE STORES

//?MA Stores
const maStore1 = Store.addStore("Big Al's Thrift Store", {state:"MA" , city: "Springfield"}, 21);
const maStore2 = Store.addStore("Big Beth's Thrift Store", {state:"MA" , city: "Holyoke"}, 21);
const maStore3 = Store.addStore("Big Carl's Thrift Store", {state:"MA" , city: "Westfield"}, 21);

// console.log(maStore1,maStore2,maStore3);

//? CT Stores
const ctStore1 = Store.addStore("Medium Dave's Thrift Store", {state: "CT", city: "Windsor"}, 6);
const ctStore2 = Store.addStore("Medium Ellis' Thrift Store", {state: "CT", city: "Waterbury"}, 6);
const ctStore3 = Store.addStore("Medium Fabian's Thrift Store", {state: "CT", city: "Hartford"}, 6);

// console.log(ctStore1,ctStore2,ctStore3);

//?MN Stores
const mnStore1 = Store.addStore("Small Giovanni's Thrift Store", {state: "MN", city:"placeholder"}, 19);
const mnStore2 = Store.addStore("Small Helena's Thrift Store", {state: "MN", city:"placeholder"}, 19);
const mnStore3 = Store.addStore("Small Ismael's Thrift Store", {state: "MN", city:"placeholder"}, 19);

// console.log(mnStore1,mnStore2,mnStore3);



//! Inventory


//! Stocking

//* First Store
maStore1.addItem(pants);
console.log(maStore1);
maStore1.addItem(pants);
console.log(maStore1);
//* Second Store

//* Third Store

//! Selling

//* First Store

//* Second Store

//* Third Store

//! Testing
/* 
    Simply console log each store to check the completed details.
*/


// let testObj = {
//     balance: 100,
//     testArray: [],
// }

// let testProduct = {
//     price: 25,
//     prodName: "testProduct",
//     quantity: 1,
//     idNum: 13,
// }

// console.log("Test OBJ", testObj,"TestProduct", testProduct);

// function addToArray(item) {
//     if(testObj.balance > testProduct.price) {
//         testObj.balance = testObj.balance - testProduct.price;
//         testObj.testArray.push(item);
//         if( testObj.balance >= testProduct.price && testObj.testArray.includes(testProduct.idNum)){
//             testProduct.quantity = testProduct.quantity + 1;
//             return testProduct.quantity;
//         }
//     } else {
//         console.log("Not enough funds");
//     }
// }

// console.log("---------------------");
// addToArray(testProduct);
// console.log(testObj);
// console.log("---------------------");
// addToArray(testProduct);
// console.log(testObj);

// let itemPrice = 10;
// let taxPrice = 0.0625;
// let marketValue;
// let priceUp;
// let itemTax;


// priceUp = itemPrice + (itemPrice * .2);
// console.log(priceUp);
// itemTax = priceUp * taxPrice;
// console.log(itemTax);
// marketValue = priceUp + itemTax;
// console.log(marketValue);
