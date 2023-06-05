const eventEmitter = require('events')
const emitter = new eventEmitter()


module.exports.setEvent = (event, cb) => {
    emitter.on(event, cb)

} 
module.exports.callEvent = (event) => {
    emitter.emit(event)
}  


