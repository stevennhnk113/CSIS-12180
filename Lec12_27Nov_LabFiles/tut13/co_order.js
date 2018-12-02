"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: 
   Date:   
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/
window.addEventListener("load", process);

function process() {
	var orderForm = document.forms.orderForm;
	var dateToday = new Date();

	orderForm.elements.orderDate.value = dateToday.toDateString();
	orderForm.elements.custName.focus();

	calcOrder();

	orderForm.elements.model.onchange = calcOrder;
	orderForm.elements.qty.onchange = calcOrder;
	var planOptions = document.forms.orderForm.elements.protection;
	for(var i = 0; i < planOptions.length; i++)
	{
		planOptions[i].onclick = calcOrder;
	}
}

function calcOrder() {
	var orderForm = document.forms.orderForm;

	// Calculate cost
	var mIndex = orderForm.elements.model.selectedIndex;
	var mCost = orderForm.elements.model.options[mIndex].value;

	var qIndex = orderForm.elements.qty.selectedIndex;
	var quantity = orderForm.elements.qty.options[qIndex].value;

	// Compute initial cost
	var initialCost = mCost*quantity;
	var initialCostStr = initialCost.toFixed(2);
	orderForm.elements.initialCost.value = initialCostStr;

	// instanciate radio button set
	var protection = orderForm.elements.protection;
	var protectionPlanCost = 0;
	for (var i = 0; i < protection.length; i++) {
		if (protection[i].checked == true) {
			protectionPlanCost = protection[i].value;
		}
	}

	var pCost = protectionPlanCost * quantity;
	var pCostStr = pCost.toFixed(2);

	orderForm.elements.protectionCost.value = pCostStr;

	var subTotal = initialCost + pCost;
	var subTotalStr = subTotal.toFixed(2);
	orderForm.elements.subtotal.value = subTotalStr;

	var saleTax = 0.05*(subTotal);
	var saleTaxStr = saleTax.toFixed(2);
	orderForm.elements.salesTax.value = saleTaxStr;

	var totalCost = subTotal + saleTax;
	var totalCostStr = totalCost.toFixed(2);
	orderForm.elements.totalCost.value = totalCostStr;
}

function validateAndDisplayCost()
{
	var custName = document.forms.orderForm.custName.value;
	var cost = document.forms.orderForm.totalCost.value;

	if (custName == null || custName == undefined || custName == ""){
		alert("please enter a name");
	} else if (parseFloat(cost) < 200) {
		alert("Minimum order total should be $200");
	} else {
		var outputStr = "Dear " + custName + "\n";
		outputStr += "Your total is " + cost;
		alert(outputStr);
		return true;
	}

	return false;
}
