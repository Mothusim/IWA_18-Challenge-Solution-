const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },

}

const christmas = 6
const futureId = 9

// Do not change code above this comment

if (holidays[futureId]) {

    console.log(holidays[futureId]['name'])

}

if (!holidays[futureId]) {

    console.log(`ID ${futureId} not created yet`)

}

let copied = {
    6: {

    id: 6,
    name: 'x-mas',
    date: new Date(`25 December ${currentYear}`)

    }
}

isEarlier = copied[6].date < holidays[6].date
console.log('New date is earlier:', isEarlier)


console.log('ID change:', holidays[christmas].id == copied[christmas].id ? false:true)
console.log('Name change:', holidays[christmas].name == copied[christmas].name ? false: copied[christmas].name)
console.log('Date change:', holidays[christmas].date == copied[christmas].date ? false: copied[christmas].date.toLocaleDateString(date= 25, month= 12, year=currentYear ))

const date0 = Date.parse(holidays[0].date)
const date1 = Date.parse(holidays[1].date)
const date2 = Date.parse(holidays[2].date)
const date3 = Date.parse(holidays[3].date)
const date4 = Date.parse(holidays[4].date)
const date5 = Date.parse(holidays[5].date)
const date6 = Date.parse(holidays[6].date)
const date7 = Date.parse(holidays[7].date)
const date8 = Date.parse(holidays[8].date)

const firstHolidayTimestamp = Math.min(

    date0,
    date1,
    date2,
    date3,
    date4,
    date5,
    date6,
    date7,
    date8,
    
)

const lastHolidayTimestamp = Math.max(
   
    date0,
    date1,
    date2,
    date3,
    date4,
    date5,
    date6,
    date7,
    date8,

)

const dateForFirstDay = new Date(firstHolidayTimestamp)
const localeTimeForFirstDay = dateForFirstDay.toLocaleDateString("en-GB", {year:'numeric', month:'2-digit', day:'2-digit'})

const firstDay = localeTimeForFirstDay;
const firstMonth = localeTimeForFirstDay;

const dateForLastDay = new Date(lastHolidayTimestamp)
const localeTimeForLastDay = dateForLastDay.toLocaleDateString("en-GB", {year:'numeric', month:'2-digit', day:'2-digit'})


const lastDay = localeTimeForLastDay
const lastMonth = localeTimeForLastDay

console.log(firstDay)
console.log(lastDay)

const randomHoliday = Math.round(Math.random() * 8)
console.log(holidays[randomHoliday].date.toLocaleDateString())
