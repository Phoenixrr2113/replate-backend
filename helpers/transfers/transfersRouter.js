const router = require('express').Router();

const Transfers = require('./transfersModel');

router.get('/', (req, res) => {
	Transfers.find()
		.then(transfer => {
			res.json({ transfer });
		})
		.catch(err => res.send(err));
});

module.exports = router;
