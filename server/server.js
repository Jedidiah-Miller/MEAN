const express = require('express')
const app = express()
const router = require('./config/routes')
const path = require("path")

app.use('/main', require('./config/routes.js'))
app.use(express.static(path.join('../public/dist/public' )))

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("../public/dist/public/index.html"))
});


const server = app.listen(8000, function() {
    console.log('\x1b[35m', "listening on port " + server.address().port, "\x1b[0m")
})

// ng s --port 4200 --host 0.0.0.0
// ng g s http