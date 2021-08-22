//Wiki route module
let express = require("express");
let router = express.Router();

//home page route
router.get('/', function(req, res) {
    res.send('Wiki home page');
})
//about this wiki
router.get('/about', function(req, res) {
    res.send('About this wiki');
})

module.exports = router;