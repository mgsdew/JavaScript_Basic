const lyrics = "  This is a basic example of string split and join in JavaScript. You need to memorize those in mind when programming."

const splitAllWord = lyrics.split(" "); 
//console.log(splitAllWord)
const splitAllChar = lyrics.split(""); 
// console.log(splitAllChar)
const splitAllSentence = lyrics.split('.'); 
// console.log(splitAllSentence)

const slice = lyrics.slice(5,8); 
// console.log(slice)

const subString = lyrics.substring(5,8); 
// console.log(subString)

const trim = lyrics.trim(); 
// console.log(trim)


const lines = [
    'This is a basic example of string split and join in JavaScript',
     'You need to memorize those in mind when programming.'
]

const joinSen = lines.join('.')
console.log(joinSen);

// More Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
