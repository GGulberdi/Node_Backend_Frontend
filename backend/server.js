const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = require('./app/config/routes/db.routes')
require('./app/config/db.config');

// let corsOptions = {
//     origin: 'http://127.0.0.1:5500',   //This is for frontend
//     optionsSuccessStatus: 200 // For legacy browser support
//   };
  
  const corsOptions = {
    origin: process.env.ORIGIN || 'http://localhost:3000',
  };
  
  app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/posts", require("./routes/tasks.routes"));/////////////////////////



  



 app.use('/api/users', router)
app.get('/', (req,res)=>{
    res.send('Server is running')
});



app.listen('3005', ()=>{console.log('Server is running on port 3005')});
