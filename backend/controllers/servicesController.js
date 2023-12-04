import mongoose from "mongoose"
import Services from "../models/Service.js"
import { validateObjectId } from "../utils/index.js";

const createService = async (req, res) => {
    if (Object.values(req.body).includes('')) {
        const error = new Error('Todos los campos son obligatorios')
        return res.status(400).json({
            msg: error.message
        })
    }

    try {
        // Crea el nuevo modelo en base a mandarle el body de la peticion
        const service = new Services(req.body)

        await service.save()
        res.json({
            msg: "Se creó un nuevo servicio"
        })

    } catch (erro) {
        console.log(error)
    }
}

const getServices = (req, res) => {
    res.json('Todos los servicios')
}

const getServiceById = async (req, res) => {
    const { id } = req.params;

    if(validateObjectId(id, res)) return

    // Valida que exista 
    const service  = await Services.findById(id)
    if (!service) {
        const error = new Error('El Id no existe')
        return res.status(404).json({
            msg: error.message
        })
    }

    // Muestra el servicio
    res.json(service)
}

const updateService = async (req, res) =>{
    const {id} = req.params
    
    if(validateObjectId(id, res)) return
}

export {
    createService,
    getServices,
    getServiceById,
    updateService
}