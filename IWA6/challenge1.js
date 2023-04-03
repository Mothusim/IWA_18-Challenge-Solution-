const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = typeof primaryPhone === 'string';
const secondaryValid = typeof secondaryPhone === 'string';


const primaryContainsDigits = primaryValid && /^[0-9]+$/.test(primaryPhone);
const secondaryContainsDigits = secondaryValid && /^[0-9]+$/.test(secondaryPhone);

if (primaryValid) {

    console.log('Primary phone is valid numerical string:', primaryContainsDigits);

}

if (secondaryValid) {

    console.log('Secondary phone is valid numerical string:', secondaryContainsDigits);

}

