const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Volunteer = require('../helpers/volunteers/volunteerModel');
const Business = require('../helpers/business/businessModel');
const Pantry = require('../helpers/pantry/pantryModel');

router.post('/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;

	Users.add(user)
		.then(saved => {
			res.status(201).json(saved);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = tokenService.generateToken(user);
				res.status(200).json({
					message: `Welcome ${user.username}!, have a token...`,
					token,
					roles: token.roles,
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = router;
