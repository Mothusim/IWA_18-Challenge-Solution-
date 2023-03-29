// scripts.js

import {firstName as firstName1, surname as surname1, role as role1} from './nwabisa.js';
import {firstName as firstName2, surname as surname2, role as role2} from './johannes.js';
import {firstName as firstName3, surname as surname3, role as role3} from './alex.js';


const display1 = document.getElementById('nwabisa');
display1.innerText = firstName1 + " " + surname1 + " (" + role1 + ")";

const display2 = document.getElementById('johannes');
display2.innerText = firstName2 + " " + surname2 + " (" + role2 + ")";

const display3 = document.getElementById('alex');
display3.innerText= firstName3 + " " + surname3 + " (" + role3 + ")";

console.log('Roles: ' + role1 + ", " + role2 + ", " + role3);