const Content = require('../models/Content');

// GET all content with filters
const getContent = async (req, res) => {
  try {
    const filters = req.query; // branch, semester, subject, type, etc.
    const content = await Content.find(filters);
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new content
const addContent = async (req, res) => {
  try {
    const content = new Content(req.body);
    await content.save();
    res.status(201).json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getContent, addContent };
