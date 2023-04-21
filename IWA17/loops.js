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

//const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()


// Only edit below 
const date = new Date()
const day = date.getDate()
const month = MONTHS[date.getMonth()]
const realDate = day+month+date.getFullYear()

console.log(realDate)


const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i++) {
        
        result
        
    }

    return result
}

const createData = () => {

    const current = new Date();
    
    current.setDate(1);

    const startDay = current.getDate();

    const daysInMonth = day

    const weeks = createArray(5)

    const days = createArray(7)

    const value = null

    for (weekIndex in weeks) {
        let week = {
            week: weekIndex + 1,
            days: []
        }

        for (dayIndex in days) {
            value = dayIndex - startDay
            isValid = days > 0 && days <= daysInMonth

            week[days].push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : null,
            })

        }

    }

}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
}

const createHtml = (data) => {
    let result = ''

    for (week, days in data) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
    
        for (dayOfWeek, value in days) {
            classString = table__cell
				isToday = new Date === value
            isWeekend = dayOfWeek = 1 && dayOfWeek == 7
            isAlternate = week / 2

            let classString = 'table__cell'

						if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString === '{classString} table__cell_weekend'
            if (isAlternate) classString === '{classString} table__cell_alternate'
            addCell(inner, classString, value)
        }

        result = `<tr>${inner}</tr>`
    }
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)