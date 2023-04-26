const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// create an array of a given length and return it
const createArray = (length) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(null); // initialize each element to null
  }

  return result;
};



// create an array of calendar data for the current month
const createData = () => {
  const current = new Date();
  current.setDate(1);

  const startDay = current.getDay(); // get the starting day of the month
  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(5); // create an array of 5 weeks
  const days = createArray(7); // create an array of 7 days
  let value = null;

  // loop through each week
  for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
    value = {
      week: weekIndex + 1,
      days: createArray(7), // create an array of 7 days for each week
    };

    // loop through each day of the week
    for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
      const day = (weekIndex * 7) + dayIndex - startDay + 1;
      
      const isValid = day > 0 && day <= daysInMonth;

      // set the day data for the current day of the week
      value.days[dayIndex] = {
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : '', // set the value to null if the day is not valid
      };
    }

    weeks[weekIndex] = value;
  }

  return weeks;
};





// add a table cell to the given HTML string
const addCell = (existing, classString, value) => {
  return `${existing}<td class="${classString}">${value}</td>`;
};



// create the HTML for the calendar
const createHtml = (data) => {
  let result = '';

  // loop through each week
  for (let i = 0; i < data.length; i++) {
    const week = data[i];
    let inner = '';

    // add the week number to the left-most cell
    inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);

    // loop through each day of the week
    for (let j = 0; j < week.days.length; j++) {
      const day = week.days[j];
      const classString = 'table__cell';
      let value = '';

      // check if the day is today
      /* if (day.value === new Date().getDate()) {
        value = `<span class="table__cell_today">${day.value}</span>`;
      } else {
        value = day.value;
      } */
      const isToday = new Date().getDate() === day.value;
      const isAlternate = week % 2 === 0;

      if (isToday) classString = `${classString} table__cell_today`;
      if (isAlternate) classString = `${classString} table__cell_alternate`;

      // add the day of the week to the top row
  if (i === 0) {
    inner = addCell(inner, `${classString} table__cell_header`, value);
  } else {
    inner = addCell(inner, classString, value);
  }
  }
  result += `<tr>${inner}</tr>`;
}

return `<table>${result}</table>`;
};






// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)
