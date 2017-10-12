const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/contact/sendMessage', (req, res) => {
    res.status(200).send('Tadaa!!! Your Message!!!!!!!!');
});

app.listen(PORT);