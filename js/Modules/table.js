// Module Table class
export default class Table {

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
        return (this.sumAmount(sub) + this.sumAmount(tax) + this.sumTableTip()).toFixed(2);
    }

}
