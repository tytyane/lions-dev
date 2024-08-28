const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sla', (req, res) => {
    res.send('pi oiii')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
