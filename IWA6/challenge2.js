const rent = 400;
const tax = 8;
const food = 51.7502;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ((hourOfDay == 00) && (minuteOfDay == 00)) {

	const taxAsDecimal = tax / 100;
    const startingAfterTax = salary * (1 - taxAsDecimal);
	const balance = startingAfterTax - transport - food - rent;

    console.log('R' + balance.toFixed(2));
}


if ((hourOfDay == undefined && minuteOfDay == undefined)) {

    return;

}