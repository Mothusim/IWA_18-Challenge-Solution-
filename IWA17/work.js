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

/* const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

console.log(getDaysInMonth) */
days = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']

const createArray=()=>{
    
    for (i=1; i<=5; i++){

        

        for (j=0; j<days.length; j++){

            console.log(`week${[i]}`,days[j])
        }
        console.log('\n')
    }
    
}

createArray()