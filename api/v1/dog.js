const { Router } = require('express');
const { readdirSync } = require('fs');
const readHtml = require("../../utils/readHtml");
const router = Router();

router.get('/', (req, res) => {
    res.send(readHtml("./api/dog.html"));
});

router.post('/v1', (req, res) => {
    const dogs = readdirSync("./public/dogs", { "encoding": "utf8" }).filter(i => i != ".DS_Store");
    const index = Math.floor(Math.random() * dogs.length);
    res.status(200).json({ pic: "http://localhost/dogs/" + dogs[index], index });
});

module.exports = router;
