const Item = require('../models/item');

exports.addItem = async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const newItem = new Item({ name, quantity, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
