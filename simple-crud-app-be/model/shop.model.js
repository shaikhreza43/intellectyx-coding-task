const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema({
    username:{
        required:true,
        minlength:5,
        type:String
    },
    shopname:{
        required:true,
        minlength:5,
        type:String
    },
    status:{
        required:true,
        minlength:5,
        type:String
    },
    date:{
        required:true,
        minlength:5,
        type:Date
    }
},{timestamps:true});

const Shop = new mongoose.model('Shop',shopSchema);

module.exports = Shop;