'use strict';
let hoursWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let seattle = {
  name: 'seattle',
  minNumber:23,
  maxNumber:65,
  avgCookie:6.3,
  soldCoockiesPerHour:[],
  total:0,
  pTotal: function () {
    let message = '';
    for(let i =0; i<hoursWork.length;i++){
      message = message + `\n ${hoursWork[i]}: ${this.soldCookiesPerHour[i]} cookies`;
      this.total = this.total+ this.soldCookiesPerHour[i];
    }
    message = message+ `\n total: ${this.total}`;
    console.log(message);
  },
  getRandome: function () {
    for(let i =0; i<hoursWork;i++)
      this.minNumber = Math.ceil(this.minNumber);
    this.maxNumber = Math.floor(this.maxNumber);
    let rand = Math.floor(Math.random() * (this.maxNumber - this.minNumber) + this.minNumber);
    this.soldCoockiesPerHour.push(rand);
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
  total:0,
  pTotal: function () {
    let message = '';
    for(let i =0; i<hoursWork.length;i++){
      message = message + `\n ${hoursWork[i]}: ${this.soldCookiesPerHour[i]} cookies`;
      this.total = this.total+ this.soldCookiesPerHour[i];
    }
    message = message+ `\n total: ${this.total}`;
    console.log(message);
  },
  getRandome: function () {
    for(let i =0; i<hoursWork;i++)
      this.minNumber = Math.ceil(this.minNumber);
    this.maxNumber = Math.floor(this.maxNumber);
    let rand = Math.floor(Math.random() * (this.maxNumber - this.minNumber) + this.minNumber);
    this.soldCoockiesPerHour.push(rand);
  }
};
tokyo.getRandome();
tokyo.pTotal();


let dubai = {
  name: 'dubai',
  minNumber:11,
  maxNumber:38,
  avgCookie:3.7,
  soldCoockiesPerHour:[],
  total:0,
  pTotal: function () {
    let message = '';
    for(let i =0; i<hoursWork.length;i++){
      message = message + `\n ${hoursWork[i]}: ${this.soldCookiesPerHour[i]} cookies`;
      this.total = this.total+ this.soldCookiesPerHour[i];
    }
    message = message+ `\n total: ${this.total}`;
    console.log(message);
  },
  getRandome: function () {
    for(let i =0; i<hoursWork;i++)
      this.minNumber = Math.ceil(this.minNumber);
    this.maxNumber = Math.floor(this.maxNumber);
    let rand = Math.floor(Math.random() * (this.maxNumber - this.minNumber) + this.minNumber);
    this.soldCoockiesPerHour.push(rand);
  }
};
dubai.getRandome();
dubai.pTotal();


let paris = {
  name: 'paris',
  minNumber:20,
  maxNumber:38,
  avgCookie:2.3,
  soldCoockiesPerHour:[],
  total:0,
  pTotal: function () {
    let message = '';
    for(let i =0; i<hoursWork.length;i++){
      message = message + `\n ${hoursWork[i]}: ${this.soldCookiesPerHour[i]} cookies`;
      this.total = this.total+ this.soldCookiesPerHour[i];
    }
    message = message+ `\n total: ${this.total}`;
    console.log(message);
  },
  getRandome: function () {
    for(let i =0; i<hoursWork;i++)
      this.minNumber = Math.ceil(this.minNumber);
    this.maxNumber = Math.floor(this.maxNumber);
    let rand = Math.floor(Math.random() * (this.maxNumber - this.minNumber) + this.minNumber);
    this.soldCoockiesPerHour.push(rand);
  }
};

paris.getRandome();
paris.pTotal();

let lima = {
  name: 'lima',
  minNumber:2,
  maxNumber:16,
  avgCookie:4.6,
  soldCoockiesPerHour:[],
  total:0,
  pTotal: function () {
    let message = '';
    for(let i =0; i<hoursWork.length;i++){
      message = message + `\n ${hoursWork[i]}: ${this.soldCookiesPerHour[i]} cookies`;
      this.total = this.total+ this.soldCookiesPerHour[i];
    }
    message = message+ `\n total: ${this.total}`;
    console.log(message);
  },
  getRandome: function () {
    for(let i =0; i<hoursWork;i++)
      this.minNumber = Math.ceil(this.minNumber);
    this.maxNumber = Math.floor(this.maxNumber);
    let rand = Math.floor(Math.random() * (this.maxNumber - this.minNumber) + this.minNumber);
    this.soldCoockiesPerHour.push(rand);
  },
};
lima.getRandome();
lima.pTotal();

