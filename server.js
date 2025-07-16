const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/resumeBuilder', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Resume Model
const resumeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    education: String,
    experience: String,
    skills: String
});
const Resume = mongoose.model('Resume', resumeSchema);

// Routes
app.post('/api/resume', async (req, res) => {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.json({ message: 'Resume Saved!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
