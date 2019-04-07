const router = require('express').Router();

router.get('/', function(req, res){
	res.send("Hola mundo");
});

module.exports = router;