
function minInArray(numbers){
    let smallest = numbers[0];

    for(let i = 0; i < numbers.length; i++){
     const index = i;
     const elements = numbers[index];
     if(elements < smallest){
        smallest = elements;
     }
    }
    return smallest;
}

const heights = [167, 196, 52, 444, 701, 1500];
const tallest = minInArray(heights);
console.log("Lowest Person is: ", tallest);