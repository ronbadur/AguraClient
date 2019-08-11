const express = require('express');
const router = express.Router();
const item = require('../models/item');
const user = require('../models/user');
const category = require('../models/category');

router.get('/', (req, res) => {
    item.getAllItems((err, items) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all items. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, items: items }, null, 2));
            res.end();
        }
    });
});

router.get('/byUser/:username', (req, res) => {
   user.getUserByUsername(req.params.username,(err, user) =>
  {          

    item.getItemsByUser(user._id, (err, items) => {
        if (err) {
            res.json({ success: false, message: `Failed to load items by user ${req.params.username}. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, items: items }, null, 2));
            res.end();
        }
    });
})


});

router.post('/', (req, res, next) => {
    category.getCategoryByName(req.body.category).then(category => {
        let newItem = new item({
            name: req.body.name,
            description: req.body.description,
            kind: req.body.kind,
            category: category,
            // create_time: Date.now(),
            city: req.body.city,
            username: req.body.username
        });

        user.getUserByUsername(req.body.username).then(userFound =>{
            newItem.username = userFound._id;
            let username = req.body.username;
        
            newItem.save(err => {
                if (err) {
                    console.error(err);
                    res.json({ success: false, message: `Failed to create a new item. Error: ${err}. req: ${req}` });
                }
                else {
                    newItem.username = username;
                    user.addItemToUser(newItem, username, (err) => {
                        if (err) {
                            res.sendStatus(500);
                        }
                        else {
                            res.json({ success: true, message: "Added successfully.", item: newItem.populate("username") });
                        }
                    })
                }
            });

        })


    })
});

router.put('/:id', (req, res) => {
    item.findById({_id: req.params.id}, (err, result) => {
        if (err) {
            res.json({ success: false, message: `Failed to find item to update. Error: ${err}` });
        }
        else {
            result.name = req.body.name;
            result.description = req.body.description;
            result.color = req.body.color;
            result.create_time = req.body.create_time;
            result.city = req.body.city;
            result.save(err => {
                if (err) {
                    res.json({ success: false, message: `Failed to save updated item. Error: ${err}` });
                }
                else {
                    res.json({ success: true, message: "Item updated successfully." });
                }
            })
        }
    })
})

router.delete('/:id', (req, res) => {
    var id = req.params.id;
    item.deleteOne({ _id: id }, err => {
        if (err)
            res.json({ success: false, message: `Failed to delete item. Error: ${err}` });
        else {
            message.deleteMany({item: id}, err => { if(err) {console.log(err)} });
            res.sendStatus(200);
        }    
    });
});

module.exports = router;