import mongoose from "mongoose";
import colors from "colors"

export const db = async () =>{
    try{
        const db = await mongoose.connect(process.env.MONGO_URI)

        console.log(colors.white.bgGreen(`Conexión exitosa a la base de datos: ${db.connection.host}:${db.connection.port}`));
    } catch(error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }

}