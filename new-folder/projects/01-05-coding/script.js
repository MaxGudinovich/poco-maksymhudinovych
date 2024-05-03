//Which number is bigger?

/* let num1 = 10;
let num2 = 5;

function whichIsBigger(num1, num2) {
  return num1 > num2
    ? `The greater number of ${num1} and ${num2} is ${num1}`
    : `The greater number of ${num1} and ${num2} is ${num2}`;
}

console.log(whichIsBigger(num1, num2));
 */

//The world translator

/* function worldTranslator(languageCode) {
  switch (languageCode) {
    case 'es':
      return 'Hola Mundo';
    case 'de':
      return 'Hallo Welt';
    case 'en':
      return 'Hello World';
    default:
      return 'Hello World';
  }
}

console.log(worldTranslator('de')); */

//Retirement calculator

let age = document.getElementById('age');
let retirementAge = document.getElementById('retirement-age');
let result = document.getElementById('result');
let form = document.getElementById('form');
form.addEventListener('submit', retirementCalculator);

function retirementCalculator(event) {
  event.preventDefault();
  let yearsToRetirement = retirementAge.value - age.value;
  let currentYear = new Date().getFullYear();
  let retirementYear = currentYear + yearsToRetirement;

  if (yearsToRetirement > 0) {
    result.textContent = `You have ${yearsToRetirement} years left until you can retire. It's ${currentYear}, so you can retire in ${retirementYear}`;
  } else {
    result.textContent = `You can already retire!`;
  }
}
