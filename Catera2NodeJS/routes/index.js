var express = require('express');
var router = express.Router();

/* GET home page. */
/**
 * @author Miguel angel moreno moreno <miguelaangel325angel@gmail.com>
 * @since 1.0.0
 * prueba de codigo de promesas y callbaks, importacion y exportacion NodeJS
 */
router.get('/', function(req, res, next) {
  let promesa = resolveAfter2Seconds();
  promesa.then(casoExitoso).catch(casoError);

  res.render('index', { title: 'Eres genial' });
});

var casoExitoso = dato => {
  console.log(dato);
};

var casoError = dato => {
  console.error("123");
  console.error(dato);
}
var resolveAfter2Seconds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('EXITO');
    }, 2000);

    // try {
    //   //...
    //   //resolve('!informacion exitosa!')
    //   throw 'Algo malo paso bro';
    // } catch (error) {
    //   // throw error;
    //   reject('reject ->' + error)
    // }

  });
}

module.exports = router;
