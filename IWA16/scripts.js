// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T22:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T22:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T22:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T22:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T22:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T22:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment


const section1 = document.querySelector('[data-athlete="NM372"]')

const title1 = document.createElement('h2')
title1.innerHTML = data.response.data.NM372.id

section1.appendChild(title1)


// Name'

const athlete1FirstName = data.response.data.NM372.firstName
const athlete1Surname = data.response.data.NM372.surname

const athlete1FullName = `${athlete1FirstName} ${athlete1Surname}`

console.log(athlete1FullName)


// Number of races
const race = data.response.data.NM372.races.length

console.log(race)


// Latest date

const date0 = new Date(data.response.data.NM372.races[0].date)
const date0Str = date0.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})

const date1 = new Date(data.response.data.NM372.races[1].date)
const date1Str = date1.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})

if (date0 > date1) {

  console.log(date0Str)

}else{

  console.log(date1Str)

}


// Time
const lastRace = data.response.data.NM372.races[race-1]['time']

let sum = 0
for (let i=0; i<lastRace.length; i++) {

  sum += lastRace[i]

}

const hours = Math.floor(sum / 60)
const minutes = sum % 60

const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

console.log(formattedTime)


// DOM

const athlete1 = {
  athlete: athlete1FullName,
  totalRaces: race,
  latestEventDate: date0 > date1 ? date0Str : date1Str,
  latestTotalTime: formattedTime,
};

const dl = document.createElement('dl');


for (const [key, value] of Object.entries(athlete1)) {
  
  const dt = document.createElement('dt');
  const dd = document.createElement('dd');

  dt.textContent = `${key}:`;
  dd.textContent = value;
  dl.appendChild(dt);
  dl.appendChild(dd);

  // styling
  
  dl.style.display = 'grid'
  dl.style.gridTemplateColumns = 'max-content auto'

  dt.style.gridColumnStart = '1'

  dd.style.gridColumnStart = '2'
  section1.appendChild(dl);
}





//section1.appendChild(athlete1)


/* const section2 = document.querySelector('[data-athlete="SV782"]')

const title2 = document.createElement('h2')
title2.innerHTML = data.response.data.SV782.id

section2.appendChild(title2) */

  
  
  /* const createHtml = (athlete) => {
    firstName, surname, id, races = athlete
    [date], [time] = races.reverse()
  
    const list = document.createElement(dl);
  
    const day = date.getDate();
    const month = MONTHS[date.month];
    const year = date.year;
  
    first, second, third, fourth = timeAsArray;
    total = first + second + third + fourth;
  
    const hours = total / 60;
    const minutes = total / hours / 60;
  
    list.innerHTML =
      <dt>Athlete</dt>
      <dd>${firstName surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day month year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.padStart(2, 0) minutes}</dd>
    `;
  
    fragment.appendChild(list);
  }
  
  [NM372], [SV782] = data
  document.querySelector(NM372).appendChild(createHtml(NM372));
  document.querySelector(SV782).appendChild(createHtml(SV782)); */