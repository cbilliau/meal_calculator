'use strict';

// Menu object
const MENU = {
    Fish: 13.99,
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
        this.billDiner = 0;
        this.billTipDiner = 0;
        this.taxDue = 0;
				this.billTotalDiner = 0;
    }

    // Randomly choose one dish from menu
    chooseRandomDish(menu) {
        let dishes = Object.keys(menu);
        let choice = dishes[Math.floor(Math.random() * dishes.length)];
        let dish = menu[choice];
        return dish;
    }

    // Store dish into dishes object
    storeDishDecision(dish) {
        this.dishes.push(dish);
    }

    // Calc total cost of dishes chosen (subTotal)
    calculateSubTotalDiner(dishes) {
        let subTotal = 0;
        for (var el in dishes) {
            if (dishes.hasOwnProperty(el)) {
                subTotal += parseFloat(dishes[el]);
            }
        }
        return subTotal;
    }

    // Calc tip based on subTotal
    calculateTipDiner(subTotal, tipPerc) {
        return (subTotal * tipPerc);
    }

    // Calc tax bill for diner
    calculateTaxDiner(subTotal, salesTax) {
        return (subTotal * salesTax);
    }

    // Calc total bill due for diner
    calculateBillTotalDiner(subTotal, tip, tax) {
        return (subTotal + tip + tax);
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
				for (var i=0; i < arguments.length; i++) {
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


}
const diner1 = new Diner(MENU);
const diner2 = new Diner(MENU);
const diner3 = new Diner(MENU);
const table = new Table (diner1, diner2, diner3); // Holds diners
const bill = new Bill(table); // Holds table (diner 1 & diner 2)
const view = new View(); // To be entered into controller
const controller = new Controller(bill, view); // Holds Bill (table)

console.log(table);
console.log(bill);
console.log(controller);
