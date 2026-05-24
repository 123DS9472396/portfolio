export interface Project {
  id: string;
  title: string;
  category: string;
  color: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tech: { frontend: string[]; backend: string[] };
  image: string;
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "smartspace",
    title: "SmartSpace",
    category: "Full Stack / ML",
    color: "#3b82f6",
    description: "Full-stack logistics platform with RLS-secured multi-role access, ML recommendation engine, and real-time inventory tracking for 72+ warehouses across Maharashtra.",
    longDescription: "SmartSpace is a full-stack warehouse logistics platform built with React, TailwindCSS, and Supabase. It features AI-powered recommendations using cosine similarity, multi-role JWT authentication (seeker/owner/admin), real-time inventory management, and a responsive 3D grid UI with interactive dashboards.",
    highlights: ["AI-powered warehouse recommendations using ML cosine similarity", "Multi-role authentication (Seeker, Owner, Admin) with RLS policies", "Real-time inventory tracking with live updates across 72+ warehouses", "Interactive dashboards with Recharts and 3D grid visualization", "Smart booking system with automated notifications"],
    tech: { frontend: ["React", "TailwindCSS", "Recharts", "3D Grid UI"], backend: ["Supabase", "PostgreSQL", "RLS", "ML Engine"] },
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/123DS9472396/smartspace",
  },
  {
    id: "omnidetector",
    title: "OmniDetector Ultimate",
    category: "AI / Computer Vision",
    color: "#06b6d4",
    description: "Real-time computer vision web app using Streamlit and WebRTC for live video streaming, multi-object detection with YOLOv8, and interactive analytics.",
    longDescription: "OmniDetector Ultimate v3.0 is a real-time object detection platform supporting video, image, and webcam feeds. Built with Streamlit, YOLOv8, and WebRTC, it delivers blazing-fast inference with interactive Plotly visualizations and confidence-based filtering.",
    highlights: ["Real-time webcam object detection using WebRTC streaming", "Multi-source input: video files, images, and live camera feed", "YOLOv8 inference with configurable confidence thresholds", "Interactive Plotly dashboards for detection analytics", "Batch processing with export and session history tracking"],
    tech: { frontend: ["Streamlit", "Plotly", "WebRTC", "Python"], backend: ["YOLOv8", "OpenCV", "NumPy", "Ultralytics"] },
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/123DS9472396/OmniDetector-Ultimate",
  },
  {
    id: "ai-doctor",
    title: "AI Doctor 2.0",
    category: "AI / Healthcare",
    color: "#10b981",
    description: "Production-ready multi-modal healthcare AI with hybrid LLM + ML risk engine, supporting text, image, and voice inputs for clinical decision support.",
    longDescription: "AI Doctor 2.0 is a comprehensive clinical decision support system featuring multi-modal inputs (text symptoms, medical images, voice descriptions). It uses a hybrid LLM + ML risk engine with evidence-based differential diagnosis and predictive analytics.",
    highlights: ["Multi-modal input: text symptoms, medical images, voice descriptions", "Hybrid LLM + ML risk assessment engine for clinical analysis", "Evidence-based differential diagnosis with confidence scoring", "Predictive analytics for treatment outcome modeling", "Real-time medical image analysis with CNN classification"],
    tech: { frontend: ["Next.js", "TypeScript", "shadcn/ui", "Recharts"], backend: ["Python", "TensorFlow", "LLM API", "Flask", "CNN", "NLP"] },
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/123DS9472396/medical-diagnostic-agent",
  },
  {
    id: "forgery-detection",
    title: "Forgery Detection System",
    category: "AI / Security",
    color: "#ef4444",
    description: "AI-powered document forgery detection system verifying authenticity of bank statements, Aadhaar cards, PAN cards, and legal agreements using computer vision and ML.",
    longDescription: "Built for HackScript 6.0 hackathon (Top 5 among 55+ teams), this system detects forgery in bank statements, government IDs (Aadhaar/PAN), and legal documents using SSIM, Error Level Analysis (ELA), CNN, Isolation Forest anomaly detection, and OCR for text tampering verification.",
    highlights: ["SSIM and Error Level Analysis (ELA) for image tampering detection", "CNN + Isolation Forest algorithms for anomaly detection and fraud verification", "OCR-based text tampering verification on bank statements and IDs", "Real-time dashboard with fraud score visualization and highlighted forged sections", "Top 5 finish among 55+ teams at HackScript 6.0 national hackathon"],
    tech: { frontend: ["Dashboard UI", "Real-time Visualization", "Python", "Flask"], backend: ["TensorFlow", "OpenCV", "OCR", "SSIM/ELA", "CNN", "Isolation Forest"] },
    image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/123DS9472396/Forgery-Detection",
  },
];
