const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(app.get('port'), () => {
    console.log(`Server running in port ${app.get('port')}`.rainbow);
});

console.log("INITIALIZED");