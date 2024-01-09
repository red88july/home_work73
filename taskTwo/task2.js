const express = require('express');
const app = express();
const port = 8001;

app.get('/test', (req, res) => {
    res.send('This is a second task');
});

app.listen(port, () => {
   console.log(`Server is online on ${port}`);
})