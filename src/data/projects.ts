export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  github: string;
  live?: string;
  image: string;
  tech: { frontend: string[]; backend: string[] };
  highlights: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: "smartspace",
    title: "SmartSpace",
    category: "Full Stack / ML",
    description:
      "Full-stack logistics platform with RLS-secured multi-role access, ML recommendation engine (87.9% accuracy), and Meta Llama 3.3 70B for natural language property search.",
    longDescription:
      "SmartSpace is a production-grade warehouse management platform built with React, Node.js, and Supabase. Features include RLS-secured multi-role access control, an interactive 3D booking grid, and Recharts analytics dashboards. The ML recommendation engine achieves 87.9% accuracy with a dynamic pricing tool. Integrated Meta Llama 3.3 70B for natural language property search and AI-generated descriptions explaining ranking logic.",
    github: "https://github.com/123DS9472396/smartspace",
    image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: {
      frontend: ["React", "TailwindCSS", "Recharts", "Vite"],
      backend: ["Node.js", "Supabase", "ML Engine", "Llama 3.3"],
    },
    highlights: [
      "RLS-secured multi-role access (Seeker, Owner, Admin)",
      "Interactive 3D booking grid with real-time analytics",
      "ML recommendation engine with 87.9% accuracy",
      "Dynamic pricing tool for competitive rental rates",
      "Meta Llama 3.3 70B for NL property search",
      "AI-generated descriptions explaining ranking logic",
    ],
    color: "#10b981",
  },
  {
    id: "omnidetector",
    title: "OmniDetector Ultimate",
    category: "AI / Computer Vision",
    description:
      "Real-time computer vision web app using Streamlit and WebRTC for live video streaming, performing object detection across 80+ classes via YOLO models.",
    longDescription:
      "Real-time computer vision web application built with Streamlit and WebRTC for live video streaming. Performs object detection across 80+ COCO classes via pre-trained YOLO models (YOLOv8n/s/m). Includes ML analytics pipeline using Scikit-Learn (K-Means, PCA) for live clustering insights without GPU. Plotly dashboards for real-time multi-model comparisons with adjustable thresholds and CSV export.",
    github: "https://github.com/123DS9472396/omnidetector-ultimate",
    live: "https://omnidetector.streamlit.app/",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: {
      frontend: ["Streamlit", "Plotly", "WebRTC"],
      backend: ["Python", "YOLOv8", "OpenCV", "Scikit-Learn"],
    },
    highlights: [
      "Real-time detection across 80+ COCO classes",
      "Live video streaming with WebRTC",
      "3 YOLO variants (n/s/m) with adjustable confidence",
      "ML pipeline: K-Means, PCA on detection data",
      "Live Plotly dashboards for model comparison",
      "CPU-optimized, no GPU required; CSV export",
    ],
    color: "#3b82f6",
  },
  {
    id: "ai-doctor",
    title: "AI Doctor 2.0",
    category: "AI / Healthcare",
    description:
      "Multi-modal healthcare AI with hybrid LLM + ML risk engine supporting text, image, and voice inputs for clinical decision support.",
    longDescription:
      "Next-generation clinical decision support platform leveraging multi-modal AI (text, image, voice). Hybrid AI engine combining GROQ Llama 4 with custom ML risk scoring for 40% higher diagnostic accuracy. Specialization-aware for Dermatology, Cardiology, Neurology. RAG integration, Whisper STT, GROQ Vision API, and ElevenLabs TTS for voice-first accessibility.",
    github: "https://github.com/123DS9472396/medical-diagnostic-agent",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: {
      frontend: ["Next.js", "TypeScript", "shadcn/ui", "Recharts"],
      backend: ["FastAPI", "GROQ API", "Llama 4", "Whisper", "LangChain"],
    },
    highlights: [
      "Hybrid LLM + ML risk engine (40% improved accuracy)",
      "Multi-modal: text, medical images, voice",
      "RAG with medical knowledge base",
      "Specialization: Dermatology, Cardiology, Neurology",
      "Whisper STT and ElevenLabs TTS",
      "Admin & Doctor analytics portal",
    ],
    color: "#ef4444",
  },
  {
    id: "forgery-detection",
    title: "Forgery Detection System",
    category: "AI / Security",
    description:
      "AI-powered document forgery detection verifying bank statements, Aadhaar, PAN cards using SSIM, ELA, CNN, and OCR with real-time fraud scoring.",
    longDescription:
      "AI-powered document forgery detection system verifying bank statements, Aadhaar cards, PAN cards, and legal agreements. Uses SSIM (Structural Similarity Index), ELA (Error Level Analysis), CNN classification, and OCR text extraction. Real-time dashboard visualizes fraud scores and highlights forged sections.",
    github: "https://github.com/123DS9472396/forgery-detection",
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: {
      frontend: ["Dashboard UI", "Visualization"],
      backend: ["Python", "OpenCV", "CNN", "OCR", "SSIM"],
    },
    highlights: [
      "Verifies bank statements, Aadhaar, PAN cards",
      "SSIM for structural similarity comparison",
      "ELA for compression artifact detection",
      "CNN-based tampered document classification",
      "OCR text extraction and cross-validation",
      "Real-time fraud score dashboard",
    ],
    color: "#f59e0b",
  },
];
