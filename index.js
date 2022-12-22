const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const PORT = process.env.PORT;
require('./database/conexion');
const multer = require('multer');

const app = express();
const personaController = require('./controllers/personacontroller');


const storage = multer.diskStorage({
    destination: function (req, file, callback){
        console.log(file);
        callback(null, 'uploads')
    },
    filename: function (req, file, callback){
        callback(null, `${file.originalname}`)
    }
});

const uploads = multer({ storage: storage })


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(morgan('common'));


app.get('/datos', async (req, res) =>{
    res.json({
        datos: await personaController.findAll()
    })
});


app.post('/crear', async (req, res) =>{
    const { nombre, apellido, dni } = req.body;
    console.log(`${nombre} ${apellido} ${dni}`);

    await personaController.create(req.body)

    res.send('Usuario creado')
});


app.delete('/:id', (req, res) =>{
    res.send('Usuario eliminado')
});

app.put('/:id', (req, res) =>{
    res.send('Usuario actualizado')
});


app.post('/subir', uploads.single('miArchivo'), (req, res, next) =>{
    const file = req.file;
    res.send(`Archivo <b>${file.originalname}</b> subido correctamente`)

})

app.listen(PORT, () =>{
    console.log('Back Conectado');
})