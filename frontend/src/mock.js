// Mock data for portfolio - will be replaced with backend later

export const personalInfo = {
  name: "Sankalpa Sovan Samal",
  title: "M.Sc. Computer Science Student | Web Developer | AI Project Enthusiast",
  tagline: "Passionate about building intelligent web applications and modern user experiences. I enjoy turning ideas into scalable, real-world digital solutions.",
  email: "sankalpasovansamal@gmail.com",
  github: "https://github.com/sankalpa-dot",
  linkedin: "https://linkedin.com/in/sankalpa-samal",
  resumeUrl: "/resume.pdf",
  about: "I'm a Computer Science graduate student with a passion for creating intelligent web applications that solve real-world problems. My journey in tech has been driven by curiosity and a desire to build products that make a difference. I specialize in full-stack development with a keen interest in AI integration, always staying updated with the latest technologies and best practices."
};

export const projects = [
  {
    id: 1,
    title: "NeuroPlanix",
    subtitle: "AI-Based Study Planner",
    description: "An intelligent study planning platform that generates personalized daily/weekly schedules, tracks progress, maintains study streaks, and provides AI-based guidance for students.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Firebase", "Gemini API", "JavaScript"],
    github: "https://github.com/sankalpa-dot/NeuroPlanix.git",
    liveDemo: "",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    status: "Ongoing",
    featured: true
  },
  {
    id: 2,
    title: "HungR",
    subtitle: "Online Catering System",
    description: "A responsive web application for providing monthly meal plans and catering services, especially targeting accessibility in remote areas.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/sannskaarr/HungR.git",
    liveDemo: "",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    status: "Completed",
    featured: true
  },
  {
    id: 3,
    title: "Bakers Kitchen",
    subtitle: "Online Bakery Website",
    description: "A web platform for showcasing bakery products with user-friendly UI and responsive design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/bipasa2003/bakers-kitchen.git",
    liveDemo: "",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    status: "Completed",
    featured: false
  },
  {
    id: 4,
    title: "Obys",
    subtitle: "Design Agency Website Clone",
    description: "A pixel-perfect frontend clone of a professional design agency website to demonstrate modern UI, animations, and responsive layout skills.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "",
    liveDemo: "",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    status: "Completed",
    featured: false
  }
];

export const skills = {
  frontend: [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Responsive Design", level: 90 }
  ],
  backend: [
    { name: "PHP", level: 75 },
    { name: "MySQL", level: 75 },
    { name: "Firebase", level: 70 },
    { name: "Node.js", level: 65 }
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 70 },
    { name: "API Integration", level: 75 }
  ]
};

export const experience = [
  {
    id: 1,
    title: "AI Project Development",
    organization: "Personal Project",
    period: "2024 - Present",
    description: "Developing NeuroPlanix, an AI-powered study planner using Gemini API for intelligent schedule generation and personalized learning recommendations.",
    type: "project"
  },
  {
    id: 2,
    title: "Full-Stack Development",
    organization: "Academic Projects",
    period: "2023 - 2024",
    description: "Built multiple full-stack web applications including catering systems and e-commerce platforms using PHP, MySQL, and modern JavaScript frameworks.",
    type: "academic"
  },
  {
    id: 3,
    title: "Frontend Development",
    organization: "Self-Learning & Practice",
    period: "2022 - Present",
    description: "Created responsive, pixel-perfect web interfaces with modern UI/UX practices, animations, and performance optimization.",
    type: "learning"
  }
];

export const achievements = [
  {
    id: 1,
    title: "NeuroPlanix AI Study Planner",
    description: "Developed an intelligent study planning system with AI integration",
    year: "2024"
  },
  {
    id: 2,
    title: "Multiple Full-Stack Projects",
    description: "Successfully completed 4+ production-ready web applications",
    year: "2023-2024"
  },
  {
    id: 3,
    title: "AI & API Integration",
    description: "Integrated Gemini API for intelligent features in web applications",
    year: "2024"
  }
];
