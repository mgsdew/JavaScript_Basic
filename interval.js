
 console.log('First');
 console.log('Second');
//  setTimeout(() => {
//     console.log('Third');
//  }, 200);

// setInterval(()=>{
//     console.log('Third');
// },500);

let seconds = 0;
const intervalId = setInterval(()=>{
//console.log(seconds++); // use previous define value first then increase it by adding 1
console.log(++seconds); // First increase previous define value by adding 1 and then use 
if(seconds == 10){
    clearInterval(intervalId);
}
}, 500);    // 500ms ~ 0.5s

 console.log('Fourth');
 console.log('Fifth');
