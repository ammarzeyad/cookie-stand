'use strict';
let hoursWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let Step = document.getElementById('Step');
let tableEl = document.createElement('table');
Step.appendChild(tableEl);
let Stores = [];
function Store (name, minNumber, maxNumber, avgCookie){
  this.name =name;
  this.minNumber = minNumber;
  this.maxNumber = maxNumber;
  this.avgCookie = avgCookie;
  this.total=0;
  this.soldCoockiesPerHour = [];
  Stores.push(this);
}

Store.prototype.calculte = function (){
  for(let i =0; i<hoursWork.length;i++){
    let rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
    this.soldCoockiesPerHour.push(rand);
    this.total += this.soldCoockiesPerHour[i];
  }
};
Store.prototype.render = function (){
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);


  let tdEl1 = document.createElement('td');
  tdEl1.textContent = this.name;
  trEl.appendChild(tdEl1);

  for (let i = 0; i < this.soldCoockiesPerHour.length; i++) {
    let tdEl4 = document.createElement('td');
    tdEl4.textContent = this.soldCoockiesPerHour[i];
    trEl.appendChild(tdEl4);
  }

  let tdEl5 = document.createElement('td');
  tdEl5.textContent = this.total;
  trEl.appendChild(tdEl5);

};

function createTableHeader() {

  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let thEl1 = document.createElement('th');
  trEl.appendChild(thEl1);
  thEl1.textContent = '';

  for(let i =0; i<hoursWork.length;i++){
    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = hoursWork[i];

  }

  let thEl3 = document.createElement('th');
  trEl.appendChild(thEl3);
  thEl3.textContent = 'daily Location Total';
}
function tableFooter (Store1, Store2, Store3, Store4, Store5){
  let total =0;
  let allStores = [Store1, Store2, Store3, Store4, Store5];
  let totalHours = Store1.total + Store2.total + Store3.total + Store4.total + Store5.total;
  let trEl = document.createElement('tr');
  let thEl9 = document.createElement('th');
  trEl.appendChild(thEl9);
  thEl9.textContent = 'total';
  tableEl.appendChild(trEl);
  for(let h =0; h < hoursWork.length; h++)
  {
    let thEl10 = document.createElement('th');
    total=0;
    for(let j =0; j < allStores.length; j++){
      total = total + allStores[j].soldCoockiesPerHour[h];
    }
    thEl10.textContent = total;
    trEl.appendChild(thEl10);
  }
  let thEl11 = document.createElement('th');
  thEl11.textContent = totalHours;
  trEl.appendChild(thEl11);
}
createTableHeader();

let Seattle = new Store ('seattle', 23, 65, 4.6);
Seattle.calculte(23,65);
Seattle.render();

let Tokyo = new Store ('tokyo', 3, 24, 1.2);
Tokyo.calculte(3,24);
Tokyo.render();

let Dubai = new Store ('dubai', 11, 38, 3.7);
Dubai.calculte(11,38);
Dubai.render();

let Paris = new Store ('paris', 20, 38, 2.3);
Paris.calculte(20,38);
Paris.render();

let Lima = new Store ('lima', 2, 16, 4.6);
Lima.calculte(2,16);
Lima.render();

function getRandom(minNumber, maxNumber){
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

tableFooter(Seattle, Tokyo, Dubai, Paris, Lima);
// let hoursWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let step = document.getElementById('step');
// let seattle = {
//   name: 'seattle',
//   minNumber:23,
//   maxNumber:65,
//   avgCookie:6.3,
//   soldCoockiesPerHour:[],
//   total : 0,
//   calculte: function() {
//     let rand;
//     for(let i =0; i<hoursWork.length;i++){
//       rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
//       this.soldCoockiesPerHour.push(rand);
//       this.total = this.total + this.soldCoockiesPerHour[i];
//     }
//   },
//   render: function() {
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.name;
//     step.appendChild(h2El);
//     let ulEl = document.createElement('ul');
//     step.appendChild(ulEl);
//     for (let i = 0; i < hoursWork.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hoursWork[i] + ' : ' + this.soldCoockiesPerHour[i] +' cookies';
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `total: ${this.total} : cookies`;
//   }

// };

// function getRandom(minNumber, maxNumber){
//   return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
// }

// seattle.calculte();
// seattle.render();

// let tokyo = {
//   name: 'tokyo',
//   minNumber:3,
//   maxNumber:24,
//   avgCookie:1.2,
//   soldCoockiesPerHour:[],
//   total : 0,
//   calculte: function() {
//     let rand;
//     for(let i =0; i<hoursWork.length;i++){
//       rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
//       this.soldCoockiesPerHour.push(rand);
//       this.total = this.total + this.soldCoockiesPerHour[i];
//     }
//   },
//   render: function() {
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.name;
//     step.appendChild(h2El);
//     let ulEl = document.createElement('ul');
//     step.appendChild(ulEl);
//     for (let i = 0; i < hoursWork.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hoursWork[i] + ':' + this.soldCoockiesPerHour[i] + ' cookies';
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `total: ${this.total} cookies`;
//   }

// };

// tokyo.calculte();
// tokyo.render();

// let dubai = {
//   name: 'dubai',
//   minNumber:11,
//   maxNumber:38,
//   avgCookie:3.7,
//   soldCoockiesPerHour:[],
//   total : 0,
//   calculte: function() {
//     let rand;
//     for(let i =0; i<hoursWork.length;i++){
//       rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
//       this.soldCoockiesPerHour.push(rand);
//       this.total = this.total + this.soldCoockiesPerHour[i];
//     }
//   },
//   render: function() {
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.name;
//     step.appendChild(h2El);
//     let ulEl = document.createElement('ul');
//     step.appendChild(ulEl);
//     for (let i = 0; i < hoursWork.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hoursWork[i] + ' : ' + this.soldCoockiesPerHour[i] + ' cookies';
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `total: ${this.total} cookies`;
//   }

// };


// dubai.calculte();
// dubai.render();

// let paris = {
//   name: 'paris',
//   minNumber:11,
//   maxNumber:38,
//   avgCookie:3.7,
//   soldCoockiesPerHour:[],
//   total : 0,
//   calculte: function() {
//     let rand;
//     for(let i =0; i<hoursWork.length;i++){
//       rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
//       this.soldCoockiesPerHour.push(rand);
//       this.total = this.total + this.soldCoockiesPerHour[i];
//     }
//   },
//   render: function() {
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.name;
//     step.appendChild(h2El);
//     let ulEl = document.createElement('ul');
//     step.appendChild(ulEl);
//     for (let i = 0; i < hoursWork.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hoursWork[i] + ' : ' + this.soldCoockiesPerHour[i] + ' cookies';
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `total: ${this.total} cookies`;
//   }

// };

// paris.calculte();
// paris.render();

// let lima = {
//   name: 'lima',
//   minNumber:11,
//   maxNumber:38,
//   avgCookie:3.7,
//   soldCoockiesPerHour:[],
//   total : 0,
//   calculte: function() {
//     let rand;
//     for(let i =0; i<hoursWork.length;i++){
//       rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
//       this.soldCoockiesPerHour.push(rand);
//       this.total = this.total + this.soldCoockiesPerHour[i];
//     }
//   },
//   render: function() {
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.name;
//     step.appendChild(h2El);
//     let ulEl = document.createElement('ul');
//     step.appendChild(ulEl);
//     for (let i = 0; i < hoursWork.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hoursWork[i] + ' : ' + this.soldCoockiesPerHour[i] + ' cookies';
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `total: ${this.total} cookies`;
//   }

// };

// lima.calculte();
// lima.render();
