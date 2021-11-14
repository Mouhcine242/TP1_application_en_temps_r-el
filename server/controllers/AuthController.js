const User = require('../models/user');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const register =  (req,res, next)=>{
    bcrypt.hash(req.body.password, 10 , (err, hashedPress)=>{
        if(err){
            res.json(err);
        }
        let user = new User({
            name: req.body.name,
            password: hashedPress ,
        })
        user.save().then(user =>{
            res.json({
                message:"User saved successfully"
            });
    
        }).catch(err =>{
            res.json({
                message:"Error saving user"
            })
        })

    })

   
} 

module.exports = {
    register
} 