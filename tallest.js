
function maxInArray(numbers){
    let largest = numbers[0];

    for(let i = 0; i < numbers.length; i++){
     const index = i;
     const elements = numbers[index];
     if(elements > largest){
        largest = elements;
     }
    }
    return largest;
}

const heights = [167, 196, 52, 444, 701, 1500];
const tallest = maxInArray(heights);
console.log("Tallest Person is: ", tallest);