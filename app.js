const express = require('express');
const app = express()

app.get("/", (req, res) => {
    res.send("<h2> Hello docker, knowing you docker is sweet oo. My name is Dilichi, I am a Devop engineer docker </h2>")
})
const port = process.env.Port || 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})