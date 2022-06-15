const express = require('express');
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose');
require('dotenv/config');


mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    dbName:'eshop-database'
})
    .then(()=> {
        console.log('Database Connection is ready')
    })
    .catch(e=> {
        console.log(e)
    })

app.use(morgan('tiny'));



app.listen(3000, ()=> {
    console.log('server is running on port ' + 3000)
})
