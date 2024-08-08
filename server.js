//express : framework
const express = require('express')
const app = express()

//cors : share API
const cors = require('cors')
app.use(cors())

//mongoose : database
const mongoose = require('mongoose')
const db = "mongodb+srv://nghiangtgch220318:Hello206cc@mydb.rfisa31.mongodb.net/vocab-builder"   // vocab-builder: db name
mongoose.connect(db)
   .then(() => console.log('ok'))
.catch(err => console.error(err))

//body-parser : input data
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//router : web link
const vocabRouter = require('./api/routes/vocabRouter')
vocabRouter(app)

//run server : by listening port
const port = process.env.PORT || 3001
app.listen(port)
