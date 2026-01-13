const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path'); // Add kiya file handling ke liye

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// --- YE LINE ADD KI HAI TAAKI RESUME DOWNLOAD HO SAKE ---
// Isse aapka frontend 'Resume(11).pdf' ko access kar payega
app.use(express.static('public')); 

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connection Successful"))
  .catch(err => console.log("Database Connection Error:", err));

// --- SCHEMAS ---
const messageSchema = new mongoose.Schema({
    name: String, email: String, message: String, date: { type: Date, default: Date.now }
});
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

const resumeRequestSchema = new mongoose.Schema({
    requesterName: String, requesterEmail: String, requestDate: { type: Date, default: Date.now }
});
const ResumeRequest = mongoose.models.ResumeRequest || mongoose.model('ResumeRequest', resumeRequestSchema);

// --- ROUTES ---

// 1. Home Route
app.get('/', (req, res) => {
    res.json({ status: "ONLINE", message: "Portfolio Backend is Running" });
});

// 2. Contact Form Submission
app.post('/api/contact/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
            tls: { rejectUnauthorized: false } 
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `MESSAGE_ALERT: ${name}`,
            text: `New Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        });

        res.status(201).json({ status: "SUCCESS", message: "Message sent and saved" });
    } catch (err) {
        console.error("Contact Error:", err.message);
        res.status(500).json({ status: "ERROR", message: err.message });
    }
});

// 3. Resume Request Handshake (Phase 1)
app.post('/api/resume-request', async (req, res) => {
    try {
        const { requesterName, requesterEmail } = req.body;
        const newRequest = new ResumeRequest({ requesterName, requesterEmail });
        await newRequest.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
            tls: { rejectUnauthorized: false } 
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: requesterEmail,
            subject: `SECURITY_ALERT: RESUME_ACCESS_REQUESTED`,
            text: `Alert: Resume request detected.\n\nDetails:\nName: ${requesterName}\nEmail: ${requesterEmail}\nTime: ${new Date().toISOString()}`
        });

        res.status(200).json({ success: true, message: "Handshake Successful" });
    } catch (err) {
        console.error("Resume Request Error:", err.message);
        res.status(500).json({ success: false, message: err.message });
    }
});

// 4. Access Code Verification (Phase 2)
app.post('/api/resume/verify', (req, res) => {
    const { code } = req.body;
    const MASTER_KEY = "SRISHTI2024"; 

    if (code === MASTER_KEY) {
        res.status(200).json({ success: true, message: "ACCESS_GRANTED" });
    } else {
        res.status(401).json({ success: false, message: "INVALID_KEY" });
    }
});

// --- UPDATED: ADMIN DATA ROUTES ---

// 5. Get All Data for Admin Dashboard
app.get('/api/admin/all-data', async (req, res) => {
    try {
        const messages = await Message.find().sort({ date: -1 });
        const requests = await ResumeRequest.find().sort({ requestDate: -1 });
        res.status(200).json({ messages, requests });
    } catch (err) {
        res.status(500).json({ error: "ADMIN_FETCH_FAILED" });
    }
});

// 6. Delete a Message
app.delete('/api/admin/message/:id', async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "DELETED_SUCCESSFULLY" });
    } catch (err) {
        res.status(500).json({ error: "DELETE_OPERATION_FAILED" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is active on Port ${PORT}`);
});