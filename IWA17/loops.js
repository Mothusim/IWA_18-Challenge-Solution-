





// scripts.js

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
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
  const result = []

  for (let i=0; i < length; i++) {
      
  }
  return result
}



const createData = () => {
  const current = new Date()
  current.setDate(1)

  const startDay = current.day
  const daysInMonth = getDaysInMonth(current)

  let weeks = createArray(5)
  
  let days = createArray(7)
  
  let value = null

  let result = []

  for (let weekIndex of weeks) {
      
      const value = [{
          week: weekIndex + 1,
          days: []
      }]

      for (let dayIndex of days) {
          let day = (dayIndex * 7) + dayIndex - startDay + 1
          const isValid = day > 0 && day <= daysInMonth

          value.days.push({
              dayOfWeek: dayIndex + 1,
              value: isValid ? day: null,
          });
          
      }

      return result
  }
  return result
  
}

const addCell = (existing, classString, value) => {
  return `${existing}
      <td class='${classString}'>
          ${value} 
      </td>
  
      `;
}

const createHtml = (data) => {
  let result = ''

  for (const [week, days] in data) {
      let inner = " "
      addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
  
      for (const [dayOfWeek, value] in days) {
          classString = 'table__cell'
    isToday = new Date().getDate() == value
          isWeekend = dayOfWeek == 1 || dayOfWeek == 7
          isAlternate = week % 2 == 0

          let classString = 'table__cell'

    if (isToday) classString = `${classString} table__cell_today`
          if (isWeekend) classString = `${classString} table__cell_weekend`
          if (isAlternate) classString = `${classString} table__cell_alternate`
          addCell(inner, classString, value)
      }
      result += `<tr>${inner}</tr>`
      
  }
  return `<table>${result}</table>`
}


// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)