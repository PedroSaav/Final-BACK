const Persona = require('../models/personaModel');
class personaControllers {

    async findAll(){
        try {
            return await Persona.find().lean();
        } catch (error) {
            throw error
        }
    }
    async create(persona){
        try {
            return await Persona.create(persona);
        } catch (error) {
            throw error
        }
    }
    async delete(id){
        try {
            return await Persona.findByIdAndDelete(id);
        } catch (error) {
            throw error
        }
    }
    async update(id){
        try {
            return await Persona.findByIdAndUpdate;
        } catch (error) {
            throw error
        }
    }
}


module.exports = new personaControllers;