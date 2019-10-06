const express = require("express")

const app = express()

const port = process.env.PORT

app.get('/', (req,res) => res.send("Dockarize Hello World Node Express JS Application"))

app.listen(port, ()=> console.log(`Listening on port ${port}`))