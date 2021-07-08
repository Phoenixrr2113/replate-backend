const router = require('express').Router();

const restricted = require('../../middleware/restricted/restrictedMiddleware');

const Foodbank = require('../foodbank/foodbankModel');

router.get('/', restricted, (req, res) => {
	Foodbank.find()
		.then(foodbank => {
			res.json({ foodbank, decodedToken: req.decodedJwt });
		})
		.catch(err => res.send(err));
});

module.exports = router;
