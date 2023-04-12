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

const status1 = querySelector('#book1 .status');
const reserve1 = querySelector('#book1 .reserve');
const checkout1 = querySelector('#book1 .checkout');
const checkin1 = querySelector('#book1 .checkin');

const status2 = querySelector('#book2 .status');
const reserve2 = querySelector('#book2 .status');
const checkout2 = querySelector('#book2 .status');
const checkin2 = querySelector('#book2 .status');

const status3 = querySelector('#book3 .status');
const reserve3 = querySelector('#book3 .status');
const checkout3 = querySelector('#book3 .status');
const checkin3 = querySelector('#book3 .status');

checkin1.style.color = 'none';
status1.style.color = STATUS_MAP.status.color;
reserve1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled';
checkout1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
checkin1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';

checkin2.style.color = 'none';
status2.style.color = STATUS_MAP.status.color;
reserve2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled';
checkout2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
checkin2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';

checkin3.style.color = 'none';
status3.style.color = STATUS_MAP.status.color;
reserve3 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled';
checkout3 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
checkin3 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';