const express = require('express');
const { getDeals, createDeal } = require('../controllers/dealController'); // Ensure correct path
const { uploadSingle } = require('../middleware/multer');



const router = express.Router();

router.get('/deals', getDeals);
router.post('/deals', uploadSingle,  createDeal); // Ensure middleware is applied if needed

module.exports = router;
