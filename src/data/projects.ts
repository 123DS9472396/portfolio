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
    id: "omnidetector",
    title: "OmniDetector Ultimate",
    category: "AI / Computer Vision",
    description:
      "Real-time object detection platform using YOLOv8 neural networks with Streamlit web UI, supporting image, video, and live webcam analysis.",
    longDescription:
      "OmniDetector Ultimate v3.0 is a comprehensive computer vision platform built on YOLOv8 neural networks. It supports real-time detection across 80+ COCO object classes using image upload, video processing, and live webcam streaming. The system includes a 10-algorithm ML analytics pipeline with clustering, anomaly detection, and performance visualization. Deployed on Hugging Face Spaces for public access.",
    github: "https://github.com/123DS9472396/omnidetector-ultimate",
    live: "https://omnidetector.streamlit.app/",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    tech: {
      frontend: ["Streamlit", "Plotly", "Python"],
      backend: [
        "YOLOv8",
        "OpenCV",
        "scikit-learn",
        "PyTorch",
        "streamlit-webrtc",
      ],
    },
    highlights: [
      "80+ COCO object classes detected in real-time",
      "3 YOLO model variants (Nano, Small, Medium)",
      "10 ML algorithms: KMeans, DBSCAN, PCA, Random Forest, SVM",
      "CPU-optimized — no GPU required for inference",
      "Live webcam with WebRTC integration",
      "Export results as CSV and annotated images",
    ],
    color: "#3b82f6",
  },
  {
    id: "smartspace",
    title: "SmartSpace",
    category: "Full Stack / AI/ML",
    description:
      "Intelligent warehouse management platform combining ML recommendations with multi-LLM conversational AI for 10,000+ warehouse listings across Maharashtra.",
    longDescription:
      "SmartSpace is a cutting-edge warehouse management platform serving 10,002+ listings across Maharashtra, India. It combines a 5-algorithm ML ensemble (KNN, Random Forest, XGBoost, Gradient Boosting, Neural Network) with a 4-tier LLM fallback system (Claude 3.5 Sonnet → Llama 3.3 → Gemini Pro → Llama 3.1). Features include smart booking with visual 3D grid selection, OCR document verification, ML-powered pricing recommendations, and real-time analytics. Built with role-based access for Seekers, Owners, and Admins.",
    github: "https://github.com/123DS9472396/smartspace",
    image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg",
    tech: {
      frontend: ["React 18", "TypeScript", "TailwindCSS", "Recharts", "Vite"],
      backend: [
        "Express.js",
        "Supabase",
        "PostgreSQL",
        "Claude API",
        "Groq",
        "Gemini",
      ],
    },
    highlights: [
      "10,002+ warehouse listings across 50+ Maharashtra cities",
      "5-algorithm ML ensemble with 87.9% accuracy",
      "4-tier LLM fallback (Claude → Llama → Gemini → Cloudflare)",
      "Smart booking with visual 3D grid selection",
      "AI-powered OCR document verification",
      "Role-based: Seeker, Owner, Admin dashboards",
    ],
    color: "#10b981",
  },
  {
    id: "medical-diagnostic-agent",
    title: "AI Doctor 2.0",
    category: "AI / Healthcare",
    description:
      "Production-ready healthcare platform with multi-modal AI for clinical decision support, featuring RAG-enhanced analysis, voice transcription, and medical image analysis.",
    longDescription:
      "AI Doctor 2.0 is a comprehensive clinical decision support system using GROQ's Llama 4 for medical analysis with RAG knowledge base integration. It supports multi-modal inputs including voice recording (Whisper STT), medical image analysis (GROQ Vision API), and text symptom descriptions. Features include risk scoring, multi-specialization support (Dermatology, Cardiology, Neurology), admin analytics dashboard, and a doctor portal with patient history. Built with Next.js frontend and FastAPI backend.",
    github: "https://github.com/123DS9472396/medical-diagnostic-agent",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
    tech: {
      frontend: ["Next.js", "TypeScript", "shadcn/ui", "Recharts", "TailwindCSS"],
      backend: [
        "FastAPI",
        "Python",
        "GROQ API",
        "Llama 4",
        "Whisper STT",
        "ElevenLabs",
      ],
    },
    highlights: [
      "Llama 4 powered comprehensive symptom analysis",
      "RAG with medical knowledge base integration",
      "Voice recording with Whisper speech-to-text",
      "GROQ Vision API for medical image analysis",
      "ML-based patient risk scoring",
      "Admin & Doctor portal with analytics",
    ],
    color: "#ef4444",
  },
];
