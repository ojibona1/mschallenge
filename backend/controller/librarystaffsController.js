const asyncHandler = require('express-async-handler')
const librarystaff = require('../models/librarystaffmodel')

const getBook =asyncHandler( async(req, res)=>{
    const {email} = req.body

    const staff = await librarystaff.findOne({email})
    if(staff){
        res.status(200).json(staff)
    }
})

const createStaff = async(req, res)=>{
    const {id, fname, lname, pnum, email, pass, salt, cat} = req.body
    const staff = await librarystaff.create({
        staff_ID : id,
        staff_firstname : fname,
        staff_lastname : lname,
        staff_mobilenumber : pnum,
        staff_email : email,
        staff_password : pass,
        staff_authsalt : salt,
        staff_category : cat
    })
    
    if(staff){
        res.status(200).json(staff)
    }
}

module.exports = {
    getBook,
    createStaff
}