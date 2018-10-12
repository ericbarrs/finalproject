const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport')
const bodyParser = require('body-parser');

const db = require('./config/keys').mongoURI

const profile = require('./routes/api/profile.js');
const login = require('./routes/api/user.js');
const post = require('./routes/api/post.js');  

const app = express();

const port = process.env.PORT || 5000

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

app.use('/', login);
app.use('/', profile);
app.use('/', post);