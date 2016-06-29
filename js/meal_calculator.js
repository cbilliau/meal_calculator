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
        this.bill = 0;
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
        for( var el in dishes) {
          if (dishes.hasOwnProperty(el)) {
            subTotal += dishes[el];
          }
        }
        return subTotal.toFixed(2);
    }

    // Store subTotal
    storeDinerSubTotal(diner, subTotal) {
        let amount = Number(subTotal);
        this.bill = amount;
    }

    // Calc tip based on subTotal
    calculateTipDiner(subTotal, tipPerc) {
        return (subTotal * tipPerc).toFixed(2);
    }

    // Store tip
    storeTipDiner(diner, tip) {
        let amount = Number(tip);
        this.billTip = amount;
    }

    // Calc tax bill for diner
    calculateTaxDiner(subTotal, salesTax) {
        return (subTotal * salesTax).toFixed(2);
    }

    // Store tip
    storeTaxDiner(diner, tax) {
        let amount = Number(tax);
        this.billTax = amount;
    }

    // Calc total bill due for diner
    calculateBillTotalDiner(subTotal, tip, tax) {
        let bill = Number(subTotal);
        let taxes = Number(tax);
        let tips = Number(tip);
        let total = (bill + taxes + tips);
        return total.toFixed(2);
    }

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

    getsubTotal(diner, dishes) {
      return diner.calculateSubTotalDiner(dishes);
    }

    getTipDue(diner, subTotal) {
      return diner.calculateTipDiner(subTotal, diner.tipPerc);
    }

    getTaxDue(diner, subTotal) {
      return diner.calculateTaxDiner(subTotal, diner.salesTax);
    }

    getBillTotal(diner, subTotal, tip, tax) {
      return diner.calculateBillTotalDiner(subTotal, tip, tax);
    }
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


let dishes = controller.chooseMeals(diner1, 2, MENU);
controller.recordMeal(diner1, dishes);

let subTotal = controller.getsubTotal(diner1, dishes);

controller.recordSubTotal(diner1, subTotal);

let tip = controller.getTipDue(diner1, subTotal);
controller.recordTip(diner1, tip);

let tax = controller.getTaxDue(diner1, subTotal);
controller.recordTax(diner1, tax);

let billTotal = controller.getBillTotal(diner1, subTotal, tip, tax);
controller.recordBillTotal(diner1, billTotal);


// console.log('subTotal $' + subTotal);
// console.log('tax $' + tax);
// console.log('tip $' + tip);
// console.log('bill total $' + billTotal);
//
// console.log(table);
// console.log(bill);
// console.log(controller);
