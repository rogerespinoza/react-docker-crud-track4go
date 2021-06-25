const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  nombre_usuario: String,
  cedula_usuario: String,
  telefono_usuario: String,
  mail_usuario: String
});

// el id se generia por mongoose


module.exports = model('TBL_USUARIO', userSchema);