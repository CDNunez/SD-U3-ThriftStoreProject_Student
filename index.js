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


//*Parent Store Class
class Store {
    constructor(storeName, location, tax, inventory, balance, expenses, profit, paidTax) {
        this.storeName = storeName;
        this.location = location;
        this.tax = tax;
        this.inventory;
        this.balance = balance;
        this.expenses = expenses;
        this.profit = profit;
        this.paidTax;
    }

    findTax() {
    }
}

//? Testing logs:
//console.log(salesTax.length); //51
//console.table(salesTax); //tables each state with index value and tax value


//*First Extended Class From Store Parent Class
class MassachusettsStore extends Store {
    constructor(storeName,location,tax,inventory,balance,expenses,profit,paidTax) {
        super(storeName,location,tax,inventory,balance,expenses,profit,paidTax);
    }

    addItems() {

    }

    sellItems() {

    }
}

//*Second Extended Class From Store Parent Class
class ConnecticutStore extends Store {
    constructor(storeName,location,tax,inventory,balance,expenses,profit,paidTax) {
        super(storeName,location,tax,inventory,balance,expenses,profit,paidTax);
    }
    addItems() {

    }

    sellItems() {
        
    }
}

//*Third Extended Class From Store Parent Class
class MaineStore extends Store {
    constructor(storeName,location,tax,inventory,balance,expenses,profit,paidTax) {
        super(storeName,location,tax,inventory,balance,expenses,profit,paidTax);
    }
    addItems() {

    }

    sellItems() {
        
    }
}

//! CREATE STORES
// Generate 3 different stores, each in a different state.

//* MA Store
let massStore = new MassachusettsStore ("BigAl'sBestStore", {city: "Springfield", state: "MA"}, salesTax[21].tax, 100);

console.log(massStore); //logs MA Store

//* CT Store
let connStore = new ConnecticutStore ("BigBees'BestStore", {city: "Windsor", state: "CT"}, salesTax[6].tax, 200);

console.log(connStore); //logs CT Store

//* MN Store
let maineStore = new MaineStore ("BigBeth'sBestStore", {city: "Portland", state: "MN"}, salesTax[19].tax, 300);

console.log(maineStore); //logs MN Store

//! Inventory


//! Stocking

//* First Store

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