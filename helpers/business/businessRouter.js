const router = require('express').Router();

const Business = require('./businessModel');

router.get('/', (req, res) => {
	Business.find()
		.then(business => {
			res.json({ business });
		})
		.catch(err => res.send(err));
});

module.exports = router;
