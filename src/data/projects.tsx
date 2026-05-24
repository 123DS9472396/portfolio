import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "smartspace",
    category: "Full Stack / AI",
    title: "SmartSpace",
    src: "",
    screenshots: [],
    live: "https://github.com/123DS9472396/Smart_Space",
    github: "https://github.com/123DS9472396/Smart_Space",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.supabase, PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono mb-2">
            • Built a full-stack logistics platform with RLS-secured multi-role access, an interactive 3D booking grid, and Recharts analytics dashboards.
          </TypographyP>
          <TypographyP className="font-mono mb-2">
            • Developed an ML recommendation engine (87.9% accuracy) and a dynamic pricing tool to filter properties and suggest competitive real-time rental rates.
          </TypographyP>
          <TypographyP className="font-mono mb-4">
            • Integrated Meta Llama 3.3 70B for natural language property search and dynamically generated descriptions explaining the AI’s ranking logic.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "forgery-detection",
    category: "AI / Computer Vision",
    title: "Forgery Detection System",
    src: "",
    screenshots: [],
    live: "https://github.com/123DS9472396",
    github: "https://github.com/123DS9472396",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono mb-2">
            • Developed an AI-powered document forgery detection system to verify authenticity of bank statements, Aadhaar, PAN cards, and legal agreements using SSIM, ELA, CNN, and OCR.
          </TypographyP>
          <TypographyP className="font-mono mb-4">
            • Built a real-time dashboard to visualize fraud scores and highlight forged sections for easy review.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "omnidetector-ultimate",
    category: "AI / ML",
    title: "OmniDetector Ultimate",
    src: "",
    screenshots: [],
    live: "https://github.com/123DS9472396/omnidetector-ultimate",
    github: "https://github.com/123DS9472396/omnidetector-ultimate",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono mb-2">
            • Built a real-time computer vision web application using Streamlit and WebRTC for live video streaming, performing object detection across 80+ classes via pre-trained YOLO models.
          </TypographyP>
          <TypographyP className="font-mono mb-2">
            • Developed an analytics pipeline using Scikit-Learn (K-Means, PCA) to process the YOLO detection data on-the-fly, generating live clustering and classification insights without needing a GPU.
          </TypographyP>
          <TypographyP className="font-mono mb-4">
            • Integrated Plotly dashboards to visualize live metrics and enable real-time multi-model comparisons (YOLOv8n/s/m), featuring adjustable confidence thresholds and CSV data export.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "realtime-chat",
    category: "Full Stack",
    title: "Real-Time Chat App",
    src: "",
    screenshots: [],
    live: "https://github.com/123DS9472396",
    github: "https://github.com/123DS9472396",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo, PROJECT_SKILLS.sockerio],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono mb-2">
            • Developed a real-time messaging platform with instant one-to-one and group chat using Socket.IO, with MongoDB for user authentication and search.
          </TypographyP>
          <TypographyP className="font-mono mb-4">
            • Designed a responsive React.js frontend with robust state management, ensuring seamless real-time message delivery and low-latency rendering.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
