const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const leoIntBal = parseFloat(((leoBalance) * (-1)).toFixed(2));
const sarahIntBal = parseFloat(((sarahBalance) * (-1)).toFixed(2));

/* console.log(leoIntBal);
console.log(sarahIntBal); */

const total = "Total amount owed: "

const leo2 = `${leoName} ${leoSurname} (owed: R ${leoIntBal})`;
const sarah2 = `${sarahName} ${sarahSurname} (owed: R ${sarahIntBal})`;
const totalAmount = leoIntBal + sarahIntBal;

const result2 = `${leo2}\n${sarah2}\n\n ${divider} \n   ${total}R ${totalAmount} \n ${divider}`;

console.log(result2);