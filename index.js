const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const conf = require('./conf/db');
const account = require('./routes/account');


const app = express();




const port = 3000;

app.use(passport.initialize());
app.use(passport.session());
require('./conf/passport')(passport);

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(conf.db ,{ useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () =>{
    console.log("Подключено");
});

mongoose.connection.on('error', (err) =>{
    console.log("Не подключено к БД:" + err);
});


app.get('/', (req, res) => {
    res.send('Главная');
});

app.use('/account', account);

app.listen(port, () =>{
    console.log("It works!:" + port);
})



