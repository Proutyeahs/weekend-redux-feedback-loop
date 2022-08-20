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

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "feedback" ORDER BY "id";`;
    pool.query(queryText).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
})

router.delete('/:id', (req,res) => {
    const id = req.params.id
    const queryText =`
    DELETE FROM "feedback"
    WHERE id = $1;`;
    pool.query(queryText, [id]).then(results => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
})

router.put('/flag/:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id;
    const flag = req.body.isFlagged;
    console.log(flag)
    queryText =`
    UPDATE "feedback"
    SET "flagged" = $2
    WHERE "id" = $1;`;
    pool.query(queryText, [id, flag]).then(results => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
})

module.exports = router;