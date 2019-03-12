const router = require('express').Router();

const Pantry = require('../pantry/pantryModel');

router.get('/', (req, res) => {
	Pantry.find()
		.then(pantry => {
			res.json({ pantry });
		})
		.catch(err => res.send(err));
});

module.exports = router;
