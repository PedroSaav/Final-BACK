const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const personaSchema = new Schema({
    nombre:{
        type: 'string',
        required: true
    },
    apellido: {
        type: 'string',
        required: true
    },
    telefono:{
        type: 'string',
        required: true
    },
    mensaje:{
        type: 'string',
        required: true
    },
    timestamp:{
        type: 'Date',
        default: new Date()
    }
})

const Persona = mongoose.model('persona', personaSchema)

module.exports = Persona;