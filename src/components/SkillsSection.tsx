import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, Server, Palette, PenTool, Mic, Database,
  Globe, Layers, Terminal, Figma, FileText, Presentation
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Globe,
    color: 'primary',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
      { name: 'HTML5 / CSS3', level: 98 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'secondary',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 80 },
      { name: 'RESTful APIs', level: 92 },
      { name: 'GraphQL', level: 78 },
      { name: 'Microservices', level: 85 },
    ],
  },
  {
    title: 'Database & DevOps',
    icon: Database,
    color: 'primary',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Docker / Kubernetes', level: 80 },
      { name: 'AWS / GCP', level: 82 },
      { name: 'CI/CD Pipelines', level: 86 },
    ],
  },
  {
    title: 'UI/UX & Graphics Design',
    icon: Palette,
    color: 'secondary',
    skills: [
      { name: 'Figma', level: 92 },
      { name: 'Adobe Photoshop', level: 88 },
      { name: 'Adobe Illustrator', level: 82 },
      { name: 'UI Design Systems', level: 90 },
      { name: 'Wireframing & Prototyping', level: 88 },
    ],
  },
  {
    title: 'Content & Technical Writing',
    icon: FileText,
    color: 'primary',
    skills: [
      { name: 'Technical Documentation', level: 90 },
      { name: 'Blog & Article Writing', level: 88 },
      { name: 'API Documentation', level: 92 },
      { name: 'SEO Optimization', level: 78 },
      { name: 'Content Strategy', level: 82 },
    ],
  },
  {
    title: 'Public Speaking & Leadership',
    icon: Presentation,
    color: 'secondary',
    skills: [
      { name: 'Technical Presentations', level: 88 },
      { name: 'Workshop Facilitation', level: 85 },
      { name: 'Team Leadership', level: 90 },
      { name: 'Mentoring', level: 92 },
      { name: 'Stakeholder Communication', level: 86 },
    ],
  },
];

const technologies = [
  { name: 'React', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'TypeScript', icon: Terminal },
  { name: 'Figma', icon: Figma },
  { name: 'Docker', icon: Layers },
  { name: 'Python', icon: Code2 },
  { name: 'GraphQL', icon: Database },
  { name: 'AWS', icon: Globe },
];

interface SkillCardProps {
  category: typeof skillCategories[0];
  index: number;
  isInView: boolean;
}

const SkillCard = ({ category, index, isInView }: SkillCardProps) => {
  const isPrimary = category.color === 'primary';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 rounded-xl hover:border-primary/30 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          isPrimary ? 'bg-primary/20 border border-primary/30' : 'bg-secondary/20 border border-secondary/30'
        }`}>
          <category.icon className={isPrimary ? 'text-primary' : 'text-secondary'} size={22} />
        </div>
        <h3 className="text-lg font-bold">{category.title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 + i * 0.1, ease: 'easeOut' }}
                className="skill-bar-fill"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning development, design, content creation, and leadership
          </p>
        </motion.div>

        {/* Tech Icons Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 overflow-hidden"
        >
          <div className="flex gap-6 justify-center flex-wrap">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all"
              >
                <tech.icon className="text-primary" size={28} />
                <span className="text-xs font-mono text-muted-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
