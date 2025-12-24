# Abhishekh Dey Portfolio - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Components Guide](#components-guide)
6. [Customization Guide](#customization-guide)
7. [Adding Your Photos](#adding-your-photos)
8. [Modifying Content](#modifying-content)
9. [Styling Guide](#styling-guide)
10. [Animations](#animations)
11. [Deployment](#deployment)

---

## Project Overview

This is a modern, dark-themed developer portfolio website for Abhishekh Dey. It features:
- Futuristic dark aesthetic with neon cyan/violet accents
- Animated network background with floating nodes
- Glassmorphism effects and smooth animations
- Fully responsive design (mobile, tablet, desktop)
- Optimized performance with no heavy 3D elements

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |
| **Shadcn/ui** | UI component library |

---

## Project Structure

```
src/
├── assets/                    # Images and static files
│   ├── hero-bg.jpg           # Hero section background
│   ├── profile-placeholder.jpg # Profile photo (REPLACE THIS)
│   └── about-bg.jpg          # About section background
├── components/
│   ├── ui/                   # Reusable UI components (Shadcn)
│   │   ├── button.tsx        # Button component with variants
│   │   ├── card.tsx          # Card component
│   │   └── ...               # Other UI components
│   ├── Navbar.tsx            # Top navigation bar
│   ├── HeroSection.tsx       # Landing hero section
│   ├── AboutSection.tsx      # About me section
│   ├── ExperienceSection.tsx # Work & education timeline
│   ├── SkillsSection.tsx     # Skills categorized grid
│   ├── ProjectsSection.tsx   # Project portfolio
│   ├── BlogSection.tsx       # Blog article previews
│   ├── ServicesSection.tsx   # Services & rate card
│   ├── ContactSection.tsx    # Contact form
│   ├── Footer.tsx            # Site footer
│   └── NetworkBackground.tsx # Animated canvas background
├── pages/
│   ├── Index.tsx             # Main page assembling all sections
│   └── NotFound.tsx          # 404 page
├── hooks/                    # Custom React hooks
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
├── index.css                 # Global styles & design tokens
└── main.tsx                  # App entry point
```

---

## Design System

### Color Palette (defined in `src/index.css`)

| Variable | HSL Value | Usage |
|----------|-----------|-------|
| `--background` | 230 25% 5% | Main dark background |
| `--foreground` | 210 40% 96% | Primary text color |
| `--primary` | 185 100% 50% | Electric cyan accent |
| `--secondary` | 270 80% 60% | Violet accent |
| `--muted` | 230 20% 12% | Muted surfaces |
| `--muted-foreground` | 215 20% 55% | Secondary text |
| `--card` | 230 25% 8% | Card backgrounds |
| `--border` | 230 20% 18% | Border color |

### Typography

```css
--font-display: 'Space Grotesk', sans-serif  /* Headings */
--font-mono: 'JetBrains Mono', monospace     /* Code, labels */
--font-body: 'Space Grotesk', sans-serif     /* Body text */
```

### Custom CSS Classes

| Class | Description |
|-------|-------------|
| `.glass-card` | Glassmorphism card with blur |
| `.text-gradient` | Cyan-to-violet text gradient |
| `.glow-primary` | Cyan glow shadow |
| `.glow-secondary` | Violet glow shadow |
| `.neon-text` | Neon text glow effect |
| `.code-grid` | Grid pattern background |
| `.dot-pattern` | Dot pattern background |
| `.section-padding` | Standard section vertical padding |
| `.container-custom` | Max-width container with padding |
| `.animated-underline` | Hover underline animation |

---

## Components Guide

### 1. Navbar (`src/components/Navbar.tsx`)

**Purpose:** Fixed top navigation with scroll-based transparency.

**Key Features:**
- Transparent on top, glass effect when scrolled
- Desktop: horizontal links + CTA button
- Mobile: hamburger menu with slide-down panel

**To modify navigation links:**
```tsx
// Line 6-14: Edit the navLinks array
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  // Add or remove links here
];
```

---

### 2. HeroSection (`src/components/HeroSection.tsx`)

**Purpose:** Landing section with profile image, headline, and CTAs.

**Key Features:**
- Animated glow orbs in background
- Profile image with floating icon decorations
- Role tags with icons
- Two CTA buttons

**To change the headline:**
```tsx
// Line 82-83: Edit the name
<span className="text-gradient neon-text">Abhishekh Dey</span>
```

**To change the subtitle:**
```tsx
// Line 92-94: Edit the description
<motion.p className="...">
  Your new subtitle text here
</motion.p>
```

**To change roles:**
```tsx
// Line 7-12: Edit the roles array
const roles = [
  { icon: Code, label: 'Full Stack Developer' },
  { icon: Palette, label: 'Graphics Designer' },
  // Add more roles or change labels
];
```

---

### 3. AboutSection (`src/components/AboutSection.tsx`)

**Purpose:** Personal introduction with stats and highlights.

**Key Features:**
- Large profile image
- Bio paragraphs
- Key highlights list
- Stats grid (projects, experience, clients, awards)

**To change stats:**
```tsx
// Line 8-13: Edit the stats array
const stats = [
  { icon: Zap, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '3+', label: 'Years Experience' },
  // Modify values and labels
];
```

**To change bio text:**
```tsx
// Lines 96-112: Edit the paragraph text
<p>
  Your new bio paragraph here...
</p>
```

---

### 4. ExperienceSection (`src/components/ExperienceSection.tsx`)

**Purpose:** Timeline showing work experience and education.

**To add new experience:**
Find the `experiences` array and add a new object:
```tsx
{
  period: '2022 - Present',
  title: 'Your Role',
  company: 'Company Name',
  location: 'City, Country',
  description: 'What you did...',
  achievements: ['Achievement 1', 'Achievement 2'],
}
```

---

### 5. SkillsSection (`src/components/SkillsSection.tsx`)

**Purpose:** Categorized skills display with visual skill bars.

**To add/modify skills:**
Find the `skillCategories` array and edit:
```tsx
{
  title: 'Frontend Development',
  icon: Monitor,
  skills: [
    { name: 'React.js', level: 95 },  // level is 0-100
    { name: 'TypeScript', level: 90 },
    // Add more skills
  ]
}
```

---

### 6. ProjectsSection (`src/components/ProjectsSection.tsx`)

**Purpose:** Portfolio of projects with category filtering.

**To add a new project:**
Find the `projects` array and add:
```tsx
{
  title: 'Project Name',
  description: 'What the project does...',
  tech: ['React', 'Node.js', 'PostgreSQL'],
  category: 'web',  // Must match a category in projectCategories
  image: '/path/to/image.jpg',  // Optional
}
```

**To add a new category:**
```tsx
const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Applications' },
  // Add new category
  { id: 'mobile', label: 'Mobile Apps' },
];
```

---

### 7. BlogSection (`src/components/BlogSection.tsx`)

**Purpose:** Blog article preview cards.

**To add a blog post:**
Find the `blogPosts` array:
```tsx
{
  title: 'Article Title',
  excerpt: 'Short description...',
  date: 'Dec 15, 2024',
  readTime: '5 min read',
  category: 'Development',
  image: '/path/to/cover.jpg',
}
```

---

### 8. ServicesSection (`src/components/ServicesSection.tsx`)

**Purpose:** Services offered with pricing tiers.

**To modify services:**
Find the `services` array and the `packages` array to edit offerings and pricing.

---

### 9. ContactSection (`src/components/ContactSection.tsx`)

**Purpose:** Contact form with fields for name, email, project type, budget, and message.

**To change contact info:**
Find the `contactInfo` array and edit:
```tsx
{ icon: Mail, label: 'Email', value: 'your@email.com' }
```

---

### 10. NetworkBackground (`src/components/NetworkBackground.tsx`)

**Purpose:** Animated canvas with floating nodes and connection lines.

**Key properties to customize:**
```tsx
// Line 28: Number of nodes (higher = more nodes)
const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 25000);

// Line 32-33: Node speed (higher = faster)
vx: (Math.random() - 0.5) * 0.3,
vy: (Math.random() - 0.5) * 0.3,

// Line 57: Connection distance (higher = more connections)
const connectionDistance = 120;

// Line 67: Connection line opacity
const opacity = (1 - distance / connectionDistance) * 0.15;
```

---

### 11. Footer (`src/components/Footer.tsx`)

**Purpose:** Site footer with social links and newsletter signup.

**To change social links:**
```tsx
// Line 4-9: Edit the socialLinks array
const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/YOUR_USERNAME' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/YOUR_PROFILE' },
  // Add more social links
];
```

---

## Adding Your Photos

### Profile Photo

1. **Prepare your image:**
   - Recommended size: 800x800px or larger (square)
   - Format: JPG or PNG
   - Professional headshot works best

2. **Replace the placeholder:**
   - Navigate to `src/assets/`
   - Delete `profile-placeholder.jpg`
   - Add your photo and rename it to `profile-placeholder.jpg`
   
   **OR** rename your file and update imports:
   ```tsx
   // In HeroSection.tsx and AboutSection.tsx
   import profilePhoto from '@/assets/YOUR_PHOTO_NAME.jpg';
   ```

### Background Images

Similarly, replace:
- `src/assets/hero-bg.jpg` - Hero section background
- `src/assets/about-bg.jpg` - About section background

---

## Modifying Content

### Changing Your Name

Search and replace "Abhishekh Dey" in these files:
- `src/components/Navbar.tsx` (line 46-47)
- `src/components/HeroSection.tsx` (line 83)
- `src/components/AboutSection.tsx` (line 98)
- `src/components/Footer.tsx` (line 37-38, line 108)
- `index.html` (title tag)

### Changing Email & Social Links

Edit in `src/components/Footer.tsx`:
```tsx
const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/YOUR_USERNAME' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/YOUR_PROFILE' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/YOUR_HANDLE' },
  { name: 'Email', icon: Mail, href: 'mailto:YOUR_EMAIL@domain.com' },
];
```

### Adding Resume

1. Place your PDF resume at `public/resume.pdf`
2. The "Download Resume" button will automatically link to it

---

## Styling Guide

### Changing Colors

Edit `src/index.css` in the `:root` section:

```css
:root {
  /* Change primary accent (currently cyan) */
  --primary: 185 100% 50%;  /* HSL format */
  
  /* Change secondary accent (currently violet) */
  --secondary: 270 80% 60%;
  
  /* Change background darkness */
  --background: 230 25% 5%;
}
```

### Common Tailwind Classes Used

| Class | Purpose |
|-------|---------|
| `text-foreground` | Main text color |
| `text-muted-foreground` | Secondary text |
| `text-primary` | Accent color text |
| `bg-background` | Main background |
| `bg-card` | Card background |
| `bg-muted` | Muted surface |
| `border-border` | Standard border |
| `rounded-xl` | Rounded corners |
| `glass-card` | Glassmorphism effect |

---

## Animations

### Framer Motion Basics

This project uses Framer Motion for animations. Common patterns:

**Fade in on scroll:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

**Hover effects:**
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ duration: 0.3 }}
>
  Hoverable content
</motion.div>
```

**Infinite animation:**
```tsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
>
  Floating element
</motion.div>
```

### Tailwind Animation Classes

Defined in `tailwind.config.ts`:
- `animate-fade-in` - Fade in with upward movement
- `animate-scale-in` - Scale up effect
- `animate-float` - Floating up/down
- `animate-glow-pulse` - Pulsing glow effect
- `animate-gradient-shift` - Moving gradient background

---

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy Options

1. **Lovable's Built-in Deployment:**
   - Click "Publish" in the Lovable editor
   - Your site goes live at `yourproject.lovable.app`

2. **Custom Domain:**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

3. **Self-Hosting:**
   - Run `npm run build`
   - Upload `dist/` folder to any static hosting:
     - Vercel
     - Netlify
     - AWS S3
     - GitHub Pages

---

## Troubleshooting

### Images Not Loading
- Ensure images are in `src/assets/` folder
- Check import path starts with `@/assets/`
- Verify file extensions match (case-sensitive)

### Animations Not Working
- Check if Framer Motion is imported: `import { motion } from 'framer-motion'`
- Verify element uses `motion.div` not regular `div`

### Styles Not Applying
- Make sure Tailwind classes are spelled correctly
- Check if custom classes exist in `index.css`
- Verify the design token exists in `:root`

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors in your IDE
- Verify all imports are correct

---

## Quick Reference

### File to Edit for...

| Task | File(s) |
|------|---------|
| Change name | Navbar.tsx, HeroSection.tsx, AboutSection.tsx, Footer.tsx, index.html |
| Add experience | ExperienceSection.tsx |
| Add skills | SkillsSection.tsx |
| Add projects | ProjectsSection.tsx |
| Add blog posts | BlogSection.tsx |
| Change services/pricing | ServicesSection.tsx |
| Change contact info | ContactSection.tsx, Footer.tsx |
| Change colors | src/index.css |
| Change fonts | src/index.css, tailwind.config.ts |
| Change animations | tailwind.config.ts |
| Change section spacing | src/index.css (`.section-padding`) |

---

## Support

For questions about:
- **Lovable platform:** Visit [docs.lovable.dev](https://docs.lovable.dev)
- **Tailwind CSS:** Visit [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion:** Visit [framer.com/motion](https://www.framer.com/motion/)
- **React:** Visit [react.dev](https://react.dev)

---

*Last updated: December 2024*
