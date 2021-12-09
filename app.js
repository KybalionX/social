const express = require('express');
const app = express();
const colors = require('colors');

app.get('/', (req, res) => {
    res.send("Hello world");
});

console.log("INITIALIZED");