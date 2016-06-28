'use strict';


// Menu object
const MENU = {
	Fish: 13.99,
	Crab: 13.99,
	Clams: 14.99,
	Oysters: 17.99
}

// Diner Class
class Diner	{

	constructor(menu) {
		this.menu = menu;
		this.dishes = [];
		this.billDiner = 0;
		this.billTipDiner = 0;
		this.taxDue = 0;
	 }

	 chooseRandomDish(menu)	{
		 let dishes = Object.keys(menu);
		 let choice = dishes[ Math.floor(Math.random()*dishes.length)];
		 let dish = menu[choice];
		 return dish;
	 }

	 storeDishDecision(dish) {
		 this.dishes.push(dish);
	 }

	 calculateBillDiner() {

	 }

	 calculateTipDiner(billDiner) {

	 }

	 calculateTaxDiner(dishes) {

	 }
}

// Table Class
class Table {

	constructor() {
		this.diners = {};
	}
}

// Bill Class
class Bill	{

	constructor(table) {
		this.table = table;
		this.billTable = 0;
		this.billTipTable = 0;
	 }
}
