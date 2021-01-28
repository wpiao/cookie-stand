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
    this.calcCookiesSoldEachHour(); // Get cookiesSoldEachHourAndTotalArray with required data
    let ul = document.getElementById('seattle'); // Get the target element
    for (let i = 0; i < hours.length; i++) { // Create list element with its content in each iteration
      let currentHour = hours[i];
      let cookiesSoldForCurrentHour = this.cookiesSoldEachHourAndTotalArray[i];
      let li = document.createElement('li'); // Create list element
      li.textContent = `${currentHour}: ${cookiesSoldForCurrentHour}`; // Give it appropriate content
      ul.appendChild(li); // append list element under ul element
    }
  }
};

/*--------------------------------------------------------------------------------------------------------------*/

// 2. tokyo object
const tokyo = {
  name: 'Tokyo',
  minCustomersEachHour: 3, // The minimum number of customers each hour
  maxCustomersEachHour: 24, // The maximum number of customers each hour
  aveCookiesSoldPerCustomer: 1.2, // The average number of cookies purchased per customer
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
    this.calcCookiesSoldEachHour(); // Get cookiesSoldEachHourAndTotalArray with required data
    let ul = document.getElementById('tokyo'); // Get the target element
    for (let i = 0; i < hours.length; i++) { // Create list element with its content in each iteration
      let currentHour = hours[i];
      let cookiesSoldForCurrentHour = this.cookiesSoldEachHourAndTotalArray[i];
      let li = document.createElement('li'); // Create list element
      li.textContent = `${currentHour}: ${cookiesSoldForCurrentHour}`; // Give it appropriate content
      ul.appendChild(li); // append list element under ul element
    }
  }
};

/*--------------------------------------------------------------------------------------------------------------*/

// 3. dubai object
const dubai = {
  name: 'Dubai',
  minCustomersEachHour: 11, // The minimum number of customers each hour
  maxCustomersEachHour: 38, // The maximum number of customers each hour
  aveCookiesSoldPerCustomer: 3.7, // The average number of cookies purchased per customer
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
    this.calcCookiesSoldEachHour(); // Get cookiesSoldEachHourAndTotalArray with required data
    let ul = document.getElementById('dubai'); // Get the target element
    for (let i = 0; i < hours.length; i++) { // Create list element with its content in each iteration
      let currentHour = hours[i];
      let cookiesSoldForCurrentHour = this.cookiesSoldEachHourAndTotalArray[i];
      let li = document.createElement('li'); // Create list element
      li.textContent = `${currentHour}: ${cookiesSoldForCurrentHour}`; // Give it appropriate content
      ul.appendChild(li); // append list element under ul element
    }
  }
};

/*--------------------------------------------------------------------------------------------------------------*/

// 4. paris object
const paris = {
  name: 'Paris',
  minCustomersEachHour: 20, // The minimum number of customers each hour
  maxCustomersEachHour: 38, // The maximum number of customers each hour
  aveCookiesSoldPerCustomer: 2.3, // The average number of cookies purchased per customer
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
    this.calcCookiesSoldEachHour(); // Get cookiesSoldEachHourAndTotalArray with required data
    let ul = document.getElementById('paris'); // Get the target element
    for (let i = 0; i < hours.length; i++) { // Create list element with its content in each iteration
      let currentHour = hours[i];
      let cookiesSoldForCurrentHour = this.cookiesSoldEachHourAndTotalArray[i];
      let li = document.createElement('li'); // Create list element
      li.textContent = `${currentHour}: ${cookiesSoldForCurrentHour}`; // Give it appropriate content
      ul.appendChild(li); // append list element under ul element
    }
  }
};

/*--------------------------------------------------------------------------------------------------------------*/

// 5. lima object
const lima = {
  name: 'Lima',
  minCustomersEachHour: 2, // The minimum number of customers each hour
  maxCustomersEachHour: 16, // The maximum number of customers each hour
  aveCookiesSoldPerCustomer: 4.6, // The average number of cookies purchased per customer
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
    this.calcCookiesSoldEachHour(); // Get cookiesSoldEachHourAndTotalArray with required data
    let ul = document.getElementById('lima'); // Get the target element
    for (let i = 0; i < hours.length; i++) { // Create list element with its content in each iteration
      let currentHour = hours[i];
      let cookiesSoldForCurrentHour = this.cookiesSoldEachHourAndTotalArray[i];
      let li = document.createElement('li'); // Create list element
      li.textContent = `${currentHour}: ${cookiesSoldForCurrentHour}`; // Give it appropriate content
      ul.appendChild(li); // append list element under ul element
    }
  }
};

/*--------------------------------------------------------------------------------------------------------------*/

// Render lists for each location
seattle.renderList();
tokyo.renderList();
dubai.renderList();
paris.renderList();
lima.renderList();
