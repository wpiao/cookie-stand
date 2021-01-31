/* eslint-disable no-unused-vars */
'use strict';

// Define global variables
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Location Total'];
const allLocations = [];

// Lab-07: JS Constructor

const ShopLocation = function (name, minCustEachHour, maxCustEachHour, aveCookiesSoldPerCustomer) {
  this.name = name;
  this.minCustEachHour = minCustEachHour;
  this.maxCustEachHour = maxCustEachHour;
  this.aveCookiesSoldPerCustomer = aveCookiesSoldPerCustomer;
  this.dailyCookiesSoldTotal = 0;
  this.cookiesSoldEachHourAndTotalArray = [];
  allLocations.push(this);
};

ShopLocation.prototype.randomCustNumberEachHour = function () {
  return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour + 1)) + this.minCustEachHour;
};

ShopLocation.prototype.calCookiesSoldEachHourAndTotal = function () {
  for (let i = 0; i < hours.length - 1; i++) {
    let cookiesSoldEachHour = Math.ceil(this.aveCookiesSoldPerCustomer * this.randomCustNumberEachHour());
    this.cookiesSoldEachHourAndTotalArray.push(cookiesSoldEachHour);
    this.dailyCookiesSoldTotal += cookiesSoldEachHour;
  }
  this.cookiesSoldEachHourAndTotalArray.push(this.dailyCookiesSoldTotal);
};

ShopLocation.prototype.render = function () {
  this.calCookiesSoldEachHourAndTotal();
  const tbody = document.getElementById('sales-body');
  const tr = document.createElement('tr');
  tbody.appendChild(tr);
  const th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);
  for (let i = 0; i < this.cookiesSoldEachHourAndTotalArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldEachHourAndTotalArray[i];
    tr.appendChild(td);
  }
};

// Create 5 objects for the locations by using constructor function
const seattle = new ShopLocation('Seattle', 23, 65, 6.3);
const tokyo = new ShopLocation('Tokyo', 3, 24, 1.2);
const dubai = new ShopLocation('Dubai', 11, 38, 3.7);
const paris = new ShopLocation('Paris', 20, 38, 2.3);
const lima = new ShopLocation('Lima', 2, 16, 4.6);

// Render table head
const thead = document.getElementById('sales-head');
const trHead = document.createElement('tr');
thead.appendChild(trHead);
const thHead = document.createElement('th');
thHead.textContent = '';
trHead.appendChild(thHead);
for (let i = 0; i < hours.length; i++) {
  let currenthour = hours[i];
  let th = document.createElement('th');
  th.textContent = currenthour;
  trHead.appendChild(th);
}

// Render table row for each location
const renderAll = function () {
  for (let i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
};

renderAll();

// Render table foot
const tfoot = document.getElementById('sales-foot');
const trFoot = document.createElement('tr');
tfoot.appendChild(trFoot);
const thFoot = document.createElement('th');
thFoot.textContent = 'Totals';
trFoot.appendChild(thFoot);
for (let i = 0; i < hours.length; i++) {
  let totalCookiesEachHour = 0;
  for (let j = 0; j < allLocations.length; j++) {
    let currentLocation = allLocations[j];
    totalCookiesEachHour += currentLocation.cookiesSoldEachHourAndTotalArray[i];
  }
  let tdFoot = document.createElement('td');
  tdFoot.textContent = totalCookiesEachHour;
  trFoot.appendChild(tdFoot);
}
