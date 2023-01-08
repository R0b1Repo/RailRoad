const express = require('express')
require("dotenv").config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOOSE_CONNECT_URL)
mongoose.set('strictQuery', true)

const bodyParser = require('body-parser')

const userRoutes = require('./routes/user')
const stationRoutes = require('./routes/station')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.use('/user', userRoutes)
app.use('/station', stationRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("RailRoad écoute sur le port", port)
})
