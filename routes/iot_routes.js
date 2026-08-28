const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bodyParserJSON = bodyParser.json()

// Para criar a cominicação entre a API e o Equipamento IoT, é necessario instalar
// a depedencia mqtt => npm install mqtt --save
const mqtt = require('mqtt') // Import da biblioteca apos a instalação

//Criando um cliente prara se comunicar com o sevidor MQTT 
//através do protocolo mqtt
const mqttClient = mqtt.connect('mqtt://broker.hivemq.com')


router.post('/led', bodyParserJSON, async function (request, response) {
    let dados = request.body

    if (dados.comando === 'ligar') {
        mqttClient.publish('senaijandira/sala/manha/25203648', 'ligar')
    } else if (dados.comando === 'desligar') {
        mqttClient.publish('senaijandira/sala/manha/25203648', 'desligar')
    } else {
        return response.status(400).json({
            status_code: 400,
            message: 'Comando Invalido',
            dados_recebidos: dados
        })
    }

    response.status(200).json({
        status_code: 200,
        message: 'Comando enviado com sucesso',
        dados_recebidos: dados
    })
})

module.exports = router