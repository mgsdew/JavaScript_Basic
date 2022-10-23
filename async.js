 
 // Sync Call
//  console.log('I');
//  console.log('eat');
//  console.log('ice-cream');


  // Async Call
  console.log('I');
  setTimeout(() => {        //  setTimeout is a async function
    console.log('eat');
  }, 2000);                // 2000ms ~ 2s
  console.log('ice-cream');