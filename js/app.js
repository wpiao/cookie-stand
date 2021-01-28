'use strict';

// Define global variables
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
  '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

// 1. seattle object
const seattle = {
  name: 'Seattle',
  minCustomersEachHour: 23, // The minimum number of customers each hour
  maxCustomersEachHour: 65, // The maximum number of customers each hour
  aveCookiesSoldPerCustomer: 6.3, // The average number of cookies purchased per customer
  cookiesSoldEachHourAndTotalArray: [], // This array will hold the calculated number of cookies sold in each hour
  dailyCookiesSoldTotal: 0, // This property will hold the total number of cookies sold in a day
  randomCustomersNumberEachHour: function () { // This method generates a random customer numbers for each hour
    return Math.floor(Math.random() * (this.maxCustomersEachHour - this.minCustomersEachHour + 1)) + this.minCustomersEachHour;
  },
  calcCookiesSoldEachHour: function () { // This method calculates cookies sold each hour and store them in the designated array
    for (let i = 0; i < hours.length - 1; i++) {
      let cookiesSoldEachHour = Math.ceil(this.aveCookiesSoldPerCustomer * this.randomCustomersNumberEachHour());
      this.cookiesSoldEachHourAndTotalArray.push(cookiesSoldEachHour);
      this.dailyCookiesSoldTotal += cookiesSoldEachHour;
    }
    this.cookiesSoldEachHourAndTotalArray.push(this.dailyCookiesSoldTotal);
  },
  renderList: function () { // This method render an unordered list for number of cookies sold each hour in the sales.html
    this.calcCookiesSoldEachHour();
    let ul = document.getElementById('seattle'); // Get the target element
    for (let i = 0; i < hours.length; i++) {
      let currentHour = hours[i];
      let cookiesSoldForCurrentHour = this.cookiesSoldEachHourAndTotalArray[i];
      let li = document.createElement('li'); // Create list element
      li.textContent = `${currentHour}: ${cookiesSoldForCurrentHour}`; // Give it appropriate content
      ul.appendChild(li); // append list element under ul element
    }
  }
};

seattle.renderList();



