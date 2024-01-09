const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('<h1>This is a default route </h1>' + `<h4>On this route can't find any content</h4>`);
});

app.get('/Hello', (req, res) => {
    res.send('<h1>Hello!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is online on ${port}`);
});