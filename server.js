const express = require('express');
const cors = require('cors');
const { body, validationResult} = require('express-validator');

const app = express();

require('./src/Routes/index')(app);

app.use(cors());
app.use(express.json());
app.listen(3333, ()=> {
    console.log(`Voa alto, DevsAcreditar! 🚀`);
} );

// validador de um cadastro de um carro

app.post('/cars', [
  
    // Marca deve ser no mínimo de 2 chars.
    body('marca').isLength({ min: 2 }).withMessage("Precisa ser um nome da marca válido!"),
  
    // Modelo deve ser no mínimo de 2 chars.
     body('modelo').isLength({ min: 2 }).withMessage("O modelo precisa ter 2 caracters ou mais"),
], (req, res) => {
  // Encontra os erros de validações na request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  res.json({ msg: "Sucesso garotinho"});

  User.create({
    marca: req.body.marca,
    modelo: req.body.modelo
  }).then(user => res.json(user));
});
