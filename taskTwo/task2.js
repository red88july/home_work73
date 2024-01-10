const express = require('express');
const app = express();
const port = 8080;
const Vigenere = require('caesar-salad').Vigenere;

const enCoddingWord = 'goods';
const deCoddingWord = 'goodnight';

app.get('/encode/:passEncode', (req, res) => {
    const encodingPassword = req.params.passEncode;
    const encryptPass = Vigenere.Cipher(enCoddingWord).crypt(encodingPassword);
    res.send(encryptPass);
});

app.get('/decode/:passDeCode', (req, res) => {
    const decodingPassword = req.params.passDeCode;
    const decryptionPassword = Vigenere.Decipher(deCoddingWord).crypt(decodingPassword);
    res.send(decryptionPassword);
});

app.listen(port, () => {
    console.log(`Server is online on ${port}`);
})