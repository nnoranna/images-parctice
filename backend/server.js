const express = require("express");
const fs = require("fs")
const path = require("path")
const port = 9000;

const app = express();

const frontFolder = path.join(`${__dirname}/../frontend`);

app.use(express.json());

app.get("/", (req, res, next) => {
    res.sendFile(`${frontFolder}/index.html`);
})

app.get("/image-list", (req, res) => {
    res.sendFile(`${frontFolder}/data.json`)
})

app.use('/public', express.static(`${frontFolder}/public`));

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});
