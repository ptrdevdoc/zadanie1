'use strict';

const express = require('express');
var requestIp = require('request-ip');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    var ip = requestIp.getClientIp(req)
  res.send(`Adres ip u klienta ${ip} <br> Aktualny czas u klienta: ${new Date()}`);
});

app.listen(PORT, HOST);
console.log(`Data uruchomienia serwera ${new Date()}`);
console.log(`Autor: Piotr Piwoński`);
console.log(`Nasłuchiwanie na porcie ${PORT}`);