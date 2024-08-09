const Bill = require('../models/bill');
const Item = require('../models/item');

exports.createBill = async (req, res) => {
  try {
    const { items } = req.body;
    let total = 0;

    for (const billItem of items) {
      const item = await Item.findById(billItem.item);
      if (item) {
        if (item.quantity < billItem.quantity) {
          return res.status(400).json({ error: `Not enough ${item.name} in stock` });
        }
        item.quantity -= billItem.quantity;
        await item.save();
        total += item.price * billItem.quantity;
      }
    }

    const newBill = new Bill({ items, total });
    await newBill.save();
    res.status(201).json(newBill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find().populate('items.item');
    res.status(200).json(bills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBillById = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id).populate('items.item');
    if (!bill) return res.status(404).json({ error: 'Bill not found' });
    res.status(200).json(bill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
