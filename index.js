const express = require('express');
const app = express();
const path = require('path');

// database
require('./src/database');
// app.set('port', process.env.PORT || 3000 );

// Aplicacion de React - CRUD
app.use(express.json());
app.use(express.static(path.join(__dirname,'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'build','index.html'));
})

// routes - api
app.use('/api',require('./src/routes/users'));


app.listen(4000, () => {
  console.log(`Server on listen on port`, 4000);
})