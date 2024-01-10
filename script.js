const express = require('express');
const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;

const enCoddingKey = 'goods';
const deCoddingKey = 'goodnight';


app.get('/', (req, res) => {
    res.send('<h1>This is a default route </h1>' + `<h4>On this route can't find any content</h4>`);
});

app.get('/Hello', (req, res) => {
    res.send('<h1>Hello!</h1>');
});

app.get('/encode/:passEncode', (req, res) => {
    const encodingPassword = req.params.passEncode;
    const encryptPass = Vigenere.Cipher(enCoddingKey).crypt(encodingPassword);
    res.send(encryptPass);
});

app.get('/decode/:passDeCode', (req, res) => {
    const decodingPassword = req.params.passDeCode;
    const decryptionPassword = Vigenere.Decipher(deCoddingKey).crypt(decodingPassword);
    res.send(decryptionPassword);
});

app.listen(port, () => {
    console.log(`Server is online on ${port}`);
});