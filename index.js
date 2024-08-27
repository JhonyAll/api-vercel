import express from 'express'
import { veiculos, montadoras } from 'dados.js'

const PORT = 8181
const app = express()

app.get('/veiculos', (req, res) => {
    res.json(veiculos)
})
app.get('/montadoras', (req, res) => {
    res.json(montadoras)
})

app.listen(PORT, () => {
    console.log('Listening in the localhost:' + PORT)
})