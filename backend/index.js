import express from "express";
import dotenv from "dotenv"
import colors from 'colors'
import servicesRoutes from "./routes/servicesRoutes.js"
import {db} from "./config/db.js"

// Carga variables de entorno
dotenv.config()

// Configura 
const app = express();

// Habilita el que yo le pueda mandar en el body un json con la info que va a guardar 
app.use(express.json())

db()

app.use('/api/services',servicesRoutes)

// Configura puerta
const PORT = process.env.PORT || 4000

// Iniciar la app
app.listen(PORT,()=>{{
    console.log(colors.white.bgGreen('Server corriendo en: ',PORT));
}})