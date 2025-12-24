import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, Globe, Award } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpg';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const stats = [
  { icon: Zap, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '3+', label: 'Years Experience' },
  { icon: Globe, value: '20+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Awards & Certifications' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Passionate About <span className="text-gradient">Technology</span> & <span className="text-gradient">Design</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building the bridge between elegant code and exceptional user experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 glass-card">
                <img
                  src={profilePlaceholder}
                  alt="Abhishekh Dey"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              
              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
                className="absolute -right-6 top-1/4 glass-card p-4 rounded-xl border border-primary/30"
              >
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-xs text-muted-foreground">Years of<br />Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Transforming Ideas into Digital Reality
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm Abhishekh Dey, a multi-disciplinary technology professional based in Hyderabad. 
                Currently serving as Team Leader at Genpact, I blend technical expertise with creative 
                vision to deliver solutions that make an impact.
              </p>
              <p>
                My journey spans full-stack development, where I architect scalable web applications 
                using modern frameworks. I equally thrive in the creative realm—designing intuitive 
                interfaces, crafting compelling content, and sharing knowledge through technical speaking.
              </p>
              <p>
                What drives me is the intersection of technology and human experience. Every project 
                is an opportunity to solve real problems, mentor growing talent, and push the boundaries 
                of what's possible in digital innovation.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Full-Stack Architecture',
                'UI/UX Design Systems',
                'Technical Leadership',
                'Content Strategy',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-4 rounded-xl text-center hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="mx-auto mb-2 text-primary" size={20} />
                  <div className="text-xl md:text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
