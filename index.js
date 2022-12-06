const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');



const app = express ();


app.engine('.handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views','./views');




//when app recieves a GET request to index page, do this...
app.get('/', (req, res) =>{
    res.render('home');
});

app.get('/signup', (req, res) =>{
    res.render('signup');
})

app.get('/login', (req, res) =>{
    res.render('login');
})

app.get('/about', (req, res) =>{
    res.render('about');
})
app.listen(3000, () => {
    console.log('app listening on http://localhost:3000');
});