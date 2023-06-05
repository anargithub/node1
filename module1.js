const cowsay = require('cowsay')

const message = cowsay.say({
    text: 'hello, its me',
    e: '--',
    T: 'U',
    // r: true,

})

console.log(message)

module.exports = cowsay