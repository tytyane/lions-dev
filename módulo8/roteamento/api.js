const express = require('express')
const app = express()
const port = 3000
const senha = 'pistache'

app.use((req, res, next) => {
    if(req.headers['authorization'] !== senha){
        res.status(403).send('Acesso negado. Token inválido')
        throw new Error('Usuário inseriu token errado')
    } else {
        next()
    }
})
app.get('/protected', (req, res) => {
    res.send('Acesso liberado! bem-vindo à área protegida!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Desculpe, algo deu errado!')
})
