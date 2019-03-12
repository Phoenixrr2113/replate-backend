const router = require('express').Router();

const Foodbank = require('../foodbank/foodbankModel');

router.get('/', (req, res) => {
	Foodbank.find()
		.then(foodbank => {
			res.json({ foodbank });
		})
		.catch(err => res.send(err));
});

module.exports = router;
