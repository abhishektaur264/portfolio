import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard'; 
import { MessageCircle, Leaf, Award, CheckCircle2, Cpu, Code2, Globe, ExternalLink, Cloud, Network, BarChart3, Shield, Terminal, Briefcase, Users, Calendar } from 'lucide-react'; 

// --- PROJECTS DATA ---
const projects = [
  {
    title: "Agro-Aid",
    description: "Responsive, mobile-first smart agriculture platform. Integrated ML models via RESTful APIs, achieving 95%+ accuracy in crop yield prediction and reducing data latency by 30%. Structured intelligent weather forecasting and real-time multilingual access for regional farmers.",
    tags: ["HTML", "CSS", "JavaScript", "Machine Learning", "REST APIs"],
    color: "#22c55e", 
    icon: Leaf,
    repoLink: "https://github.com/abhishektaur264/AGRO---AID", 
    demoLink: "#", 
    image: "/Agro-Aid.png"
  },
  {
    title: "Git Docs",
    description: "AI-powered documentation generator converting GitHub repositories into structured technical docs. Designed a responsive frontend and Python backend, handling 500+ concurrent users. Engineered a smart parsing engine using NLP and AST analysis with 95%+ accuracy.",
    tags: ["Next.js", "Python", "Flask", "CSS"],
    color: "#3b82f6", 
    icon: Code2,
    repoLink: "https://github.com/abhishektaur264/Git-Docs", 
    demoLink: "https://git-docs-seven.vercel.app", 
    image: "/GitDocs.png"
  }
];

// --- CERTIFICATIONS DATA ---
const certifications = [
  {
    title: "Full Stack Development with MongoDB",
    issuer: "MongoDB",
    desc: "Hands-on MERN stack development and deployment certification.",
    date: "2024",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    link: "https://drive.google.com/file/d/1yJlJ-o5wJ_QB_9uNyHt4kcRdaflE6nxu/view"
  },
  {
    title: "IBM Gen-AI Certificate",
    issuer: "IBM",
    desc: "Earned developing new skills in Artificial Intelligence tools, LLM integrations and modern AI models.",
    date: "2024",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    link: "https://drive.google.com/file/d/1aaJovOBqmU5XOD99iLRN-Kd7Wqxw__dN/view"
  },
  {
    title: "Software Engineering Job Simulation", 
    issuer: "JPMorganChase",
    desc: "Completed practical tasks in software engineering and agile development.",
    date: "2024",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_69fddfabef06a9b7a1a6f685_1778561675360_completion_certificate.pdf"
  },
  {
    title: "Python Programming", 
    issuer: "Kaggle",
    desc: "Certification in Python programming focusing on data analysis and algorithms.",
    date: "2024",
    icon: Terminal,
    color: "from-purple-500 to-pink-500",
    link: "https://www.kaggle.com/learn/certification/abhishektaur13/python"
  }
];

