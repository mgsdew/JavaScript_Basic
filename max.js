const jim = 84;
const dela = 1500;
const chunku = 104;

// -- Approach 1

// if(jim > dela && jim > chunku){
//     console.log('Jim has heighest number');
// }
// else if(dela > jim && dela > chunku){
//     console.log('Dela has heighest number');
// }
// else{
//     console.log('Chunku has heighest number');
// }

// -- Approach 2

// const maxNumber = Math.max(jim, dela, chunku);
// console.log(maxNumber);


function getMaxVal(a, b, c){
    return maxNumber = Math.max(a, b, c);
}

console.log(getMaxVal(jim, dela, chunku));