function reverseWords(text){

    const words = text.split(' ');
    const result = [];
    for(let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    return result.join(' ');
}

const Str = 'I am a programmer';
const reversedWord = reverseWords(Str);
console.log(reversedWord);