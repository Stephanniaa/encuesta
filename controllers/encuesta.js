const {response} = require ("express")
const modelencuesta = require("../models/encuesta")

//GET
const getEncuesta = async (req, res = response) => {
    const consultaEncuesta = await modelencuesta.find()

    res.json({
        msg: "GET API ENCUESTA",
        consultaEncuesta
    })
}

//POST
const   postEncuesta = async (req, res) => {
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const agregarEncuesta = new modelencuesta ({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado})

    await agregarEncuesta.save()
    res.json({
        msg: "POST API ENCUESTA",
        agregarEncuesta
    })
}

//DELETE
const deleteEncuesta = async (req, res) => {
    const {documentoEncuestado} = req.query
    const eliminarEncuesta = await modelencuesta.findOneAndDelete ({documentoEncuestado:documentoEncuestado})
    res.json({
        msg: "DELETE API ENCUESTA",
        eliminarEncuesta
    })
}

//PUT
const putEncuesta = async (req, res) => {
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado, nombreEncuestaNuevo} = req.body
    const modificarEncuesta = await modelencuesta.findOneAndUpdate({nombreEncuesta:nombreEncuesta},{nombreEncuesta:nombreEncuestaNuevo, fecha:fecha, documentoEncuestado:documentoEncuestado, nombreEncuestado:nombreEncuestado, edad:edad, genero:genero, empleado:empleado})
    res.json({
        msg: "PUT API ENCUESTA",
        modificarEncuesta
    })
}

//PATCH 
const patchEncuesta = async(req,res) =>{
    const {nombreEncuesta, fecha} = req.body
    const patch = await modelencuesta.findOneAndUpdate({nombreEncuesta:nombreEncuesta},{fecha:fecha})
    res.json({
        msg: "PATCH API VENTAS",
        patch
    })
}

module.exports = {getEncuesta, postEncuesta, deleteEncuesta, putEncuesta, patchEncuesta}