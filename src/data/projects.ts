export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  github: string;
  live?: string;
  image: string;
  tech: {
    frontend: string[];
    backend: string[];
  };
  highlights: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: "smartspace",
    title: "SmartSpace",
    category: "Full Stack / ML",
    description:
      "Full-stack logistics platform with RLS-secured multi-role access, ML recommendation engine (87.9% accuracy), and Meta Llama 3.3 70B integration for natural language property search.",
    longDescription:
      "SmartSpace is a production-grade warehouse management platform built with React, Node.js, and Supabase. Features include RLS-secured multi-role access control, an interactive 3D booking grid, and Recharts analytics dashboards. The ML recommendation engine achieves 87.9% accuracy for property suggestions with a dynamic pricing tool that filters properties and suggests competitive real-time rental rates. Integrated Meta Llama 3.3 70B for natural language property search and dynamically generated descriptions explaining the AI's ranking logic.",
    github: "https://github.com/123DS9472396/smartspace",
    image: "/images/smartspace.jpeg",
    tech: {
      frontend: ["React", "TailwindCSS", "Recharts", "3D Grid UI"],
      backend: ["Node.js", "Supabase", "ML Engine", "Llama 3.3 70B"],
    },
    highlights: [
      "Full-stack platform with RLS-secured multi-role access (Seeker, Owner, Admin)",
      "Interactive 3D booking grid with real-time analytics dashboards",
      "ML recommendation engine with 87.9% accuracy",
      "Dynamic pricing tool for competitive real-time rental rate suggestions",
      "Meta Llama 3.3 70B for natural language property search",
      "AI-generated descriptions explaining ranking logic",
    ],
    color: "#10b981",
  },
  {
    id: "omnidetector",
    title: "OmniDetector Ultimate",
    category: "AI / Computer Vision",
    description:
      "Real-time computer vision web app using Streamlit and WebRTC for live video streaming, performing object detection across 80+ classes via YOLO models with live ML analytics.",
    longDescription:
      "OmniDetector Ultimate is a real-time computer vision web application built with Streamlit and WebRTC for live video streaming, performing object detection across 80+ classes via pre-trained YOLO models (YOLOv8n/s/m). Includes an analytics pipeline using Scikit-Learn (K-Means, PCA) to process YOLO detection data on-the-fly, generating live clustering and classification insights without needing a GPU. Integrated Plotly dashboards visualize live metrics and enable real-time multi-model comparisons with adjustable confidence thresholds and CSV data export.",
    github: "https://github.com/123DS9472396/omnidetector-ultimate",
    live: "https://omnidetector.streamlit.app/",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: {
      frontend: ["Streamlit", "Plotly", "WebRTC"],
      backend: ["Python", "YOLOv8", "OpenCV", "Scikit-Learn"],
    },
    highlights: [
      "Real-time object detection across 80+ COCO classes",
      "Live video streaming with WebRTC integration",
      "3 YOLO model variants (YOLOv8n/s/m) with adjustable confidence thresholds",
      "ML analytics pipeline: K-Means clustering, PCA dimensionality reduction",
      "Live Plotly dashboards for real-time multi-model comparison",
      "CPU-optimized — no GPU required; CSV data export",
    ],
    color: "#3b82f6",
  },
  {
    id: "ai-doctor",
    title: "AI Doctor 2.0",
    category: "AI / Healthcare",
    description:
      "Production-ready multi-modal healthcare AI with hybrid LLM + ML risk engine, supporting text, image, and voice inputs for clinical decision support with 40% improved accuracy.",
    longDescription:
      "AI Doctor 2.0 is a next-generation clinical decision support platform leveraging multi-modal AI (text, image, voice) for real-time medical analysis. Features a hybrid AI engine combining GROQ Llama 4 LLMs with a custom calibration-aware ML risk scoring ensemble for up to 40% higher diagnostic accuracy. Supports specialization-aware reasoning for Dermatology, Cardiology, Neurology, and General Medicine. Includes RAG-driven knowledge integration, Whisper speech-to-text, GROQ Vision API for image analysis, and ElevenLabs TTS for voice-first accessibility.",
    github: "https://github.com/123DS9472396/medical-diagnostic-agent",
    image: "/images/ai-doctor.jpeg",
    tech: {
      frontend: ["Next.js", "TypeScript", "shadcn/ui", "Recharts"],
      backend: ["FastAPI", "Python", "GROQ API", "Llama 4", "Whisper", "LangChain"],
    },
    highlights: [
      "Hybrid LLM + ML risk engine with 40% improved diagnostic accuracy",
      "Multi-modal: text symptoms, medical images, and voice recording",
      "RAG with medical knowledge base for evidence-backed recommendations",
      "Specialization-aware: Dermatology, Cardiology, Neurology",
      "Real-time Whisper STT and ElevenLabs TTS for voice-first experience",
      "Admin & Doctor portal with predictive analytics dashboard",
    ],
    color: "#ef4444",
  },
  {
    id: "forgery-detection",
    title: "Forgery Detection System",
    category: "AI / Security",
    description:
      "AI-powered document forgery detection system verifying authenticity of bank statements, Aadhaar, PAN cards, and legal agreements using SSIM, ELA, CNN, and OCR.",
    longDescription:
      "An AI-powered document forgery detection system designed to verify authenticity of bank statements, Aadhaar cards, PAN cards, and legal agreements. Uses multiple detection methods including SSIM (Structural Similarity Index), ELA (Error Level Analysis), CNN (Convolutional Neural Networks), and OCR (Optical Character Recognition). Features a real-time dashboard to visualize fraud scores and highlight forged sections for easy review.",
    github: "https://github.com/123DS9472396/forgery-detection",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: {
      frontend: ["Dashboard UI", "Real-time Visualization"],
      backend: ["Python", "OpenCV", "CNN", "OCR", "SSIM", "ELA"],
    },
    highlights: [
      "Verifies bank statements, Aadhaar, PAN cards, and legal agreements",
      "SSIM (Structural Similarity Index) for image comparison",
      "Error Level Analysis (ELA) for compression artifact detection",
      "CNN-based classification for tampered document identification",
      "OCR for text extraction and cross-validation",
      "Real-time fraud score dashboard with highlighted forged sections",
    ],
    color: "#f59e0b",
  },
];
