// script.js



const add = (a, b) => { return a + b }


const multiply = (a, b) => { return a * b }


function internal(a, b) {
	console.log(add(a, b))
	console.log(multiply(a, b))
}

internal((2, 4))



// Not allowed to change below this

/* const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate() */