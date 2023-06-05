function findWord(text, word) {
    const words = text.split(' ');
    const matchingWords = words.filter((w) => w.toLowerCase() === word.toLowerCase());
    return matchingWords.length;
}



function isEven(number) {
    return number % 2 === 0
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    findWord: findWord,
    isEven: isEven,
    isPrime: isPrime
};