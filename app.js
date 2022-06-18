require('dotenv/config');
const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*',  cors());

const api = process.env.API_URL
const productsRouter = require('./routes/product');
const categoryRouter = require('./routes/categories');


//routes
app.use(`${api}/products`,productsRouter);
app.use(`${api}/category`,categoryRouter);




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






app.listen(3000, ()=> {
    console.log('server is running on port ' + 3000)
})
