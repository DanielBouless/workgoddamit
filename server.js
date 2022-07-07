// DEPENDENCIES
const express = require('express')
const breads = express.Router()


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// CONTROLLERS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

app.get('*', (req,res)=>{
  res.send('404')
})




app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})
