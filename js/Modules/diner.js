// Module Diner class
export default class Diner {

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
