const mongoose = require('mongoose');
const dBURI = 'mongodb://127.0.0.1:27017/restaurant_Db'

mongoose.connect( dBURI,
{ useNewUrlParser: true },
function(err) {
    if(err) {
        console.log("\x1b[31m", '___mongoose connection error ',err, "\x1b[0m");
    } else {
        console.log('\x1b[35m', "___ mongoose is connected to " + "\x1b[47m","\x1b[30m" + dBURI + " \x1b[42m" + "<== " + "\x1b[0m" );
    }
})

const mainSchema = require('./main.js')

module.exports = mongoose.model('Main',mainSchema)