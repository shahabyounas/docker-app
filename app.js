const express = require("express")

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req,res) => res.send("Dockarize Basic Node Express JS Application"))

app.get("/docker", (req, res) => { res.send("hello from docker") });

app.get('/nodemon', (req, res) => res.send('hello from nodemon'))

app.listen(port, ()=> console.log(`Listening on port ${port}`))