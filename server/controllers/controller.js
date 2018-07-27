const object = require('../models/mongoose.js')

function getAll (req, res) {
    object.find({}).sort({createdAt: "descending"})
        .then(data => res.json(data))
        .catch(err => res.json(err))
        console.log("\x1b[42m", "\x1b[30m", "get all route", "\x1b[0m" )
}

function getOne (req, res) {
    object.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

function create (req, res) {
    object.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err))
    console.log('create route --- ')
}

function destroy (req, res) {
    console.log("\x1b[42m", "\x1b[30m", "controller delete route", "\x1b[0m" )
    object.findByIdAndRemove(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
    console.log("\x1b[42m", "\x1b[31m", "controller ___deleted___", "\x1b[0m", req.params.id )
}
// add review, or comment or whatever
function addReview (req, res) {
    console.log("\x1b[42m", "\x1b[30m", "controller edit route", "\x1b[0m" )
    object.findByIdAndUpdate(req.params.id, {$push:  { review: req.body } },
        {runValidators: true, }
    )
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
}

function deleteOneComment (req, res) {
    console.log("\x1b[42m", "\x1b[30m", "1. controller delete comment route", "\x1b[0m", req.params, req.body )
    object.findByIdAndUpdate( req.params.id,
        {$pull: { review:  { _id:  req.body._id } } } )
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
    console.log("\x1b[42m", "\x1b[30m", "2. end of controller delete comment route", "\x1b[0m", req.body )
}

function editOne (req, res) {
    console.log("\x1b[42m", "\x1b[30m", "controller edit route", "\x1b[0m" )
    object.findByIdAndUpdate(req.params.id, req.body,
        {runValidators: true, })
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
}

module.exports = {
    getAll:getAll,
    getOne:getOne,
    create:create,
    destroy:destroy,
    editOne:editOne,
    deleteOneComment:deleteOneComment,
    addReview:addReview,
}