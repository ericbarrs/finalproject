const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport')
const bodyParser = require('body-parser');
const keys = require('./config/keys')

const db = process.env.mongoURI || keys.mongoURI

const exercise = require('./routes/api/exercise.js');
const profile = require('./routes/api/profile.js');
const login = require('./routes/api/user.js') 

const app = express();

const port = process.env.PORT || keys.port


app.use(express.static("public"))
//use middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize())

//passport config
require('./config/passport')(passport)


// Connected the database
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(()=>{console.log('DB is connected')})
    .catch(err=> console.log(err))
// use express



app.listen(port, err=(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`listening on ${port}`)
    }
})

app.use('/', exercise);
app.use('/', login);
app.use('/', profile);