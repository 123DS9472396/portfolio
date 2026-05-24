export const siteConfig = {
  name: "Dipesh Sharma",
  title: "Dipesh Sharma | Full-Stack Developer & ML Engineer",
  description: "Computer Engineering Undergrad '26 | Full-Stack Developer | ML & Data Science. Open to full-time SDE roles.",
  email: "ds9472396ss@gmail.com",
  phone: "+91-9702575008",
  site: "https://dipeshsharma.me",
  social: {
    github: "https://github.com/123DS9472396",
    linkedin: "https://www.linkedin.com/in/contact-dipesh-sharma/",
    leetcode: "https://leetcode.com/u/0Gnp35bsad/",
  },
  resume: "https://drive.google.com/file/d/1Y0B50DqEMpFCc48J2zsHoBfI8bnoYbF_/view?usp=drivesdk",
};

export const aboutConfig = {
  description: [
    "I am a Computer Engineering undergraduate (B.E., CGPA: 8.00) from A.P. Shah Institute of Technology, Thane, graduating in 2026. I build production-grade full-stack web applications and ML-powered systems.",
    "I have completed 3 internships — as an SDE Intern at ITJOBXS (current), SDE Intern at Mernix Consulting, and Data Science Intern at MedTourEasy — gaining hands-on experience with MERN stack, PHP, MySQL, ML recommendation systems, and deployment pipelines.",
    "I am actively seeking full-time Software Developer or ML Engineer roles where I can build impactful products at scale. Available immediately for on-site, hybrid, or remote positions.",
  ],
  facts: [
    { label: "Experience", value: "3 Internships" },
    { label: "CGPA", value: "8.00" },
    { label: "Location", value: "Thane, India" },
    { label: "Status", value: "Open to Work" },
  ],
};

export const experienceConfig = [
  { role: "SDE Intern", company: "ITJOBXS", logo: "", subtitle: "Jobs & Education Platform", type: "Remote", period: "Apr 2025 - Present", location: "Mumbai", description: "Diagnosed a critical bot-spam vulnerability; implemented a PHP hashmap of 100+ validated email domains and Google reCAPTCHA, cutting spam registrations by ~60%. Built end-to-end MERN stack apps for an external client — E-Commerce platform and Student Management System with JWT auth and role-based access control.", tech: ["PHP", "MERN Stack", "JWT", "reCAPTCHA", "MySQL", "React"] },
  { role: "SDE Intern", company: "Mernix Consulting", logo: "", subtitle: "Freelance Project", type: "Remote", period: "Jan 2025 - Feb 2025", location: "Thane", description: "Built a full-stack Newsletter Subscription App with Nodemailer automated confirmations and debounced API calls for real-time subscription status checks. Optimized backend with a MySQL connection pool; deployed on Firebase (frontend) and Render (backend) with environment-based credential management.", tech: ["Node.js", "MySQL", "Nodemailer", "Firebase", "Render", "Express.js"] },
  { role: "Data Science Intern", company: "MedTourEasy", logo: "", subtitle: "Healthcare & Tourism Platform", type: "Hybrid", period: "Sep 2024 - Oct 2024", location: "Gurugram", description: "Built a content-based ML recommendation system using word embeddings and t-SNE dimensionality reduction on 200+ cosmetic products, improving match accuracy by 75%. Designed interactive dashboards mapping product similarities and safety profiles, boosting stakeholder decision-making efficiency by 30%.", tech: ["Python", "Scikit-Learn", "t-SNE", "Pandas", "Matplotlib", "NLP"] },
];

export const educationConfig = {
  degree: "B.E. Computer Engineering",
  institution: "A.P. Shah Institute of Technology (APSIT)",
  university: "Mumbai University",
  location: "Thane, Mumbai",
  period: "2022 - 2026",
  cgpa: "8.00",
  highlights: [
    "Core Member - AI/ML Club, APSIT",
    "Member - Data Science Club, APSIT",
    "Team Leader at HackScript 6.0 (Top 5 among 55+ teams)",
    "Relevant coursework: DSA, DBMS, ML, Computer Networks, OS",
  ],
};

export const certificationsConfig = [
  { title: "Google Data Analytics Professional", issuer: "Google", date: "Sep 2024" },
  { title: "Google AI-ML Virtual Internship", issuer: "EduSkills", date: "Jul 2024" },
  { title: "AWS Academy Data Engineering", issuer: "Amazon Web Services", date: "Oct 2023" },
  { title: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", date: "Oct 2023" },
  { title: "AWS Academy Cloud Architecting", issuer: "Amazon Web Services", date: "2024" },
  { title: "Cisco Networking Basics", issuer: "Cisco", date: "2023" },
  { title: "Getting Started with Deep Learning", issuer: "NVIDIA", date: "2024" },
];

export const leadershipConfig = [
  { role: "Team Leader", org: "HackScript 6.0 Hackathon", description: "Led Team CodeBreakers to Top 5 finish among 55+ teams. Coordinated task distribution, managed deadlines, and ensured smooth integration of frontend, backend, and AI modules." },
  { role: "Core Member", org: "AI/ML Club, APSIT", link: "https://www.linkedin.com/company/aiml-club-apsit/", description: "Actively contributed to sessions, mentored juniors in project building, and facilitated coding discussions on DSA and machine learning." },
  { role: "Member", org: "Data Science Club, APSIT", link: "https://www.linkedin.com/in/apsits-dsa-club", description: "Participated in data science workshops, contributed to peer learning sessions on analytics and ML techniques." },
];

export const skillsConfig = {
  languages: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "SQL", level: 82 },
  ],
  frontend: [
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 82 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Bootstrap", level: 85 },
    { name: "GSAP", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "Flask", level: 75 },
    { name: "MySQL", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 78 },
    { name: "Supabase", level: 82 },
    { name: "Firebase", level: 75 },
  ],
  mlds: [
    { name: "Scikit-Learn", level: 82 },
    { name: "TensorFlow", level: 72 },
    { name: "NumPy/Pandas", level: 88 },
    { name: "OpenCV", level: 78 },
    { name: "YOLOv8", level: 80 },
  ],
  tools: [
    { name: "Git/GitHub", level: 92 },
    { name: "Postman", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Vercel/Render", level: 82 },
    { name: "AWS", level: 72 },
  ],
};
