const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = typeof primaryPhone === 'string';
const secondaryValid = typeof secondaryPhone === 'string';


const primaryContainsOnlyDigits = primaryValid && /^[0-9]+$/.test(primaryPhone);
const secondaryContainsOnlyDigits = secondaryValid && /^[0-9]+$/.test(secondaryPhone);

if (primaryValid) {

    console.log('Primary phone is valid numerical string: ', primaryContainsOnlyDigits);

}

if (secondaryValid) {

    console.log('Secondary phone is valid numerical string: ', secondaryContainsOnlyDigits);

}

