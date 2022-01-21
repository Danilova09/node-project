const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
let password = '';
const port = 4000;


app.get('/Hello', (request, response) => {
    response.send('Hello\n');
});

app.get('/encode/:password', (request, response) => {
    password = Vigenere.Cipher('password').crypt(request.params.password);
    response.send(password);
});

app.get('/decode/:password', (request, response) => {
    password = Vigenere.Decipher('password').crypt(request.params.password);
    response.send(password);
});

app.listen(port, () => {
    console.log('server is listening port ' + port);
});