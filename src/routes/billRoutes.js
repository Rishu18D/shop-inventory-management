const express = require('express');
const router = express.Router();
const { createBill, getBills, getBillById } = require('../controllers/billController');

router.post('/bills', createBill);
router.get('/bills', getBills);
router.get('/bills/:id', getBillById);

module.exports = router;
