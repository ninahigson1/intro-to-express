const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');



const app = express ();


app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views','./views');




//when app recieves a GET request to index page, do this...
app.get('/', (req, res) =>{
    let randNum = Math.floor(Math.random()* 10)
    res.render('home', {number: randNum, pageName: 'Home'});
});

app.get('/signup', (req, res) =>{
    res.render('signup', {pageName: 'signup'});
})

app.get('/login', (req, res) =>{
    res.render('login', {pageName: 'login'});
})

app.get('/about', (req, res) =>{
    res.render('about', {pageName: 'about'});
})
app.listen(3000, () => {
    console.log('app listening on http://localhost:3000');
});