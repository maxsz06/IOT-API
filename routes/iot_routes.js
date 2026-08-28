const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bodyParserJSON = bodyParser.json()

router.post('/led', bodyParserJSON, async function (request, response) {
    let dados = request.body
    let contentType = request.headers['content-type']

    console.log('Dados recebidos:', dados)
    console.log('Content-Type:', contentType)

    response.status(200).json({
        status_code: 200,
        message: 'Recebido com sucesso',
        dados_recebidos: dados
    })
})

module.exports = router