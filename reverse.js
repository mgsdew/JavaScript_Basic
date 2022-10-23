function reverseString(text){

    let reversed = '';
    for(let i = text.length - 1; i >= 0; i--){
        const element = text[i];
        reversed += element;
        // console.log(element, reversed);
    }
    return reversed;
}

const Str = 'I am a programmer';
const reversedStr = reverseString(Str);
console.log(reversedStr);