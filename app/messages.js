const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('list of messages');
});
router.get('/:id', (req, res) => {
    res.send('one message');
});
router.post('/', (req, res) => {
    res.send('created');
});

module.exports = router;