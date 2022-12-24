const mongoose = require('mongoose');
require('dotenv').config({ path: '.env'});

const conectarDB = async () => {

        try {
            
            await mongoose.connect(process.env.MONGOATLAS, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            console.log('DB Conectada');

        } catch (error) {
            console.log(error);
        }
}

module.exports = conectarDB;