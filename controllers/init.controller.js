'use strict';
//Load files library
var fs = require('fs');
var path = require('path');

const axios = require('axios');//Libreria para manejar servicios rest complejos
const http  = require('https');//Librerias para manejar ser rest
const uniqid = require('uniqid');//Genera ids unicos

//Esta var se exporta como un modulo para las rutas
var controller = {

  validarMail: async function(req,res){

    var mail = req.body;
    console.log(mail);

    return res.status(200).send({
      status : 'success',  
      message: "El mail es valido "
    });

  },
  validarProducto: async function(req,res){

    var producto = req.body;
    console.log(producto);

    setTimeout(() => {       
        return res.status(200).send({
          status : 'success',  
          url: "https://articulo.mercadolibre.com.ar"
        });
    }, 5000);


  }
    

};

module.exports = controller;

