//say hallo

/* let userName = prompt('Enter your name');

userName ? alert(`Hello, ${userName}!`) : alert('Hello stranger!'); */

//counting the number of characters in the string

/* let countingStr = prompt('Enter any string');

countingStr
  ? alert(`${countingStr} has ${countingStr.length}`)
  : alert('You did not enter anything!'); */

//printing quotes

/* let quote = prompt('Enter any quote');
let author = prompt('Enter the author of the quote');

quote && author
  ? alert(`${author} says, "${quote}"`)
  : alert('You did not enter anything!'); */

//fortune teller

/* let children = prompt('How many children do you want to have?');
let partner = prompt('What is the name of your partner?');
let city = prompt('Where do you want to live?');
let job = prompt('What is your dream job?');

children && partner && location && job
  ? alert(
      `You will be a ${job} in ${city}, and married to ${partner} with ${children} kids.`
    )
  : alert('You miss something, fill all prompts!'); */

//age calculator

/* let myAge = prompt('Enter your birth year');
let feautureAge = prompt('Enter the feauture year');

myAge && feautureAge
  ? alert(
      `I will be either ${feautureAge - myAge} or ${
        feautureAge - myAge - 1
      } in ${feautureAge}.`
    )
  : alert('You miss something, fill all prompts!'); */

//translate days of the week

/* let day = prompt('Enter the day of the week');
console.log(day);
const days = [
  { prompt: 'monday', german: 'montag' },
  { prompt: 'tuesday', german: 'dienstag' },
  { prompt: 'wednesday', german: 'mittwoch' },
  { prompt: 'thursday', german: 'donnerstag' },
  { prompt: 'friday', german: 'freitag' },
  { prompt: 'saturday', german: 'samstag' },
  { prompt: 'sunday', german: 'sonntag' },
];

alert(days.find((item) => item.prompt === day.toLowerCase()).german);
 */

//odd or even

/* let number = prompt('Enter any number between 0 and 20');

alert(number % 2 === 0 ? 'even' : 'odd');
 */

//odd or even v2

/* let number = prompt('Enter any number between 0 and 20');

for (let i = 0; i <= number; i++) {
  if (i % 2 === 0) {
    document.getElementById('content').innerHTML += `<p>${i} is even</p>`;
  }
}
 */

//multiplication table

/* let number = prompt('Enter any number between 0 and 10');

alert(`${number} * 9 = ${number * 9}`);
 */

//multiplication table v2

/* let number = prompt('Enter any number between 0 and 10');

for (let i = 0; i <= 10; i++) {
  document.getElementById('content').innerHTML += `<p>${number} * ${i} = ${
    number * i
  }</p>`;
}
 */
