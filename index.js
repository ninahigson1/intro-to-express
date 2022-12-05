const express = require('express');

const app = express ();

// //when app recieves a GET request to index page, do this...
// app.get('/', (req, res) =>{
//     res.sendFile('hello world!');
// });

app.listen(3000, () => {
    console.log('app listening on http://localhost:3000');
});