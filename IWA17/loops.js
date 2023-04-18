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

    for (let i = 0; i < length; i++) {
        
        return result
    }
}



const createData = () => {
    const current = new Date();

    
    current.setDate(1);

    console.log(current) //r

    const startDay = current.getDate();
    console.log(startDay) // r

    let daysInMonth = getDaysInMonth(current)
    console.log(daysInMonth) //r

    const weeks = createArray(5)
    console.log(weeks) //r

    const days = createArray(7)
    console.log(days) //r

    const value = null

    for (weekIndex in weeks) {
        value = {
            week: weekIndex + 1,
            days: []
        }

        for (dayIndex in days) {
            value = dayIndex - startDay
            isValid = days > 0 && days <= daysInMonth

            result[weekIndex].days = [{
                dayOfWeek: dayIndex + 1,
                value: isValid && days,
            }]
        }
    }
}

const addCell = (existing, classString, value) => {
    const result = `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
        
    `
    return result
}

console.log(addCell()) // r

const createHtml = () => {
    let result = ''
    
    for (const [week, days] in data) {

        let inner = ""
        addCell(inner, "table__cell table__cell_heading", `Week ${week}`)
    
        for (const [dayOfWeek, value] in days) {

            classString = table__cell // c
        
			let isToday = new Date() == value
            
            isWeekend = dayOfWeek == 1 && dayOfWeek == 7
            
            isAlternate = week / 2

            let classString = 'table__cell'

			if (isToday) {return classString = `${classString} table__cell_today`}
            if (isWeekend) {return classString == `${classString} table__cell_weekend`}
            if (isAlternate) {return classString == `${classString} table__cell_alternate`}
            addCell(inner, classString, value)
        }

        return result = `<tr>${inner}</tr>`
        
    }

    
    
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)