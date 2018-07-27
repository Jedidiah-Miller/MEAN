const bP = require('body-parser')
const express = require('express'),
    router = express.Router()
        router.use(bP.json())
const api = require('../controllers/controller')

router.get('/', function(req, res) {
    console.log("\x1b[43m","\x1b[30m", "index route", "\x1b[0m" )
    api.getAll(req, res)
})
router.get('/:id', function(req, res) { api.getOne(req, res)})
router.post('/', function(req, res) { api.create(req, res)})
router.put('/:id', function(req, res) { api.addReview(req, res)})
// router.put('/c/:id', function(req, res) { api.addChildObj(req, res)})
router.delete('/:id', function(req, res) { api.destroy(req, res)})
router.post('/com/:id', function(req, res) { api.deleteOneComment(req, res)})
// router.post('/obj/:id', function(req, res) { api.deleteChildObj(req, res)})
router.patch('/e/:id', function(req, res) { api.editOne(req, res)})
// router.put('/:id', function(req, res) { api.addComment(req, res)})
// router.put('/:id', function(req, res) { api.addLike(req, res)})


module.exports = router