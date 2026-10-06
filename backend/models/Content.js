const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  branch: String,
  semester: Number,
  subject: String,
  unit: Number,
  type: String, // "notes", "pyqs", "important", "solutions", "mcqs"
  title: String,
  fileURL: String,
  mcqs: [
    {
      question: String,
      options: [String],
      correctAnswer: String
    }
  ]
});

module.exports = mongoose.model("Content", contentSchema);
