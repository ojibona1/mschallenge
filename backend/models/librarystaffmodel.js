const mongoose = require('mongoose')

const librarystaff = mongoose.Schema({
    staff_ID : {
        type : String,
        required : true,
        unique : true
    },
    staff_firstname : {
        type : String,
        required : true,
    },
    staff_lastname : {
        type : String,
        required : true,
    }, 
    staff_mobilenumber : {
        type : String, 
        required : true,
    }, 
    staff_email : {
        type : String,
        required : true,
    },
    staff_password : {
        type : String,
        required : true, 
    },
    staff_authsalt : {
        type : String, 
        required : true,
    },
    staff_category : {
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('librarystaff', librarystaff)