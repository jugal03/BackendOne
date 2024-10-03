const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => { 
    res.send('Hello World!');
});

app.get('/login', (req, res) => {
    res.send('login');
});

app.get('/register', (req, res) => {
    res.send('register');
});

app.get('/logout', (req, res) => {
    res.send('logout');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
