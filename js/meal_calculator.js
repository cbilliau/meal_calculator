'use strict';

// Import modules
import {MENU} from './Data/Data';
import Diner from './Modules/diner';
import Table from './Modules/table';
import Bill from './Modules/bill';
import View from './Modules/view';
import Controller from './Modules/controller';

// document.addEventListener('DOMContentLoaded', () => {

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

    // Receipt
    console.log(
        "\nChester's Clam Shack \n \n" +
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

// })
