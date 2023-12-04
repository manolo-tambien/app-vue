import moongose, { mongo } from "mongoose"

const servicesSchema = moongose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: Number, 
        require: true,
        trim: true
    }
})

const Services = moongose.model('Services', servicesSchema)
export default Services
