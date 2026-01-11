const Message = require('../models/Message');
const nodemailer = require('nodemailer');

const sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Database mein entry (Ye priority hai)
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    // 2. Transporter Setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // 3. Email to YOU (Notification)
    const adminMail = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Alert: ${subject || 'New Message'}`,
      html: `
        <div style="font-family: sans-serif; border: 1px solid #00c4cc; padding: 20px; border-radius: 10px;">
          <h2 style="color: #00c4cc;">New Inquiry from Portfolio</h2>
          <p><strong>Sender:</strong> ${name} (${email})</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #00c4cc;">
            ${message}
          </blockquote>
        </div>
      `
    };

    // 4. Email to USER (Auto-Thank You)
    const userMail = {
      from: `"Srishti Goenka" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for reaching out!",
      text: `Hi ${name}, thank you for contacting me. I have received your message and will get back to you soon!`
    };

    // Emails bhejte hain (Wait for both)
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail)
    ]);

    res.status(201).json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { sendContactMessage };