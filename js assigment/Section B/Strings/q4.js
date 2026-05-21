function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversed = words.reverse();
    return reversed
}

console.log(reverseWords("Hello World"));