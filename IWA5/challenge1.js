const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

const shoes = 300 * 1;
const toys = 100 * 7;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;
const customers = 2;
const location = 'NAM';
const currencyConverter = 1/16.67


const cost = shoes + batteries + pens + shirts + toys;

const shipping = 0;

if ((cost >= 1000) && (location == 'NAM' || location == 'RSA') && (customers == 1) ) {

    const shipping = 0;
    totalCost = (cost + shipping).toFixed(2);

    if (location == 'RSA') {

        currency = 'R'        

        console.log('price:',currency + totalCost);

    } else{

        currency = '$';
        
        console.log('price:',currency + (totalCost * currencyConverter));

    }

} else {

    if (customers != 1) {

        console.log(FREE_WARNING);

    }else if (location == 'RSA') {

        currency = 'R';
        const shipping = 400;
        totalCost = (cost + shipping).toFixed(2);
        console.log('price:', currency + totalCost);

    } else if (location == 'NAM') {

        currency = '$';
        const shipping = 600;
        totalCost = (cost * currencyConverter) + shipping;
        console.log('price:', currency + totalCost);

    } else if (location == 'NK') {

        console.log(BANNED_WARNING);
    
    } else {

        currency = '$';
        const shipping = 800;
        totalCost = (cost * currencyConverter) + shipping;
        console.log('price:', currency + totalCost);

    }

};

