const { readdirSync } = require("fs");
const readHtml = require("./utils/readHtml");
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

const apis = readdirSync("./api/v1", { encoding: "utf8" }).filter(i => i.endsWith(".js"));
apis.forEach(api => {
    app.use('/api/' + api.replace(".js", ""), require("./api/v1/" + api));
});

app.get('/', (req, res) => {
    res.status(200).send(readHtml("./index.html"));
});

app.listen(80, () => {

});