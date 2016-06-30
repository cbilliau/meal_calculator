// Module Bill class
export default class Bill {
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
        return sum.toFixed(2);
    }
}
