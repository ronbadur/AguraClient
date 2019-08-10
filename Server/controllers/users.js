const express = require('express');
const router = express.Router();


// GET HTTP method to /users
router.get('/',(req,res) => {
    res.send([{
        "name": "Bar"
    },
{
    "name": "Ron"
}]);
});

// GET HTTP method to /users/:mail/:password
router.get('/:mail/:password',(req,res) => {
    res.send([{
        "name": "Bar"
    }]);
});

module.exports = router;