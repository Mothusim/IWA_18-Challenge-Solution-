//removed the entire code below the comment

const rent = 400;
const tax = 8;
const food = 51.7502;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ((hourOfDay == 00) && (minuteOfDay == 00)) {

	const taxAsDecimal = tax / 100; // turned the 100 into an integer
    const startingAfterTax = salary * (1 - taxAsDecimal); //added the brackets and turned 1 into an integer
	const balance = startingAfterTax - transport - food - rent; //used the correct variable "startingAfterTax" intead of "starting"

    console.log('R' + balance.toFixed(2)); //turned it into 2 decimal instead of 3 decimal places
}


if ((hourOfDay == undefined && minuteOfDay == undefined)) {

    return;

}