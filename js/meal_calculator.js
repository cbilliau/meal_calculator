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
        let total = (bill + taxes + tips).toFixed(2);
        return total;
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

}

document.addEventListener('DOMContentLoaded', () => {

    // Instanciate diner1 - must happen first
    let diner1 = new Diner(MENU);
    let diner2 = new Diner(MENU);

    // Instanciate table, bill, and controller - only after creating diners
    let table = new Table(diner1, diner2); // Holds diners
    let bill = new Bill(table); // Holds table (diner 1 & diner 2)
    let view = new View(); // To be entered into controller
    let controller = new Controller(bill, view); // Holds Bill (table)

    // Create diner1 & diner2 bill
    for (var i = 0; i < controller.bill.table.diners.length; i++) {
        let diner = controller.bill.table.diners[i];
        let dishes = controller.chooseMeals(diner, 2, MENU); // Randomly choose two meals (2nd arg '2')
        let subTotal = controller.getsubTotal(diner, dishes); // Subtotal meal
        let tax = controller.getTaxDue(diner, subTotal); // Determine meal tax

        controller.recordMeal(diner, dishes); // Record meals chosen prices
        controller.recordSubTotal(diner, subTotal); // Record subtotal
        controller.recordTax(diner, tax); // Record tax
    }


    // Table Bill
    let sub = "Sub";
    let tableSubTotal = table.sumAmount(sub); // Sum table subtotal
    table.storeTableAmount(sub, tableSubTotal); // Store table subtotal

    let taxes = "Tax";
    let tableTaxTotal = table.sumAmount(taxes); // Sum table tax
    table.storeTableAmount(taxes, tableTaxTotal); // Store table tax

    let tipAmount = "Tip";
    let tableTipAmount = table.sumTableTip(); // Sum table tip
    table.storeTableAmount(tipAmount, tableTipAmount) // Store table tip
    let tip = table.splitTableTip(); // Split table tip
    table.sendDinerTip(tip); // Assign tip evenly back to all diners

    let total = "Total";
    let totalAmount = table.sumTableTotal(sub, taxes); // Sum table total
    table.storeTableAmount(total, totalAmount); // Store table total

    // Calculate Diner's total
    for (var i = 0; i < controller.bill.table.diners.length; i++) {
        let diner = controller.bill.table.diners[i];
        let subTotal = controller.bill.table.diners[i].billSub;
        let tax = controller.bill.table.diners[i].billTax;
        let billTotal = controller.getBillTotal(diner, subTotal, tax);
        controller.recordBillTotal(diner, billTotal);
    }

    // Recipts
    console.log(
        "\nThank You. Come again! \n \n" +
        "Table 14 \nTotal Bill: $" + controller.bill.table.tableTotal + "\n" +
        "Total Tax:  $" + controller.bill.table.tableTax + "\n" +
        "Tip:        $" + controller.bill.table.tableTip + "\n \n" +
        "Diner 1\n" +
        "Subtotal    $" + controller.bill.table.diners[0].billSub + "\n" +
        "Tax         $" + controller.bill.table.diners[0].billTax + "\n" +
        "Tip         $" + controller.bill.table.diners[0].billTip + "\n" +
        "Total       $" + controller.bill.table.diners[0].billTotal + "\n \n" +
        "Diner 2\n" +
        "Subtotal    $" + controller.bill.table.diners[1].billSub + "\n" +
        "Tax         $" + controller.bill.table.diners[1].billTax + "\n" +
        "Tip         $" + controller.bill.table.diners[1].billTip + "\n" +
        "Total       $" + controller.bill.table.diners[1].billTotal + "\n\n" +
        "Thank You. Come again!"
    )

})
