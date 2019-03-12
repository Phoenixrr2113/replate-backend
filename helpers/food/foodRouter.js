const router = require('express').Router();

const restricted = require('../../middleware/restricted/restrictedMiddleware');

const Food = require('./foodModel');

router.get('/', restricted, (req, res) => {
	Food.find()
		.then(food => {
			res.json({ food, decodedToken: req.decodedJwt });
		})
		.catch(err => res.send(err));
});

module.exports = router;
