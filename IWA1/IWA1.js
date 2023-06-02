//@ts-check

/**
 * @type {number} MAX_NUMBER - the maximum number that the tally counter can count up to
 */

const MAX_NUMBER = 15;

/**
 * @type {number} MIN_NUMBER - the minimum number that the tally counter can count up to
 */

const MIN_NUMBER = -5;

/**
 * @type {Object} number - the object containing the number being displayed on the web page
 */

const number = document.querySelector('[data-key="number"]');

/**
 * @type {Object} subtract - the object containing the subtract button element
 */

const subtract = document.querySelector('[data-key="subtract"]');

/**
 * @type {Object} add - the object containing the add button element
 */

const add = document.querySelector('[data-key="add"]');



/**
 * This function decreases the {@link newValue} by 1 until it reaches the {@link MIN_NUMBER}
 * When the {@link MIN_NUMBER} is reached the {@link subtract} button is disabled
 * @returns {void}
 */

const subtractHandler = () => {

  /**
   * @type {number} newValue- takes the string value that was fetched from the DOM using the querySelector and converts it into a number type
   */






  const newValue = parseInt(number.Value) + 1;
  number.value = newValue;

  if (add.disabled === true) {

      add.disabled = false;
  }
  
  if (newValue <= MIN_NUMBER) {

      subtract.disabled = true;

  }
}

/**
 * This function Increases the {@link newValue} by 1 until it reaches the {@link MAX_NUMBER}
 * when the {@link MAX_NUMBER} is reached the {@link add} button is disabled
 * @returns {void}
 */

const addHandler = () => {

  const newValue = parseInt(number.value) + 1;
  number.value = newValue;

  if (subtract.disabled === true) {

      subtract.disabled = false;

  }
  
  if (newValue >= MAX_NUMBER) {

      add.disabled = true;

  }
}

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);