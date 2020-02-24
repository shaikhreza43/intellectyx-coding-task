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


router.route('/edit-shop/:id').post((req,res)=>{
    Shop.findById(req.params.id).then(
        function(shop){
            shop.username = req.body.username;
            shop.shopname = req.body.shopname;
            shop.status = req.body.status;

            shop.save().then(
                function(){
                    res.json('Shop Data Updated');
                }
            ).catch(function(err){
                res.status(400).json("Error"+err);
            })
        }
    ).catch(
        function(err){
            alert('Shop Not Found');
            res.status(400).json("Error"+err);
        }
    )

});


router.route('/:id').delete((req,resp)=>{
    Shop.findByIdAndDelete(req.params.id)
    .then(function(){
        resp.json('Shop Data Deleted!');
    })
    .catch(function(err){
        resp.status(400).json('Error '+err);
    });
});

router.route('/getAllShops').get((req,res)=>{
    
    Shop.find()
    .then((data)=>{res.json(data)})
    .catch(err=>{console.log(err)});
});

module.exports = router;