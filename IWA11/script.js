const root1 = document.querySelector('.biscuits>.count');
root1.innerHTML = 'hey';



/* const 1-biscuits: document(biscuits),
const 1-donuts: document(donuts),
const 1-pancakes: document(pancakes),
const 1-status: document(status)

const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending


document(biscuits.p-count).pending = 3-status ? 1-biscuits + 2-biscuits + 3-biscuits: 0
document(biscuits.p-count).delivered 3-status ? 0 : 1-biscuits + 2-biscuits + 3-biscuits

document(donuts.p-count).pending = 3-status ? 1-donuts + 2-donuts + 3-donuts: 0
document(donuts.p-count).delivered 3-status ? 0 : 1-donuts + 2-donuts + 3-donuts

document(pancakes.p-count).pending = 3-status ? 1-pancakes+ 2-pancakes+ 3-pancakes: 0
document(pancakes.p-count).delivered 3-status ? 0 : 1-pancakes+ 2-pancakes + 3-pancakes */