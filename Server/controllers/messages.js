const express = require('express');
const router = express.Router();
const item = require('../models/item');
const user = require('../models/user');
const message = require('../models/message');

router.post('/', async (req, res, next) => {

    const destUser = await user.getUserByUsername(req.body.sourceUser);
    const sourceUser = await user.getUserByUsername(req.body.destUser);

    let newMessage = new message({
        sourceUser: req.body.sourceUser,
        destUser: req.body.destUser,
        title: req.body.title,
        content: req.body.content
    });

    newMessage.save(err => {
        if (err) {
            console.error(err);
            res.json({ success: false, message: `Create a new Message failed, Error: ${err}. req: ${req}` });
        }
        else {
            res.json({ success: true, message: `Message Added successfully`, message: newMessage });

            var index = -1;

            global.clients.find((client, i) => {
                if (client.id == req.body.destUser) {
                    index = i;
                    return true;
                }
            });

            if (index != -1) {
                global.io.sockets.connected[global.clients[index].socket].emit('newMessage', req.body.title);
            }
        }
    });
});

router.get('/byUser/:username', (req, res) => {

    user.getUserByUsername(req.params.username, (err, user) => {

        message.getMessagesByUsername(user)
            .then(messages => {
                res.write(JSON.stringify({ success: true, messages: messages }, null, 2));
                res.end();
            })
            .catch(err => {
                console.error(err);
                res.sendStatus(500);
            })
    });
});

router.get('/amount/:username', (req, res) => {

    user.getUserByUsername(req.params.username, (err, user) => {

        message.totalMessagesAmount(user)
            .then(amount => {
                res.json({ amount });
            })
            .catch(err => {
                console.error(err);
                res.json({ amount: 0 });
            })
    });
});

router.get('/all/all', (req, res) => {
    message.getAllMessages((err, allMessages) => {
        if (err) {
            res.json({ err });
        }
        else {
            res.json({ allMessages });
        }
    })
});


module.exports = router; 