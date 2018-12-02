"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case
   Filename: tny_script.js

   Countdown Clock
   Author: 
   Date:   

*/
//good to go

// window.alert("Welcome sdfhbvgjsdfjgkiosdngknsdf \
// klgnmlgnmkodfkgnmlognmkdfnmgodfm \
// to Tulsa");

setInterval(runClock, 1000);

function runClock() {
	//window.alert("Came into the run clock function");
	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();

	//window.alert(timeStr);

	document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

	var newYear = new Date("January 1, 1900");
	var nextYear = currentDay.getFullYear() + 1;
	newYear.setFullYear(nextYear);

	var outputStr = newYear.toLocaleString();
	var daysLeft = (newYear - currentDay)/(1000*60*60*24);
	var hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
	var minsLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
	var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hoursLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
}
