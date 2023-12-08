
import Services from "../models/Service.js"
import {
    validateObjectId,
    handleNotFoundError
} from "../utils/index.js";

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

const getServices = async (req, res) => {

    try {
        const service = await Services.find()
        res.json(service)
    } catch (error) {
        console.log(error)
    }
}

const getServiceById = async (req, res) => {
    const { id } = req.params;

    if (validateObjectId(id, res)) return

    // Valida que exista 
    const service = await Services.findById(id)
    if (!service) {
        return handleNotFoundError("El servicio no existe", res)
    }

    // Muestra el servicio
    res.json(service)
}

const updateService = async (req, res) => {
    const { id } = req.params

    if (validateObjectId(id, res)) return

    const service = await Services.findById(id)
    if (!service) {
        return handleNotFoundError("El servicio no existe", res)
    }
}

const deleteService = async (req, res) => {

    const { id } = req.params

    if (validateObjectId(id, res)) return

    // Valida que exista 
    const service = await Services.findById(id)
    if (!service) {
        return handleNotFoundError("El servicio no existe", res)
    }

    try {
        await service.deleteOne()
        res.json({
            msg: 'El servicio se eliminó correctamente'
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    createService,
    getServices,
    getServiceById,
    updateService,
    deleteService
}