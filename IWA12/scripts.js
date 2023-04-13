// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}


// Edit below line 


const status1 = document.querySelector('#book1 .status');
let reserve1 = document.querySelector('#book1 .reserve');
let checkout1 = document.querySelector('#book1 .checkout');
let checkin1 = document.querySelector('#book1 .checkin');

const status2 = document.querySelector('#book2 .status');
let reserve2 = document.querySelector('#book2 .reserve');
let checkout2 = document.querySelector('#book2 .checkout');
let checkin2 = document.querySelector('#book2 .checkin');

const status3 = document.querySelector('#book3 .status');
let reserve3 = document.querySelector('#book3 .reserve');
let checkout3 = document.querySelector('#book3 .checkout');
let checkin3 = document.querySelector('#book3 .checkin');


checkin1.style.color = '';
status1.style.color = STATUS_MAP.overdue.color;
reserve1 = STATUS_MAP.overdue.canReserve ? reserve1.enabled=true : reserve1.disabled=true;
checkout1 = STATUS_MAP.overdue.canCheckout ? checkout1.enabled=true : checkout1.disabled=true;
checkin1 = STATUS_MAP.overdue.canCheckIn ? checkin1.enabled=true : checkin1.disabled=true;

checkin2.style.color = '';
status2.style.color = STATUS_MAP.reserved.color;
reserve2 = STATUS_MAP.reserved.canReserve ? reserve2.enabled=true : reserve2.disabled=true;
checkout2 = STATUS_MAP.reserved.canCheckout ? checkout2.enabled=true : checkout2.disabled=true;
checkin2 = STATUS_MAP.reserved.canCheckIn ? checkin2.enabled=true : checkin2.disabled=true;

checkin3.style.color = '';
status3.style.color = STATUS_MAP.shelf.color;
reserve3 = STATUS_MAP.shelf.canReserve ? reserve3.enabled=true : reserve3.disabled=true;
checkout3 = STATUS_MAP.shelf.canCheckout ? checkout3.enabled=true : checkout3.disabled=true;
checkin3 = STATUS_MAP.shelf.canCheckIn ? checkin3.enabled=true : checkin3.disabled=true;