// 1
const module1 = require('./module1')



// 2
const module2 = require('./module2')

function func(text) {
    module2.setEvent(text, ()=>{
        console.log('its ok')
    })
    module2.callEvent(text)
}
func('hello')



// 3
const module3 = require('./module3')

const text = 'hello world, have a good day'
const word = 'day'
const count = module3.findWord(text, word);
console.log(`В тексте "${text}" - количество найденных ключевых слов "${word}": ${count}`);


const number = 13
const isEven = module3.isEven(number)
const isPrime = module3.isPrime(number)
console.log(`Число ${number} - четное: ${isEven}, простое: ${isPrime}`) 