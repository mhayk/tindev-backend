const express = require('express');

const routes = express.Router();

routes.get('/devs ', (req, res) => {
    return res.json({ message: 'hi'});
});

routes.post('/devs', (req, res) => {
    console.log(req.body);

    return res.json({ok: true})
})

module.exports = routes;