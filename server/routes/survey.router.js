const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

router.post('/', (req, res) => {
    console.log(req.body)
    const queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`;
    const results = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query(queryText, results).then( results => {
        res.sendStatus(200)
    }).catch(err => {
        console.log('router', err)
        res.sendStatus(500)
    })
})

module.exports = router;