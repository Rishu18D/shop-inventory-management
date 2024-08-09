const express = require('express');
const router = express.Router();
const { addItem, getItems } = require('../controllers/inventoryController');

router.post('/inventory', addItem);
router.get('/inventory', getItems);

module.exports = router;
