const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const nodemailer = require('nodemailer');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connection Successful"))
  .catch(err => console.log("Database Connection Error:", err));

// Project Schema (Directly in server.js to avoid path errors)
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techStack: [String],
    liveLink: String,
    githubLink: String
});
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

// Message Schema for Contact Form
const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

// --- ROUTES ---

// 1. Home Route
app.get('/', (req, res) => {
    res.json({ status: "ONLINE", message: "Portfolio Backend is Running" });
});

// 2. Get All Projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. Contact Form Submission (Nodemailer included)
app.post('/api/contact/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Save to Database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // Send Email Notification
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio: New Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });

        res.status(201).json({ status: "SUCCESS", message: "Message sent and saved" });
    } catch (err) {
        res.status(500).json({ status: "ERROR", message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is active on Port ${PORT}`);
});