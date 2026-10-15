// app.js

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const myConnection = require('express-myconnection');

const app = express();

// 1. IMPORTAR RUTAS
const empresaRoutes = require('./Rutas/empresa');
const clientesRoutes = require('./Rutas/clientes');

const config = {
  application: {
    cors: {
      server: [
        {
          origin: "localhost:3000",
          credentials: true
        }
      ]
    }
  }
};

app.use(cors(config.application.cors.server));

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'ventas'
}, 'single'));

app.use(express.urlencoded({ extended: false }));

// 2. PARSER DE JSON (Necesario para recibir los datos de req.body)
app.use(express.json()); 

// 3. REGISTRAR LAS RUTAS
app.use('/empresa', empresaRoutes);
app.use('/clientes', clientesRoutes);

app.listen(app.get('port'), () => {
    console.log(`PUERTO ${app.get('port')}`);
});