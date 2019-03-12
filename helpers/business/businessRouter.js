const router = require('express').Router();

const Business = require('../business/businbessModel');

// router.get('/', restricted, checkRole('Student'), (req, res) => {
router.get('/', (req, res) => {
	Business.find()
		.then(business => {
			res.json({ business });
		})
		.catch(err => res.send(err));
});

// async/await example
// router.get('/Business', restricted, async (req, res) => {
//   try {
//     const Business = await Business.find();

//     res.json(Business);
//   } catch (error) {
//     res.send(error);
//   }
// });

module.exports = router;
