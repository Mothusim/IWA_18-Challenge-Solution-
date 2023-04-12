const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}

// added inverted commas to the keys
const tax = {
    '734': '3%',
    '234': '20%',
    '913': '12%',
    '415': '38%',
    '502': '42%',
}

const rent = {
    'none': '0', //added inverted commas to the none key
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400
}



// You can change below however you want

const taxAsDecimal = (parseInt(tax[913])/100) // used bracket notation to get the value of the tax object's 913 key value
const startingAfterTax = salary * (1 - taxAsDecimal) // i put brackets around the 1-taxAsDecimal expression

const typeFinal = rent['large-apartment']


const balance = (startingAfterTax - expenses['transport'] - expenses['food'] - typeFinal).toFixed(2)
console.log(balance)