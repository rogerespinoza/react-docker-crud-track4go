const {Router} = require('express');
const router = Router();
const TBL = require('../models/TBL_USUARIO');


router.post('/create', async (req, res) => {
  const {email , name , ci, phone} = req.body;
  const emailExist = await TBL.findOne({mail_usuario: email});
  if(emailExist){
    res.json({code:-1});
  }else{
    const tbl = new TBL({
      nombre_usuario: name,
      cedula_usuario: ci,
      telefono_usuario: phone,
      mail_usuario: email
    });
    await tbl.save();
    res.json({code:1});
  }
});

router.put('/update/:id', async (req, res) => {
  const {email , name , ci, phone} = req.body;
  await TBL.findByIdAndUpdate(req.params.id, {
    nombre_usuario: name,
    cedula_usuario: ci,
    telefono_usuario: phone,
    mail_usuario: email
  });
  res.json({code:1});
});

router.get('/getusers', async (req, res) => {
  const Users = await TBL.find();
  res.json(Users);
});

router.delete('/delete/:id', async (req, res) => {
  await TBL.findByIdAndDelete(req.params.id);
  res.json({"code":"1"});
})



module.exports = router;