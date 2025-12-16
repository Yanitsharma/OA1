const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    index: true ,// Adds an index for faster search by title
    unique: true
  },
  // The 'companies' array is the most important part for your project.
  // It allows one question to be tagged for ["BNY Mellon", "Amazon", "Goldman Sachs"]
  companies: [{
    type: String,
    index: true // Adds an index for fast searching by company
  }],
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  // We store the main description as HTML string to preserve formatting (<code>, <br>)
  problemStatement: {
    type: String,
    required: true
  },
  inputFormat: {
    type: String
  },
  outputFormat: {
    type: String
  },
  constraints: [{
    type: String // Store each constraint as a string in an array for better UI rendering
  }],
  examples: [{
    input: String,
    output: String,
    explanation: String
  }],
  // Optional: Link to the original source or strict tags
  topicTags: [String] // e.g., ["Arrays", "DP", "Greedy"]
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);