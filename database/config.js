const mongoose = require ("mongoose")
const dbconnection = async () => {
    try {
        mongoose.connect(process.env.MONGODB_CNN)
        console.log("CONECTADO A LA BASE DE DATOS")
    } catch (error) {
        console.log("ERROR DE CONEXION")
    }
}

module.exports = dbconnection