const express = require ("express")
const cors = require ("cors")
const connection = require ("../database/config")

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.rutaEncuestaPath = "/api/encuesta"
        this.middlewares()
        this.routes()
        this.conectar()
    }

    async conectar (){
        await connection()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.rutaEncuestaPath, require ("../routes/encuesta"))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`ESCUCHANDO DESDE EL PUERTO: ${this.port}`)
        })
    }

}

module.exports = Server