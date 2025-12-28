const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    // UPDATE: We define the index with collation for Case-Insensitive + Fast Search
    index: {
      collation: { locale: 'en', strength: 2 }
    }
  },
  // The 'companies' array allows tagging ["BNY Mellon", "Amazon"]
  companies: [{
    type: String,
    // UPDATE: Multikey index with collation for array searching
    index: {
      collation: { locale: 'en', strength: 2 }
    }
  }],
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium'
  },
  problemStatement: {
    type: String, // HTML string
    required: true
  },
  inputFormat: {
    type: String
  },
  outputFormat: {
    type: String
  },
  constraints: [{
    type: String
  }],
  examples: [{
    input: String,
    output: String,
    explanation: String
  }],
  topicTags: [String]
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);