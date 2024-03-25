require('dotenv').config({
    path: './.env'
})
global.path = __dirname

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


const app = express()

app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(cors())
app.use('/uploads',express.static('uploads'))
// app.use('/uploads/products',express.static('uploads/products'))
app.use('/', require('./src/routers'))

app.get('/', (req, res) =>{
    return res.json({
        success: true,
        message: 'Backend is running well'
    })
})

app.listen(process.env.PORT, () =>{
    console.log(`app listening on port ${process.env.PORT}`)
})

module.exports = app