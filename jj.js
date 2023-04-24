/* const userNum = parseInt(prompt('Enter your lucky number: ', ))

const random = []

function randomF(){

    for (i = 1; i<6; i++){

        let randoms = Math.round(Math.random(i)*3)

        random.push(randoms)

    }
    console.log(random)
    if(random.includes(userNum)){

        console.log('You have hit the jackpot!!!')

    }else{
        console.log('You Lose! Try Again!!')
    }
}

randomF() */

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

const createArray = (length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(null);
  }
  return result;
};


const createData = () => {
  const now = new Date();
  now.setDate(1);
  const startDay = now.getDate();

  const daysInMonth = getDaysInMonth(now);

  const weeks = createArray(5);

  const days = createArray(7);

  let result = [];


  
  for (let weekIndex = 1; weekIndex < weeks.length + 1; weekIndex++) {

    let day = []

    for (let dayIndex = 1; dayIndex < daysInMonth+1 ; dayIndex++){
      day.push(dayIndex)
    }
    
};
console.log(result)

//   for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
//     let value = {
//       week: weekIndex + 1,
//       days: [],
//     };
//     for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
//       const day = new Date(startDay);
//       const isValid = day > 0 && day <= daysInMonth;

//       value.days.push({
//         dayOfWeek: dayIndex + 1,
//         value: isValid ? day : null,
//       });
//     }
//     result.push(value);
//   }
// console.log(result)

// };
}
createData();

// const addCell = (existing, classString, value) => {
//   return /* html */ `
//         <td class='${classString}'>
//             ${value}
//         </td>
//         ${existing}
//     `;
// };

// const createHtml = (data) => {
//   let result = "";
//   for (const { week, days } of data) {
//     let inner = "";
//     inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);

//     for (const { dayOfWeek, value } of days) {
//       let classString = "table__cell";
//       const isToday = current.getDate() === value;
//       const isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
//       const isAlternate = week % 2 === 0;

//       if (isToday) classString = `${classString} table__cell_today`;
//       if (isWeekend)
//         classString = `${classString} table__cell_weekend
//         }`;
//       if (isAlternate) classString = `${classString} table__cell_alternate`;
//       inner = addCell(inner, classString, value);
//     }
//     result += `<tr>${inner}</tr>`;
//   }
//   return result;
// };

// // Only edit above

// const current = new Date();
// document.querySelector("[data-title]").innerText = `${
//   MONTHS[current.getMonth()]
// } ${current.getFullYear()}`;

// const data = createData();
// document.querySelector("[data-content]").innerHTML = createHtml(data);
