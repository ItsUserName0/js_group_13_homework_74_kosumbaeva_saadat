const express = require('express');
const db = require('../fileDb');
const router = express.Router();

router.get('/', (req, res) => {
    const messages = db.getMessages();
    return res.send(messages);
});
router.get('/:date', (req, res) => {
    const message = db.getMessage(req.params.date);
    if (!message) {
        return res.status(404).send({message: 'Not found!'});
    }
    return res.send(message);
});
router.post('/', (req, res) => {
    const message = {
        message: req.body.message
    };
    const messageFromServer = db.addMessage(message);
    return res.send(messageFromServer);
});

module.exports = router;