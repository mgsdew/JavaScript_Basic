const result = Math.pow(2,8);
// console.log(result);  

const num1 = 25;
const num2 = 45;

const gaps = Math.abs(num1 - num2); // Return difference as positive no
// console.log(gaps);

const number = 2.58967555;
const fullNumber = Math.round(number);  // Return nearby full number. If val > .5 then 1 & if val < .5 then 0
// console.log(fullNumber);  
const ceilNumber = Math.ceil(number); // Return nearby upper full number.
// console.log(ceilNumber);   
const floorNumber = Math.floor(number); // Return nearby lower full number.
// console.log(floorNumber);   

const array1 = [2, 3, 1];
const minVal = Math.min(...array1);  // For getting min value from array
// console.log(minVal);
const maxVal = Math.max(...array1);  // For getting min value from array
console.log(maxVal);

//--------- Random

// console.log(Math.random());
const random = Math.random()*100; // Will provide random val in between 100
// console.log(random);
// console.log(Math.round(random));



// For more practice :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math