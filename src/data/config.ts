const config = {
  title: "Dipesh Sharma | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Dipesh Sharma, a Full-Stack Developer & ML/Data Science enthusiast specializing in interactive web experiences, AI integrations, and innovative projects.",
    short:
      "Portfolio of Dipesh Sharma, Full-Stack Developer & Data Science enthusiast building interactive web apps and AI tools.",
  },
  keywords: [
    "Dipesh Sharma",
    "portfolio",
    "full-stack developer",
    "machine learning",
    "data science",
    "web development",
    "React",
    "Next.js",
    "ThreeJS",
    "TypeScript",
  ],
  author: "Dipesh Sharma",
  email: "ds9472396ss@gmail.com",
  site: "https://dipeshsharma.me",

  // for github stars button
  githubUsername: "123DS9472396",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/contact-dipesh-sharma/",
    instagram: "",
    facebook: "",
    github: "https://github.com/123DS9472396",
    leetcode: "https://leetcode.com/u/0Gnp35bsad/",
  },
};
export { config };
