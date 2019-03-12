const router = require('express').Router();
const restricted = require('../../middleware/restricted/restrictedMiddleware');

const Volunteer = require('./volunteerModel');

router.get('/', restricted, (req, res) => {
	Volunteer.find()
		.then(volunteer => {
			res.json({ volunteer, decodedToken: req.decodedJwt });
		})
		.catch(err => res.send(err));
});

module.exports = router;
