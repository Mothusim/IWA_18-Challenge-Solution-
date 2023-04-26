const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'
/* const sarahBalance = '-5' */

// Only change below this line

const leo = {
	name : leoName,
	balance : leoBalance,
	accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address :{
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal
	}
};

//added an equal sign, and removed them when assigning values to keys
const sarah = {
	name2: sarahName + sarahSurname,
	age: 62,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8', //added inverted commas
	balance: sarahBalance,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postalCode: sarahPostal,
	}
}

//used dot notation
console.log(leo, leo.address.postalCode)
console.log(sarah, sarah.address.postalCode)