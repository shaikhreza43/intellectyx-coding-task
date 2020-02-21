const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Middlewares
app.use(express.json());

//Cors
app.use(cors({origin:'*'}));


//Routing
app.get('/',(req,res)=>{
    res.json({message:'Welcome to simple crud app'})
});

const shopRoute = require('./router/createShopRoute');
app.use('/shop',shopRoute);


//MongoDb Atlas Connection
mongoose.connect("mongodb+srv://ahmedreza:ahmed123@cluster0-9qjds.gcp.mongodb.net/intellectyx-test-db?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log('Successfully Connected to MongoDb Atlas')})
.catch(err=>console.log(err));

const port = process.env.PORT || 9000;

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
});
