const nickname= "Timmy";
const firstName = "Timothy";
const selection = prompt("nickname or firstName?", "firstName");

/* const selection = select; */

if (selection == 'nickname') {

    console.log(`Good Morning, ${nickname}`);

} else if (selection == 'firstName') {

    console.log(`Good Morning, ${firstName}`);

} else {

    console.log('Good Morning');

};