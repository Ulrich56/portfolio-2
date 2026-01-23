import { 
  FaHtml5, FaCss3, FaReact, FaNodeJs, FaPhp, FaPython, FaLaravel, FaGithub, FaLinkedin, FaWhatsapp, FaTrello 
} from "react-icons/fa"
import { 
  SiJavascript, SiTailwindcss, SiReactquery, SiTypescript, SiNextdotjs, SiFramer, SiMongodb, SiExpress, 
  SiPostgresql, SiMysql, SiPrisma, SiGraphql, SiVuedotjs, SiFigma, SiTauri, SiGo, SiSqlite, SiWordpress, SiVercel, SiRender, SiFlask, SiNestjs 
} from "react-icons/si"
import { FaTeamspeak } from "react-icons/fa" // approximation pour Teams

// --- Catégorie générale (mix de compétences principales) ---
export const Skill_data = [
  { skill_name: "HTML 5", icon: <FaHtml5 className="text-orange-500 w-10 h-10" /> },
  { skill_name: "CSS", icon: <FaCss3 className="text-blue-500 w-10 h-10" /> },
  { skill_name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-10 h-10" /> },
  { skill_name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 w-10 h-10" /> },
  { skill_name: "React", icon: <FaReact className="text-cyan-400 w-10 h-10" /> },
  { skill_name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-10 h-10" /> },
  { skill_name: "Next.js 13", icon: <SiNextdotjs className="text-white w-10 h-10" /> },
  { skill_name: "Framer Motion", icon: <SiFramer className="text-purple-500 w-10 h-10" /> },
  { skill_name: "Node.js", icon: <FaNodeJs className="text-green-500 w-10 h-10" /> },
  { skill_name: "MongoDB", icon: <SiMongodb className="text-green-400 w-10 h-10" /> },
]

// --- Frontend ---
export const Frontend_skill = [
  { skill_name: "HTML 5", icon: <FaHtml5 className="text-orange-500 w-10 h-10" /> },
  { skill_name: "CSS", icon: <FaCss3 className="text-blue-500 w-10 h-10" /> },
  { skill_name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-10 h-10" /> },
  { skill_name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 w-10 h-10" /> },
  { skill_name: "React", icon: <FaReact className="text-cyan-400 w-10 h-10" /> },
  { skill_name: "Vue.js", icon: <SiVuedotjs className="text-green-500 w-10 h-10" /> },
  { skill_name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-10 h-10" /> },
  { skill_name: "Next.js 13", icon: <SiNextdotjs className="text-white w-10 h-10" /> },
]

// --- Backend ---
export const Backend_skill = [
  { skill_name: "Node.js", icon: <FaNodeJs className="text-green-500 w-10 h-10" /> },
  { skill_name: "Express.js", icon: <SiExpress className="text-gray-500 w-10 h-10" /> },
  { skill_name: "Nest.js", icon: <SiNestjs className="text-red-500 w-10 h-10" /> },
  { skill_name: "PHP", icon: <FaPhp className="text-indigo-600 w-10 h-10" /> },
  { skill_name: "Python", icon: <FaPython className="text-yellow-500 w-10 h-10" /> },
  { skill_name: "Laravel", icon: <FaLaravel className="text-red-600 w-10 h-10" /> },
  { skill_name: "Flask", icon: <SiFlask className="text-gray-600 w-10 h-10" /> },
  { skill_name: "MongoDB", icon: <SiMongodb className="text-green-400 w-10 h-10" /> },
  { skill_name: "MySQL", icon: <SiMysql className="text-blue-500 w-10 h-10" /> },
  { skill_name: "SQLite", icon: <SiSqlite className="text-blue-400 w-10 h-10" /> },
]

// --- Full Stack / Outils ---
export const Full_stack = [
  
  { skill_name: "Figma", icon: <SiFigma className="text-pink-500 w-10 h-10" /> },
  { skill_name: "WordPress", icon: <SiWordpress className="text-blue-500 w-10 h-10" /> },
  { skill_name: "Vercel", icon: <SiVercel className="text-white w-10 h-10" /> },
  { skill_name: "Render", icon: <SiRender className="text-purple-500 w-10 h-10" /> },
  { skill_name: "GitHub", icon: <FaGithub className="text-white w-10 h-10" /> },
  { skill_name: "Trello", icon: <FaTrello className="text-blue-400 w-10 h-10" /> },
  
]

export const Tools = [
  { skill_name: "React Native", icon: <FaReact className="text-cyan-400 w-10 h-10" /> },
  { skill_name: "Teams", icon: <FaTeamspeak className="text-blue-600 w-10 h-10" /> },
]

// --- Réseaux sociaux ---
export const Socials = [
  { name: "LinkedIn", icon: <FaLinkedin className="text-blue-600 w-6 h-6" /> },
  { name: "GitHub", icon: <FaGithub className="text-white w-6 h-6" /> },
  { name: "Whatsapp", icon: <FaWhatsapp className="text-green-500 w-6 h-6" /> },
]

