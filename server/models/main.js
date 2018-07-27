const mongoose = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')

const mainSchema = new mongoose.Schema ( {
    name: {
        type: String,
        minlength: [3, "name must be at least 3"],
        validate: {
            validator: function(v ) {
                if(v && v.length) {
                    return true
                }
                return false
            },
            message: 'you need to add a name'
        }
    },
    type: {
        type: String,
        minlength: [3, " name must be at least 3"],
        validate: {
            validator: function(v ) {
                if(v && v.length) {
                    return true
                }
                return false
            },
            message: 'this needs a name'
        }
    },

        review: [ {
        // reviewer name
                type: {
                    type: String,
                    minlength: [3, "need longer name, must be > 3"],
                    validate: {
                        validator: function(v) {
                            if(v && v.length) {
                                return true
                            }
                            return false
                        },
                        message: 'add your name'
                    }
                },
                // review
                desc: {
                    type: String,
                    minlength: [3, " must be at least 3 characters"],
                    validate: {
                        validator: function(v) {
                            if(v && v.length) {
                                return true
                            }
                            return false
                        },
                        message: 'fill this in'
                    }
                },
                // stars
                skills: {
                    type: String,
                    minlength: [1, "cant be less than 1"],
                    maxlength: [5, "can't be greater than 5 stars"],
                    validate: {
                        validator: function(v) {
                            if(v && v.length) {
                                return true
                            }
                            return false
                        },
                        message: 'rate the thing'
                    }
                },
            } ],

    // totalStars:{type:Array}
}, {timestamps:true} )

// mainSchema.plugin(uniqueValidator, {message : 'this name has already been used'})

mongoose.model('Main', mainSchema)

module.exports = mainSchema