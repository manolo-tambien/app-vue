import express from 'express'
import {
    createService,
    getServices,
    getServiceById,
    updateService
} from "../controllers/servicesController.js"

const router = express.Router()

// Ruta para crear un nuevo servicio
router.post('/', createService)

// Definicion de ruta
router.get('/', getServices)

// Se define ruta para filtrar por Id de servicio
router.get('/:id', getServiceById)

// Actualiza el valor de un servicio que ya existe
router.put('/:id',updateService)

export default router