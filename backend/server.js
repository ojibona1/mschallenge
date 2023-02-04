const express = require('express')
const dotenv = require('colors').config
const port = process.env.PORT || 5000
const {connectDb} = require('../config/db')
const app = express()

connectDb()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/library', require('./routes/librarystaffroutes'))
app.listen(port, ()=>{
    console.log('server started on ' + port)
})