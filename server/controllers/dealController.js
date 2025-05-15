const Deal = require("../models/Deals"); // Ensure correct model import

const getDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    if (deals.length === 0) {
      return res.status(200).json({ message: "No deals found", data: deals });
    }
    res.status(200).json(deals);
  } catch (error) {
    console.error("Error fetching deals:", error);
    res.status(500).json({ message: "Failed to fetch deals", error: error.message });
  }
};

const createDeal = async (req, res) => {
  console.log('Add deal running');
  console.log('file', req.file);

  if (!req.file) {
    return res.status(400).json({ message: 'Cover image is required.' });
  }

  try {
    const file = req.file.path;
    const { heading, overlaycolor, subtitle } = req.body;

    const newDeal = new Deal({
      heading,
      overlaycolor,
      subtitle,
      src: file // Use file path as src
    });

    await newDeal.save();
    res.status(201).json({ message: 'Deal added successfully.', data: newDeal });
  } catch (err) {
    res.status(500).json({ message: 'Server error: ' + err.message });
  }
};

module.exports = {
  getDeals,
  createDeal
};
