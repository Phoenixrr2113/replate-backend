const router = require('express').Router();

const Business = require('./businessModel');
const restricted = require('../../middleware/restricted/restrictedMiddleware');
const checkType = require('../../middleware/userType/checkType');

router.get('/', restricted, (req, res) => {
	Business.find()
		.then(business => {
			res.json({ business, decodedToken: req.decodedJwt });
		})
		.catch(err => res.send(err));
});

module.exports = router;
