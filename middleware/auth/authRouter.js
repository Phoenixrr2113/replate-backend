const router = require('express').Router();
const bcrypt = require('bcryptjs');
const tokenService = require('../tokenService/tokenService');

const Volunteer = require('../helpers/volunteers/volunteerModel');
const Business = require('../helpers/business/businessModel');
const Foodbank = require('../helpers/foodbank/foodbankModel');

router.post('/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;

	switch (user.usertype) {
		case 'volunteer':
			Volunteer.add(user)
				.then(newVolunteer => {
					res.status(201).json(newVolunteer);
				})
				.catch(error => {
					res.status(500).json(error);
				});

		case 'business':
			Business.add(user)
				.then(newBusiness => {
					res.status(201).json(newBusiness);
				})
				.catch(error => {
					res.status(500).json(error);
				});

		case 'foodbank':
			Foodbank.add(user)
				.then(newFoodbank => {
					res.status(201).json(newFoodbank);
				})
				.catch(error => {
					res.status(500).json(error);
				});
		default:
			return;
	}
});

router.post('/login', (req, res) => {
	let user = req.body;

	switch (user.usertype) {
		case 'volunteer':
			Volunteer.findBy(user.name)
				.first()
				.then(existingUser => {
					if (
						existingUser &&
						bcrypt.compareSync(user.password, existingUser.password)
					) {
						const token = tokenService.generateToken(existingUser);

						res.status(200).json({
							message: `Welcome ${user.name}!`,
							token,
						});
					} else {
						res.status(401).json({ message: 'Invalid Credentials' });
					}
				})
				.catch(error => {
					res.status(500).json(error);
				});

		case 'business':
			Business.findBy(user.businessName)
				.first()
				.then(existingBusiness => {
					if (
						existingBusiness &&
						bcrypt.compareSync(user.password, existingBusiness.password)
					) {
						const token = tokenService.generateToken(existingBusiness);

						res.status(200).json({
							message: `Welcome ${existingBusiness.businessName}!`,
							token,
						});
					} else {
						res.status(401).json({ message: 'Invalid Credentials' });
					}
				})
				.catch(error => {
					res.status(500).json(error);
				});

		case 'foodbank':
			Foodbank.findBy(user.businessName)
				.first()
				.then(existingFoodbank => {
					if (
						existingFoodbank &&
						bcrypt.compareSync(user.password, existingFoodbank.password)
					) {
						const token = tokenService.generateToken(existingFoodbank);

						res.status(200).json({
							message: `Welcome ${existingFoodbank.businessName}!`,
							token,
						});
					} else {
						res.status(401).json({ message: 'Invalid Credentials' });
					}
				})
				.catch(error => {
					res.status(500).json(error);
				});
		default:
			return;
	}
});

module.exports = router;
