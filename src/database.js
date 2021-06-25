const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/test_Track4go', {
    /*useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,*/
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false

})
  .then(db => console.log('DB is connected', db.connection.host))
  .catch(err => console.error(err));