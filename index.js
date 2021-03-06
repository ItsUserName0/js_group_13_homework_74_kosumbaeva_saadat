const express = require('express');
const messages = require('./app/messages');
const db = require('./fileDb');
const app = express();

const port = 8000;

app.use(express.json());
app.use('/messages', messages);

db.init();
app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});
