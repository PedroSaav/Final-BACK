require('dotenv').config();
const mongoose = require('mongoose');
const URL = process.env.MONGOATLAS;

const conexion = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () =>{
    console.log(`Conexión a la Database correcta - URL: ${URL}`);
});

mongoose.connection.on('error', () =>{
    console.log(`Conexión a la Database NO encontrada - URL: ${URL}`);
})

module.exports = conexion;