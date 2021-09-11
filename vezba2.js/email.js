const { EventEmitter } = require('events');
const data = require('./data');

const eventEmitter = new EventEmitter();


eventEmitter
.on('max_found', data => {
    console.log('max_found event happened');
    console.log(data);
})
.on('min_found', data =>{
    console.log('min_found has happened');
    console.log(data);

});

module.exports = eventEmitter;
