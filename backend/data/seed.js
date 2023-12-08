import dotenv from 'dotenv'
import colors from 'colors'
import { db } from '../config/db.js'
import Services from '../models/Service.js'
import {services} from "./beautyServices.js"

dotenv.config()
await db()

async function seedBD() {
    try {
        await Services.insertMany(services)
        console.log(colors.green.bold('Se agregaron correctamente'));
        process.exit()
    } catch (error) {
        console.log(error);
        process.exit(1) // Finaliza pero hubo un error 
    }
}

async function clearBD() {
    try {
        await Services.deleteMany()
        console.log(colors.red.bold('Se eliminaron correctamente'));
        process.exit()
    } catch (error) {
        console.log(error);
        process.exit(1) // Finaliza pero hubo un error 
    }
}

if (process.argv[2] === '--import') {
    seedBD()
}
else {
    clearBD()
}
