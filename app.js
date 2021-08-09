'use strict';
let hoursWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let step = document.getElementById('step');
let seattle = {
  name: 'seattle',
  minNumber:23,
  maxNumber:65,
  avgCookie:6.3,
  soldCoockiesPerHour:[],
  total : 0,
  calculte: function() {
    let rand;
    for(let i =0; i<hoursWork.length;i++){
      rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
      this.soldCoockiesPerHour.push(rand);
      this.total = this.total + this.soldCoockiesPerHour[i];
    }
  },
  render: function() {
    let h2El = document.createElement('h2');
    h2El.textContent = this.name;
    step.appendChild(h2El);
    let ulEl = document.createElement('ul');
    step.appendChild(ulEl);
    for (let i = 0; i < hoursWork.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hoursWork[i] + ' : ' + this.soldCoockiesPerHour[i] +' cookies';
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `total: ${this.total} : cookies`;
  }

};

function getRandom(minNumber, maxNumber){
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

seattle.calculte();
seattle.render();

let tokyo = {
  name: 'tokyo',
  minNumber:3,
  maxNumber:24,
  avgCookie:1.2,
  soldCoockiesPerHour:[],
  total : 0,
  calculte: function() {
    let rand;
    for(let i =0; i<hoursWork.length;i++){
      rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
      this.soldCoockiesPerHour.push(rand);
      this.total = this.total + this.soldCoockiesPerHour[i];
    }
  },
  render: function() {
    let h2El = document.createElement('h2');
    h2El.textContent = this.name;
    step.appendChild(h2El);
    let ulEl = document.createElement('ul');
    step.appendChild(ulEl);
    for (let i = 0; i < hoursWork.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hoursWork[i] + ':' + this.soldCoockiesPerHour[i] + ' cookies';
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `total: ${this.total} cookies`;
  }

};

tokyo.calculte();
tokyo.render();

let dubai = {
  name: 'dubai',
  minNumber:11,
  maxNumber:38,
  avgCookie:3.7,
  soldCoockiesPerHour:[],
  total : 0,
  calculte: function() {
    let rand;
    for(let i =0; i<hoursWork.length;i++){
      rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
      this.soldCoockiesPerHour.push(rand);
      this.total = this.total + this.soldCoockiesPerHour[i];
    }
  },
  render: function() {
    let h2El = document.createElement('h2');
    h2El.textContent = this.name;
    step.appendChild(h2El);
    let ulEl = document.createElement('ul');
    step.appendChild(ulEl);
    for (let i = 0; i < hoursWork.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hoursWork[i] + ' : ' + this.soldCoockiesPerHour[i] + ' cookies';
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `total: ${this.total} cookies`;
  }

};


dubai.calculte();
dubai.render();

let paris = {
  name: 'paris',
  minNumber:11,
  maxNumber:38,
  avgCookie:3.7,
  soldCoockiesPerHour:[],
  total : 0,
  calculte: function() {
    let rand;
    for(let i =0; i<hoursWork.length;i++){
      rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
      this.soldCoockiesPerHour.push(rand);
      this.total = this.total + this.soldCoockiesPerHour[i];
    }
  },
  render: function() {
    let h2El = document.createElement('h2');
    h2El.textContent = this.name;
    step.appendChild(h2El);
    let ulEl = document.createElement('ul');
    step.appendChild(ulEl);
    for (let i = 0; i < hoursWork.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hoursWork[i] + ' : ' + this.soldCoockiesPerHour[i] + ' cookies';
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `total: ${this.total} cookies`;
  }

};

paris.getRandome();
paris.pTotal();

let lima = {
  name: 'lima',
  minNumber:11,
  maxNumber:38,
  avgCookie:3.7,
  soldCoockiesPerHour:[],
  total : 0,
  calculte: function() {
    let rand;
    for(let i =0; i<hoursWork.length;i++){
      rand = Math.floor(getRandom(this.minNumber, this.maxNumber) * this.avgCookie);
      this.soldCoockiesPerHour.push(rand);
      this.total = this.total + this.soldCoockiesPerHour[i];
    }
  },
  render: function() {
    let h2El = document.createElement('h2');
    h2El.textContent = this.name;
    step.appendChild(h2El);
    let ulEl = document.createElement('ul');
    step.appendChild(ulEl);
    for (let i = 0; i < hoursWork.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hoursWork[i] + ' : ' + this.soldCoockiesPerHour[i] + ' cookies';
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `total: ${this.total} cookies`;
  }

};

lima.getRandome();
lima.pTotal();
