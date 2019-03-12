const router = require('express').Router();

const Food = require('./foodModel');

router.get('/', (req, res) => {
	Food.find()
		.then(food => {
			res.json({ food });
		})
		.catch(err => res.send(err));
});

module.exports = router;
