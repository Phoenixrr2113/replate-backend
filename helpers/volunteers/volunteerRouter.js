const router = require('express').Router();

const Volunteer = require('./volunteerModel');

router.get('/', (req, res) => {
	Volunteer.find()
		.then(volunteer => {
			res.json({ volunteer });
		})
		.catch(err => res.send(err));
});

module.exports = router;