// --- INTERNAL COMPONENT: STACKING CERT CARD ---
const CertCard = ({ i, title, issuer, desc, date, icon: Icon, color, link, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'start start'] });
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-[35vh] flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(10vh + ${i * 25}px)` }} 
        className={`relative flex flex-col w-full max-w-[800px] p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden group hover:border-white/20 transition-colors z-10`}
      >
        {/* Dynamic Gradient Border/Glow */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`} />
        
        <div className="flex justify-between items-start mb-6">
           <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-white/5 border border-white/10`}>
                 <Icon size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
                <p className="text-sm font-mono text-blue-400">{issuer}</p>
              </div>
           </div>
           
           {/* View Certificate Button */}
           <a 
             href={link} 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-20"
           >
             <ExternalLink size={12} /> View Credential
           </a>
        </div>

        <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
           {desc}
        </p>

        <div className="mt-auto flex justify-between items-center">
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-500">
             <CheckCircle2 size={14} /> Verified Credential
           </div>
           <span className="text-xs font-mono text-gray-600">{date}</span>
        </div>

      </motion.div>
    </div>
  )
}


// --- MAIN COMPONENT ---
const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div className="relative">
      
      {/* 0. EXPERIENCE SECTION */}
      <section id="experience" className="mt-20 mb-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
           <h2 className="text-xs font-bold text-purple-500 uppercase tracking-[0.5em] mb-4">
              Professional Journey
           </h2>
           <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">
              INDUSTRY <br /> EXPERIENCE.
           </h3>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-colors shadow-2xl overflow-hidden group">
            {/* Gradient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors pointer-events-none" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
               <div className="flex items-center gap-4">
                 <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-500">
                    <Briefcase size={28} />
                 </div>
                 <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight">Software Engineering Intern</h4>
                    <a href="https://kyrondatatech.com/" target="_blank" rel="noreferrer" className="text-sm font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 mt-1 transition-colors">
                      KyronDataTech <ExternalLink size={12} />
                    </a>
                 </div>
               </div>
               <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 uppercase tracking-widest">
                 Present
               </div>
            </div>

            <ul className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed relative z-10 pl-4 border-l-2 border-white/5">
              <li className="relative">
                <span className="absolute -left-[23px] top-2 w-2 h-2 rounded-full bg-purple-500/50 border border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                Built and configured <strong>Model Context Protocol (MCP) servers</strong>, bridging AI models with internal APIs, databases, and external systems.
              </li>
              <li className="relative">
                <span className="absolute -left-[23px] top-2 w-2 h-2 rounded-full bg-purple-500/50 border border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                Designed and optimized schemas, tool descriptions, and prompts to improve AI model integration and reliability.
              </li>
              <li className="relative">
                <span className="absolute -left-[23px] top-2 w-2 h-2 rounded-full bg-purple-500/50 border border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                Collaborated on AI-driven backend development, testing, and debugging to deliver scalable data infrastructure.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 1. PROJECTS SECTION (Correct ID applied) */}
      <section id="projects" className="mb-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
           <h2 className="text-xs font-bold text-green-500 uppercase tracking-[0.5em] mb-4">
              Selected Works
           </h2>
           <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">
              ENGINEERING <br /> REAL-WORLD SOLUTIONS.
           </h3>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      {/* 2. CERTIFICATIONS SECTION (Correct ID applied) */}
      <section id="certifications" ref={container} className="relative pb-64 scroll-mt-20"> 
         
         {/* Background Connector Line */}
         <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-0" />

         <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-10">
             <h2 className="text-xs font-bold text-blue-500 uppercase tracking-[0.5em] mb-4">
               Qualifications
             </h2>
             <h3 className="text-4xl font-black text-white tracking-tighter italic">
               CERTIFIED EXPERTISE.
             </h3>
         </div>

         {certifications.map((cert, i) => {
           const targetScale = 1 - ((certifications.length - i) * 0.05);
           return (
             <CertCard 
               key={i} 
               i={i} 
               {...cert} 
               progress={scrollYProgress} 
               range={[i * 0.25, 1]} 
               targetScale={targetScale} 
             />
           );
         })}

         {/* BLENDING GRADIENT OVERLAY */}
         <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030014] to-transparent z-20 pointer-events-none" />
      </section>

      {/* 3. CO-CURRICULAR ACTIVITIES SECTION */}
      <section id="co-curricular" className="mt-20 mb-32 scroll-mt-20 relative z-30">
        <div className="max-w-7xl mx-auto px-6 mb-16">
           <h2 className="text-xs font-bold text-orange-500 uppercase tracking-[0.5em] mb-4">
              Beyond Academics
           </h2>
           <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">
              CO-CURRICULAR <br /> LEADERSHIP.
           </h3>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Agricultural Outreach */}
          <div className="relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-orange-500/30 transition-colors shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-[60px] group-hover:bg-orange-500/10 transition-colors pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
               <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-500">
                  <Leaf size={24} />
               </div>
               <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">Agricultural Outreach Volunteer</h4>
                  <p className="text-sm font-mono text-orange-400 mt-1">NGO Initiative</p>
               </div>
            </div>

            <ul className="space-y-3 text-gray-400 text-sm md:text-base leading-relaxed relative z-10 pl-4 border-l-2 border-white/5">
              <li className="relative">
                <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-orange-500/50 border border-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                Participated in a comprehensive 7-day farmer awareness campaign across five regional villages, actively engaging with over 150 local farmers.
              </li>
              <li className="relative">
                <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-orange-500/50 border border-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                Conducted hands-on demonstrations and workshops to promote sustainable organic farming practices and cost-effective vermicompost preparation methods.
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-end relative z-10">
               <a href="https://drive.google.com/file/d/1Z65fhwv2ETDDZgwRL5mXljAL3ORDUpQt/view" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 hover:text-orange-400 transition-colors">
                 View Credential <ExternalLink size={14} />
               </a>
            </div>
          </div>

          {/* Card 2: Event Management Lead */}
          <div className="relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-pink-500/30 transition-colors shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/5 rounded-full blur-[60px] group-hover:bg-pink-500/10 transition-colors pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
               <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-xl text-pink-500">
                  <Users size={24} />
               </div>
               <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">Event Management Lead</h4>
                  <p className="text-sm font-mono text-pink-400 mt-1">Marathi Club</p>
               </div>
            </div>

            <ul className="space-y-3 text-gray-400 text-sm md:text-base leading-relaxed relative z-10 pl-4 border-l-2 border-white/5">
              <li className="relative">
                <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-pink-500/50 border border-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
                Led the end-to-end planning and execution of large-scale cultural events, coordinating operational teams for the participation of 300+ students.
              </li>
              <li className="relative">
                <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-pink-500/50 border border-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
                Raised event sponsorships, increasing annual festival budget by 25% and ensuring event success.
              </li>
            </ul>
          </div>

        </div>
      </section>
      
    </div>
  );
};

export default Projects;