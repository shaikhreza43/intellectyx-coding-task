const router = require('express').Router();
const Shop = require('../model/shop.model');


router.route('/create-shop').post((req,res)=>{
    const username = req.body.username;
    const shopname = req.body.shopname;
    const status = req.body.status;
    const date = Date.now();

    const shop = new Shop({username,shopname,status,date});
    shop.save()
    .then(()=>{res.json("Shop Created Successsully")})
    .catch(err=>{console.log(err)});
});

router.route('/getAllShops').get((req,res)=>{
    
    Shop.find()
    .then((data)=>{res.json(data)})
    .catch(err=>{console.log(err)});
});

module.exports = router;