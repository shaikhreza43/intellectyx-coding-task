const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopSchema = new Schema({
    username:{
        required:true,
        type:String
    },
    shopname:{
        required:true,
        type:String
    },
    status:{
        required:true,
        type:String
    },
    date:{
        type:Date
    }
},{timestamps:true});

const Shop = new mongoose.model('Shop',shopSchema);

module.exports = Shop;