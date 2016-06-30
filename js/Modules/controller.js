// Module Controller class
export default class Controller {

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
