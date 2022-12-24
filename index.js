const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
const productos = require('./controllers/productoController');

//create server
const app = express();
const PORT = process.env.PORT || 8080;

//DB conncetion
conectarDB();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/productos', require('./routes/producto'));

app.get('/', (req, res) =>{
    res.send(`Backend correctly connected`)
});

app.listen(PORT, () => {
    console.log(`Server is running in the Port: ${PORT}`);
})