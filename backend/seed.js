const mongoose = require('mongoose');
const Project = require('./models/Project'); 
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to DB...");
    
    await Project.deleteMany({}); // Purana data saaf karne ke liye

    const myProjects = [
      {
        title: "MeetingMind AI",
        description: "Neural Enterprise SaaS Platform using Groq API for multimedia analysis, reducing manual effort by 70%. [cite: 28, 29]",
        techStack: ["MERN", "Groq API", "jsPDF", "JWT"],
        liveLink: "https://meetingmind-ai-frontend.vercel.app",
        githubLink: "https://github.com/srishti885/MeetingMind-AI" 
      },
      {
        title: "CodeSentinel AI (AI Code Critic)",
        description: "Intelligent Code Auditor providing real-time health scores. Improves debugging speed by 30%. [cite: 33, 35, 36]",
        techStack: ["React", "Node.js", "Tailwind", "API Integration"],
        liveLink: "https://ai-code-critic.vercel.app",
        githubLink: "https://github.com/srishti885/AI-Code-Critic"
      },
      
        {
        title: "Neuro Vision Studio (Visionary Nexus)",
        description: "Neural Asset Management with Cloudinary optimization, reducing storage overhead by 40%. [cite: 37, 39]",
        techStack: ["MERN", "Cloudinary API", "RBAC", "Lazy Loading"],
        liveLink: "https://visionary-nexus.vercel.app",
        githubLink: "https://github.com/srishti885/Visionary-Nexus"
      }
    ];

    await Project.insertMany(myProjects);
    console.log("Srishti, aapke verified projects live links ke saath add ho gaye! ");
    process.exit();
  })
  .catch(err => {
    console.log("Seeding error:", err);
    process.exit(1);
  });