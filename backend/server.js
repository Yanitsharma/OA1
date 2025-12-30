const express=require('express');
const db=require('./db');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();
const User =require('./Models/User');
const Question = require('./Models/Questions');
app.post('/api/signup',async (req,res)=>{
  try{
    const data=req.body;
    const newUser=new User(data);
    const response=await newUser.save();
    console.log('data saved');
     res.status(200).json(response);
  }
  catch(error){
     console.log(error);
     res.status(500).json({error:'internal server error'});
  }
})


app.post('/api/login',async (req,res)=>{
  try{
    const {emailId, password} = req.body;
    const user = await User.findOne({emailId: emailId});


    if( !user || !(await user.isPasswordCorrect(password, user.password))){
        return res.status(401).json({error: 'Invalid username or password'});
    }
    console.log('logged in');
    res.status(200).json(user);
  }
  catch(error){
    console.log(err);
    res.status(500).json({err:'internal server error'});
  }
})

// In your controller file (e.g., questionsController.js)


// A. POST METHOD: To add a new question to the database
// Endpoint: POST http://localhost:4000/api/questions/add
app.get('/api/questions', async (req, res) => {
    try {
        const { search } = req.query; 

        let query = {};
        
        // Define the collation settings to match your Model
        const collationSettings = { locale: 'en', strength: 2 };

        if (search) {
            // OPTIMIZATION:
            // 1. We use '^' to anchor the search to the start (Prefix Search).
            // 2. We REMOVE the 'i' flag. The Collation handles case-insensitivity.
            // 3. This allows MongoDB to use the B-Tree Index for O(log n) lookup.
            const searchRegex = new RegExp(`^${search}`); 

            query = {
                $or: [
                    { title: { $regex: searchRegex } },
                    { companies: { $in: [searchRegex] } } 
                ]
            };
        }

        // We chain .collation() so MongoDB knows to use the case-insensitive index
        const questions = await Question.find(query)
                                        .collation(collationSettings);
        
        res.status(200).json(questions);

    } catch (error) {
        console.error("Error fetching questions:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});
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

    // Create new question instance
    const newQuestion = new Question({
      title,
      companies, // Expecting array like ["BNY Mellon", "Amazon"]
      difficulty,
      problemStatement,
      inputFormat,
      outputFormat,
      constraints,
      examples,
      topicTags
    });

    // Save to database
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

// B. GET METHOD: To find questions by Company Name
// Endpoint: GET http://localhost:5000/api/questions/company/BNY%20Mellon
app.get('/api/questions/company/:companyName', async (req, res) => {
  try {
    const companyName = req.params.companyName;

    // "THE MAGIC QUERY"
    // MongoDB treats { companies: "Value" } as "Find any doc where companies array CONTAINS Value"
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

// C. GET ALL (Optional: To check DB health)
app.get('/api/questions', async (req, res) => {
    const questions = await Question.find({});
    res.json(questions);
});
const port=process.env.PORT;
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server is running locally on port ${port}`);
    });
}

// Export the app so Vercel can run it as a serverless function
module.exports = app;