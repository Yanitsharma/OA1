const express = require('express');
const db = require('./db');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Models
const User = require('./Models/User');
const Question = require('./Models/Questions');

// ---------------------------------------------------------
// AUTH ROUTES
// ---------------------------------------------------------

app.post('/api/signup', async (req, res) => {
  try {
    const data = req.body;
    const newUser = new User(data);
    const response = await newUser.save();
    console.log('data saved');
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });

    if (!user || !(await user.isPasswordCorrect(password, user.password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    console.log('logged in');
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: 'internal server error' });
  }
});

// ---------------------------------------------------------
// QUESTION ROUTES
// ---------------------------------------------------------

// 1. GET ALL OR SEARCH (Updated with Atlas Search)
// Endpoint: GET /api/questions?search=amazon
app.get('/api/questions', async (req, res) => {
  try {
    const { search } = req.query;

    // A. IF SEARCH TERM EXISTS -> USE ATLAS SEARCH (LUCENE)
    if (search) {
      const results = await Question.aggregate([
        {
          $search: {
            index: "default", // Must match the name you set in Atlas
            text: {
              query: search,
              // Searches across all these relevant fields
              path: ["title", "companies", "topicTags", "problemStatement"],
              fuzzy: {
                maxEdits: 1 // Allow 1 character typo (e.g. "Amazn" -> "Amazon")
              }
            }
          }
        },
        {
          $limit: 20 // Limit results to prevent massive payloads
        },
        {
          $project: {
            title: 1,
            companies: 1,
            difficulty: 1,
            topicTags: 1,
            problemStatement: 1,
            score: { $meta: "searchScore" } // Include relevance score
          }
        }
      ]);
      
      return res.status(200).json(results);
    } 
    
    // B. NO SEARCH TERM -> RETURN ALL (Standard DB Fetch)
    else {
      // Limit to 50 to ensure the app doesn't crash if you have 1000s of qs
      const questions = await Question.find({}).limit(50);
      return res.status(200).json(questions);
    }

  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// 2. GET SINGLE QUESTION BY ID
app.get('/api/questions/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (question) {
      res.status(200).json(question);
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// 3. ADD NEW QUESTION
app.post('/api/questions/add', async (req, res) => {
  try {
    const {
      title,
      companies,
      difficulty,
      problemStatement,
      inputFormat,
      outputFormat,
      constraints,
      examples,
      topicTags
    } = req.body;

    const newQuestion = new Question({
      title,
      companies, // Expecting array ["BNY Mellon", "Amazon"]
      difficulty,
      problemStatement,
      inputFormat,
      outputFormat,
      constraints,
      examples,
      topicTags
    });

    const savedQuestion = await newQuestion.save();

    res.status(201).json({
      success: true,
      message: "Question added successfully!",
      data: savedQuestion
    });

  } catch (error) {
    console.error("Error adding question:", error);
    res.status(500).json({
      success: false,
      message: "Server Error while adding question",
      error: error.message
    });
  }
});

// 4. FIND BY COMPANY NAME (Exact Match)
// Endpoint: GET /api/questions/company/BNY%20Mellon
app.get('/api/questions/company/:companyName', async (req, res) => {
  try {
    const companyName = req.params.companyName;

    const questions = await Question.find({
      companies: companyName
    });

    if (questions.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No questions found for company: ${companyName}`
      });
    }

    res.status(200).json(questions);

  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({
      success: false,
      message: "Server Error while fetching data"
    });
  }
});

// ---------------------------------------------------------
// SERVER START
// ---------------------------------------------------------

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running locally on port ${port}`);
  });
}

// Export for Vercel
module.exports = app;