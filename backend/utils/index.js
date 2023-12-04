import { mongoose } from "mongoose";

function validateObjectId(id, res){
    // Valida el object Id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('El Id no es válido')
        return res.status(400).json({
            msg: error.message
        })
    }
}

export{
    validateObjectId
}