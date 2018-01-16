const mustacheExpress = require('mustache-express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const models = require('./models')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.engine('mustache', mustacheExpress())
app.use(methodOverride('_method'))
app.set('view engine', 'mustache')
app.set('views', './views')

models.users.create({

})

// STARTING POINT FOR ROUTES
app.get('/', (req,res) => {
  res.redirect('/home')
})

app.get('/home',(req,res) => {
  res.render('home')
})

app.get('/home/registeruser' (req,res) => {
  res.render('register')
})



// LISTENING TO ROUTES
app.listen(3000, () =>{
  console.log('We are live on channel 3000')
})
