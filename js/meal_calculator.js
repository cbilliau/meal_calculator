'use strict';

// Menu object
const MENU = {
    Fish: 9.99,
    Shrimp: 13.99,
    Clams: 14.99,
    Oysters: 17.99
}

// Diner Class
class Diner {

    constructor(menu) {
        this.menu = menu;
        this.salesTax = .06;
        this.tipPerc = .2;
        this.dishes = [];
        this.billSub = 0;
        this.billTip = 0;
        this.billTax = 0;
        this.billTotal = 0;
    }

    // Randomly choose one dish from menu
    chooseRandomDish(num, menu) {
        let dish = [];
        let plates = Object.keys(menu);
        for (var i = 1; i <= num; i++) {
            let choice = plates[Math.floor(Math.random() * plates.length)];
            dish.push(menu[choice]);
        }
        return dish;
    }

    // Store dish into dishes object
    storeDinerDishes(dish) {
        this.dishes.push(dish);
    }

    // Calc total cost of dishes chosen (subTotal)
    calculateSubTotalDiner(dishes) {
        let subTotal = 0;
        for (var el in dishes) {
            if (dishes.hasOwnProperty(el)) {
                subTotal += dishes[el];
            }
        }
        return subTotal.toFixed(2);
    }

    // Store subTotal
    storeDinerSubTotal(diner, subTotal) {
        let amount = Number(subTotal);
        this.billSub = amount;
    }

    // Calc tax bill for diner
    calculateTaxDiner(subTotal, salesTax) {
        return (subTotal * salesTax).toFixed(2);
    }

    // Store tax
    storeTaxDiner(diner, tax) {
        let amount = Number(tax);
        this.billTax = amount;
    }

    // Store tip
    storeTipDiner(diner, tip) {
            let amount = Number(tip);
            this.billTip = amount;
        }
        // Calc total bill due for diner
    calculateBillTotalDiner(subTotal, tax, tip) {
        let bill = Number(subTotal);
        let taxes = Number(tax);
        let tips = this.billTip;
        let total = (bill + taxes + tips).toFixed();
        console.log(total);
        return total;
    }

    // let bill = Number(subTotal);
    // let taxes = Number(tax);
    // // If/Esle for calc w/ or w/o tip
    // if (tip == null) {
    //     var total = (bill + taxes);
    // } else {
    //     var tips = Number(tip)
    //     var total = (bill + taxes + tips);
    // };
    // return total.toFixed(2);

    // Store total bill
    storeTotalDiner(diner, billTotal) {
        let amount = Number(billTotal);
        this.billTotal = amount;
    }
}

// Table Class
class Table {

    // The Table class will hold the Diner class

    constructor(...diner) { // P.S. I love you ES6!!!
        this.diners = diner;
        this.tableSub = 0;
        this.tableTip = 0;
        this.tableTax = 0;
        this.tableTotal = 0;
    }

    // Sum subtotal for table from diners
    sumAmount(name) {
      let amount = 0;
      let obj = '';
      for (var i = 0; i < this.diners.length; i++) {
        obj = 'bill' + name;
        amount += this.diners[i][obj];
      }
      return amount;
    }

    sumTableTip() {
      let tip = Number((this.tableSub * .18).toFixed(2));
      return tip;
    }

    splitTableTip() {
      let dinerTipAmount = Number((this.tableTip / this.diners.length).toFixed(2));
      return dinerTipAmount;
    }

    sendDinerTip(tip) {
      for (var i = 0; i < this.diners.length; i++) {
        this.diners[i].billTip = tip;
      }
    }

    storeTableAmount(name, amount) {
      let obj = 'table' + name;
      this[obj] = amount;
    }

    // Sum tip for table from diners
    sumTableTotal(sub, tax) {
      return (this.sumAmount(sub) + this.sumAmount(tax) + this.sumTableTip());
    }

}

// Bill Class (Method)
class Bill {
    // The Bill class will hold the Table class

    constructor(table) {
        this.table = table;
        this.billTable = 0;
        this.billTipTable = 0;
    }

    // Routine to calc diner totals
    // Use for subTotal, tip, and tax
    calculateTotalsTable() {
        let sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += parseInt(arguments[i]);
        }
        return sum;
    }
}

class View {
    constructor() {}
}

class Controller {

    constructor(bill, view) {
            this.bill = bill;
            this.view = view;
        }
        // Get rndm dishes for
    chooseMeals(diner, num, menu) {
        return diner.chooseRandomDish(num, menu);
    }

    /*
     * Calculate costs for diner
     */

    getsubTotal(diner, dishes) {
        return diner.calculateSubTotalDiner(dishes);
    }

    getTaxDue(diner, subTotal) {
        return diner.calculateTaxDiner(subTotal, diner.salesTax);
    }

    getBillTotal(diner, subTotal, tax, tip) {
        return diner.calculateBillTotalDiner(subTotal, tax, tip);
    }

    /*
     * Assign data to diner
     */

    recordMeal(diner, dishes) {
        diner.storeDinerDishes(dishes);
    }

    recordSubTotal(diner, subTotal) {
        diner.storeDinerSubTotal(diner, subTotal);
    }

    recordTip(diner, tip) {
        diner.storeTipDiner(diner, tip);
    }

    recordTax(diner, tax) {
        diner.storeTaxDiner(diner, tax);
    }

    recordBillTotal(diner, billTotal) {
        diner.storeTotalDiner(diner, billTotal);
    }

    // Bill controller


    // getTableBill



}

// Instances
// Create diners
const diner1 = new Diner(MENU);
const diner2 = new Diner(MENU);

//Create table, bill, andcontroller
const table = new Table(diner1, diner2); // Holds diners
const bill = new Bill(table); // Holds table (diner 1 & diner 2)
const view = new View(); // To be entered into controller
const controller = new Controller(bill, view); // Holds Bill (table)



// ---------Sand Box -----------
// Diner 2
table.diners[1].billSub = 100;

// Diner 1
let dishes = controller.chooseMeals(diner1, 2, MENU);
controller.recordMeal(diner1, dishes);

let subTotal = controller.getsubTotal(diner1, dishes);

controller.recordSubTotal(diner1, subTotal);

let tax = controller.getTaxDue(diner1, subTotal);
controller.recordTax(diner1, tax);


// Table Bill
let sub = "Sub";
let tableSubTotal = table.sumAmount(sub);
table.storeTableAmount(sub, tableSubTotal);

let taxes = "Tax";
let tableTaxTotal = table.sumAmount(taxes);
table.storeTableAmount(taxes, tableTaxTotal);

let tipAmount = "Tip";
let tableTipAmount = table.sumTableTip();
table.storeTableAmount(tipAmount, tableTipAmount)


let total = "Total";
let totalAmount = table.sumTableTotal(sub, taxes);
table.storeTableAmount(total, totalAmount);

let tip = table.splitTableTip();
table.sendDinerTip(tip);

let billTotal = controller.getBillTotal(diner1, subTotal, tax);
controller.recordBillTotal(diner1, billTotal);

// sum table bill
// sum table tax
// sum table tip
// spread tip evenly to diners

// doc.ready
// make shit go

// ----- Logs -------------

// console.log(table);
// console.log(bill);
console.log(controller.bill.table.diners);
console.log(controller);
