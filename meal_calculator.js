'use strict';

// Menu object
const MENU = {
    Fish: 13.99,
    Shrimp: 13.99,
    Clams: 14.99,
    Oysters: 17.99
}

// Sales tax
const SALESTAX = 0.06;

const TIP = .18;

// Diner Class
class Diner {

    constructor(menu, salesTax, tipPerc) {
        this.menu = menu;
        this.salesTax = salesTax;
        this.tipPerc = tipPerc;
        this.dishes = [];
        this.billDiner = 0;
        this.billTipDiner = 0;
        this.taxDue = 0;
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

    /*
     * The Table class will hold the Diner class
     */

    constructor(diner) {
        this.diner = diner;
    }
}

// Bill Class
class Bill {

    /*
     * The Bill class will hold the Table class
     */

    constructor(table) {
        this.table = table;
        this.billTable = 0;
        this.billTipTable = 0;
    }


}
