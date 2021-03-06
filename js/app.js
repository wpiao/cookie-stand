'use strict';

// Define global variables
const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];
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
  const tbody = document.getElementById('sales-body');
  const tr = this.createRow();
  tbody.appendChild(tr);
};

ShopLocation.prototype.createRow = function () {
  this.calCookiesSoldEachHourAndTotal();
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);
  for (let i = 0; i < this.cookiesSoldEachHourAndTotalArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldEachHourAndTotalArray[i];
    tr.appendChild(td);
  }
  return tr;
};

// Create 5 objects for the locations by using constructor function
new ShopLocation('Seattle', 23, 65, 6.3);
new ShopLocation('Tokyo', 3, 24, 1.2);
new ShopLocation('Dubai', 11, 38, 3.7);
new ShopLocation('Paris', 20, 38, 2.3);
new ShopLocation('Lima', 2, 16, 4.6);

// Render table header function
const renderTableHeader = function () {
  const thead = document.getElementById('sales-head');
  const trHead = document.createElement('tr');
  const thHead = document.createElement('th');
  thHead.textContent = '';
  trHead.appendChild(thHead);
  for (let i = 0; i < hours.length; i++) {
    let currenthour = hours[i];
    let th = document.createElement('th');
    th.textContent = currenthour;
    trHead.appendChild(th);
  }
  thead.appendChild(trHead);
};

// Render table body - table row for each location
const renderAll = function () {
  for (let i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
};

// Render table footer function
const renderTableFooter = function () {
  const tfoot = document.getElementById('sales-foot');
  const trFoot = document.createElement('tr');
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
  tfoot.appendChild(trFoot);
};

// Lab-09 - Form
const addLocationForm = document.querySelector('form');
const handleSubmit = function (e) {
  e.preventDefault();
  const storeLocation = e.target.storeLocation.value;
  const minCust = +e.target.minCust.value;
  const maxCust = +e.target.maxCust.value;
  const aveCookies = +e.target.aveCookies.value;
  let isUpdating = false;
  // stretch goal
  for (let i = 0; i < allLocations.length; i++) {
    let currentLocation = allLocations[i].name.toLowerCase();
    if (currentLocation === storeLocation.toLowerCase()) {
      allLocations[i] = new ShopLocation(storeLocation, minCust, maxCust, aveCookies); // update current location information
      allLocations.pop(); // remove last pushed element for hourly total calculation
      const tbody = document.getElementById('sales-body');
      const updatedRow = allLocations[i].createRow();
      const oldRow = tbody.childNodes[i];
      tbody.replaceChild(updatedRow, oldRow);
      isUpdating = true;
      break;
    }
  }
  if (!isUpdating) {
    const newLocation = new ShopLocation(storeLocation, minCust, maxCust, aveCookies);
    newLocation.render();
  }

  // remove table footer row
  const tfoot = document.getElementById('sales-foot');
  tfoot.removeChild(tfoot.firstChild); // remove tfoot's only child - tr - table footer row
  // re-render table footer row
  renderTableFooter();
  e.target.reset(); // reset all input fields
};

// Render table - table header, table body, and table footer
renderTableHeader();
renderAll();
renderTableFooter();
addLocationForm.addEventListener('submit', handleSubmit);
