const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');



const app = express ();

//when app recieves a GET request to index page, do this...
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('app listening on http://localhost:3000');
});