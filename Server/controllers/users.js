const express = require('express');
const router = express.Router();
const user = require('../models/user');

// GET HTTP method to /users
router.get('/',(req,res) => {
    user.getAllUsers((err, users) => {
        if(err) {
            res.json({success:false, message: `Failed to load all users. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({ success: true, users: users }, null, 2));
            res.end();
        }
    });
});

// GET HTTP method to /users/:mail/:password
router.get('/:mail/:password',(req,res) => {
    user.getUserByMailAndPassword(req.params.mail, req.params.password,(err, user)=> {
        if(err) {
            res.json({success:false, message: `Failed to find user. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({ success: true, user: user }, null, 2));
            res.end();
        }
    });
});

// GET HTTP method to /users/:id
router.get('/:id',(req,res) => {
    user.getUserByID(req.params.id,(err, user)=> {
        if(err) {
            res.json({success:false, message: `Failed to find user by ID. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({ success: true, user: user }, null, 2));
            res.end();
        }
    });
});

//POST HTTP method to /users
router.post('/', (req,res,next) => {
    let newUser = {
        password: req.body.password,
        fullName: req.body.fullName,
        mail: req.body.mail,
        phone: req.body.phone,
        city: req.body.city,
        admin: req.body.admin
    };
    
    user.editUser(newUser,(err, newUser) => {
        if(err) {
            res.json({success: false, message: `Failed to create a new user. Error: ${err}. req: ${req}`});
        } else {
            res.json({success:true, message: `Added successfully: ${newUser}`});
        }
    });
});


module.exports = router;