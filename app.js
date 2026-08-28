const express = require("express")
const cors = require("cors")
const app = express()

const corsOptions = {
    origin: "*",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
}

app.use(cors(corsOptions))

const IotRouter = require('./routes/iot_routes.js')
app.use('/v1/senai/max',cors(corsOptions),IotRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`API DA LOCADORA FUNCIONANDO EM http://localhost:${PORT} E AGUARDANDO NOVAS REQUISIÇÕES...`);
}); 