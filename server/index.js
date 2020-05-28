const express = require('express')
const passport = require('passport')
const cookieSession = require('cookie-session')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const key = require('./config/keys')
require('./models/User')
require('./models/Surveys')
require('./services/passport')
mongoose.connect(`${key.mongodbURI}`)

const app = express()


app.use(bodyParser.json())

app.use(
    cookieSession({
        maxAge : 24*60*60*1000 , 
        keys  : [key.cookieKeys]
    })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoute')(app)


if(process.env.NODE_ENV === 'production')
{
    //Build Client Production

    app.use(express.static('client/build'))

    const path  = require('path')
    app.get('*' , (req , res) => {
        res.sendFile(path.resolve(__dirname , 'client' , 'build', 'index.html'))
    })
}



const PORT = process.env.PORT || 5000

app.listen(PORT)