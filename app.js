'use strict';
let hoursWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let seattle = {
  name: 'seattle',
  minNumber:23,
  maxNumber:65,
  avgCookie:6.3,
  soldCoockiesPerHour:[],
  pTotal: function () {
    let message = '';
    let total =0;
    for(let i =0; i<hoursWork.length;i++){
      message += `\n${hoursWork[i]}: ${this.soldCoockiesPerHour[i]} cookies`;
      // total = total + this.soldCookiesPerHour[i];
      console.log(this.soldCoockiesPerHour[i]);
    }
    message = message + `\n total: ${this.total}`;
    console.log(message);
  },
  getRandome: function () {
    let rand;
    for(let i =0; i<hoursWork.length;i++){
      rand = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
      this.soldCoockiesPerHour.push(rand);
    }
  }
};
seattle.getRandome();
seattle.pTotal();

let tokyo = {
  name: 'tokyo',
  minNumber:3,
  maxNumber:24,
  avgCookie:1.2,
  soldCoockiesPerHour:[],
  pTotal: function () {
    let message = '';
    let total =0;
    for(let i =0; i<hoursWork.length;i++){
      message += `\n${hoursWork[i]}: ${this.soldCoockiesPerHour[i]} cookies`;
      // total = total + this.soldCookiesPerHour[i];
      console.log(this.soldCoockiesPerHour[i]);

    }
    message = message+ `\n total: ${this.total}`;
    console.log(message);
  },
  getRandome: function () {
    let rand;
    for(let i =0; i<hoursWork.length;i++){
      rand = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
      this.soldCoockiesPerHour.push(rand);
    }}
};
tokyo.getRandome();
tokyo.pTotal();

let dubai = {
  name: 'dubai',
  minNumber:11,
  maxNumber:38,
  avgCookie:3.7,
  soldCoockiesPerHour:[],
  pTotal: function () {
    let message = '';
    let total =0;
    for(let i =0; i<hoursWork.length;i++){
      message += `\n${hoursWork[i]}: ${this.soldCoockiesPerHour[i]} cookies`;
      // total = total + this.soldCookiesPerHour[i];
      console.log(this.soldCoockiesPerHour[i]);

    }
    message = message+ `\n total: ${this.total}`;
    console.log(message);
  },
  getRandome: function () {
    let rand;
    for(let i =0; i<hoursWork.length;i++){
      rand = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
      this.soldCoockiesPerHour.push(rand);
    }}
};
dubai.getRandome();
dubai.pTotal();

let paris = {
  name: 'paris',
  minNumber:11,
  maxNumber:38,
  avgCookie:3.7,
  soldCoockiesPerHour:[],
  pTotal: function () {
    let message = '';
    let total =0;
    for(let i =0; i<hoursWork.length;i++){
      message += `\n${hoursWork[i]}: ${this.soldCoockiesPerHour[i]} cookies`;
      // total = total + this.soldCookiesPerHour[i];
      console.log(this.soldCoockiesPerHour[i]);

    }
    message = message+ `\n total: ${this.total}`;
    console.log(message);
  },
  getRandome: function () {
    let rand;
    for(let i =0; i<hoursWork.length;i++){
      rand = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
      this.soldCoockiesPerHour.push(rand);
    }}
};
paris.getRandome();
paris.pTotal();

let lima = {
  name: 'lima',
  minNumber:11,
  maxNumber:38,
  avgCookie:3.7,
  soldCoockiesPerHour:[],
  pTotal: function () {
    let message = '';
    let total =0;
    for(let i =0; i<hoursWork.length;i++){
      message += `\n${hoursWork[i]}: ${this.soldCoockiesPerHour[i]} cookies`;
      // total = total + this.soldCookiesPerHour[i];
      console.log(this.soldCoockiesPerHour[i]);

    }
    message = message+ `\n total: ${this.total}`;
    console.log(message);
  },
  getRandome: function () {
    let rand;
    for(let i =0; i<hoursWork.length;i++){
      rand = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
      this.soldCoockiesPerHour.push(rand);
    }}
};
lima.getRandome();
lima.pTotal();
