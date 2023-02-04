const express = require('express')
const {getBook, createStaff} = require('../controller/librarystaffsController')
const router = express.Router()

router.get('/books', getBook)
router.post('/books', createStaff)

module.exports = router