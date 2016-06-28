/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	// Menu object
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MENU = {
	    Fish: 13.99,
	    Shrimp: 13.99,
	    Clams: 14.99,
	    Oysters: 17.99
	};
	
	// Diner Class
	
	var Diner = function () {
	    function Diner(menu) {
	        _classCallCheck(this, Diner);
	
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
	
	
	    _createClass(Diner, [{
	        key: 'chooseRandomDish',
	        value: function chooseRandomDish(menu) {
	            var dishes = Object.keys(menu);
	            var choice = dishes[Math.floor(Math.random() * dishes.length)];
	            var dish = menu[choice];
	            return dish;
	        }
	
	        // Store dish into dishes object
	
	    }, {
	        key: 'storeDishDecision',
	        value: function storeDishDecision(dish) {
	            this.dishes.push(dish);
	        }
	
	        // Calc total cost of dishes chosen (subTotal)
	
	    }, {
	        key: 'calculateSubTotalDiner',
	        value: function calculateSubTotalDiner(dishes) {
	            var subTotal = 0;
	            for (var el in dishes) {
	                if (dishes.hasOwnProperty(el)) {
	                    subTotal += parseFloat(dishes[el]);
	                }
	            }
	            return subTotal;
	        }
	
	        // Calc tip based on subTotal
	
	    }, {
	        key: 'calculateTipDiner',
	        value: function calculateTipDiner(subTotal, tipPerc) {
	            return subTotal * tipPerc;
	        }
	
	        // Calc tax bill for diner
	
	    }, {
	        key: 'calculateTaxDiner',
	        value: function calculateTaxDiner(subTotal, salesTax) {
	            return subTotal * salesTax;
	        }
	
	        // Calc total bill due for diner
	
	    }, {
	        key: 'calculateBillTotalDiner',
	        value: function calculateBillTotalDiner(subTotal, tip, tax) {
	            return subTotal + tip + tax;
	        }
	    }]);
	
	    return Diner;
	}();
	
	// Table Class
	
	
	var Table =
	
	// The Table class will hold the Diner class
	
	function Table(diner) {
	    _classCallCheck(this, Table);
	
	    this.diner = diner;
	};
	
	// Bill Class (Method)
	
	
	var Bill = function () {
	
	    // The Bill class will hold the Table class
	
	    function Bill(table) {
	        _classCallCheck(this, Bill);
	
	        this.table = table;
	        this.billTable = 0;
	        this.billTipTable = 0;
	    }
	
	    // Routine to calc diner totals
	    // Use for subTotal, tip, and tax
	
	
	    _createClass(Bill, [{
	        key: 'calculateTotalsTable',
	        value: function calculateTotalsTable() {
	            var sum = 0;
	            for (var i = 0; i < arguments.length; i++) {
	                sum += parseInt(arguments[i]);
	            }
	            return sum;
	        }
	    }]);
	
	    return Bill;
	}();
	
	var View = function View() {
	    _classCallCheck(this, View);
	};
	
	var Controller = function Controller(bill, view) {
	    _classCallCheck(this, Controller);
	
	    this.bill = bill;
	    this.view = view;
	};
	
	var diner1 = new Diner(MENU);
	var diner2 = new Diner(MENU);
	var table = new Table(diner1, diner2); // Holds diner1 & diner2
	var bill = new Bill(table); // Holds table (diner 1 & diner 2)
	// const view = new view(); // To be entered into controller
	var controller = new Controller(bill); // Holds Bill (table)
	
	console.log(table);

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map