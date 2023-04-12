// script.js

// Order 1

const biscuits1 = document.querySelector('[data-key="order1"] .biscuits .count');
biscuits1.innerHTML = 10;

const donuts1= document.querySelector('[data-key="order1"] .donuts .count');
donuts1.innerHTML = 13;

const pancakes1= document.querySelector('[data-key="order1"] .pancakes .count');
pancakes1.innerHTML = 0;

const status1= document.querySelector('[data-key="order1"] .status dd');
status1.innerHTML = false;

// Order 2

const biscuits2 = document.querySelector('[data-key="order2"] .biscuits .count');
biscuits2.innerHTML = 5;

const donuts2 = document.querySelector('[data-key="order2"] .donuts .count');
donuts2.innerHTML = 0;

const pancakes2 = document.querySelector('[data-key="order2"] .pancakes .count');
pancakes2.innerHTML = 2;

const status2 = document.querySelector('[data-key="order2"] .status dd');
status2.innerHTML = false;

// Order 3

const biscuits3 = document.querySelector('[data-key="order3"] .biscuits .count');
biscuits3.innerHTML = 12;

const donuts3 = document.querySelector('[data-key="order3"] .donuts .count');
donuts3.innerHTML = 11;

const pancakes3 = document.querySelector('[data-key="order3"] .pancakes .count');
pancakes3.innerHTML = 15;

const status3 = document.querySelector('[data-key="order3"] .status dd');
status3.innerHTML = true;