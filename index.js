const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');



const app = express ();
// get express to serve static content to the user e.g (images, css, js)
app.use(express.static(path.join(__dirname, 'public')));



app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views','./views');




//when app recieves a GET request to index page, do this...
app.get('/', (req, res) =>{
    let randNum = Math.floor(Math.random()* 10)
    res.render('home', {number: randNum, pageName: 'Home'});
});

app.get('/news-feed', (req, res) => {
    const data = [
        {
            img: './images/placeholder.png',
            title: 'Want to work in tech on Wall Street? These are the 8 coding languages that are most in demand.',
            bio: 'As the fundamental language for engineering work across Wall Street, Python has long been at the top of the skills list for buy- and sell-side firms alike. It\'s a favorite at Capital One and Man Group, with the hedge fund even building its own custom version of the language.',
        },
        {
            img: './images/placeholder.png',
            title: 'This robotic kit makes learning coding fun',
            bio: 'Learn to code with this build-it-yourself bot. CodeRover allows you to have fun while you learn to harness your creativity and develop coding skills.',
        },
        {
            img: './images/placeholder.png',
            title: 'The Pest Who Shames Companies Into Fixing Security Flaws ',
            bio: 'A profile of Christopher Soghoian whose "productions follow a similar pattern, a series of orchestrated events that lead to the public shaming of a large entity—Google, Facebook, the federal government',
        },
        {
            img: './images/placeholder.png',
            title: 'The Energy Future Needs Cleaner Batteries ',
            bio: 'To deal with climate change and power the cars of tomorrow, we\'ll have to solve the cobalt problem.',
        },
        {
            img: './images/placeholder.png',
            title: 'Why My NFT Toad Brought Me Joy ',
            bio: 'But there\'s one way that NFTs are profoundly different from the last generation of online disrupters.',
        }
    ]

    res.render('news-feed', {data, pageName: 'news-feed'})



})


app.get('/pointplotter', (req, res) => {
    res.render('/pointplotter', {pageName:'point plotter'})
})

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