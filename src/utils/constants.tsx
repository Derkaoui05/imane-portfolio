import {
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Paintbrush,
  GitBranch,
  Package,
  CheckCircle,
  Code2,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}
interface NavLink {
  id: number;
  name: string;
  path: string;
}

interface Education {
  degree: string;
  school: string;
  year: string;
}

interface Experience {
  company: string;
  role: string;
  description: string;
  duration: string;
}

interface Skills {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
}

interface ContactLink {
  platform: string;
  url: string;
  icon: string;
}

interface Services {
  text: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const data = {
  personalInfo: {
    name: "Derkaoui Yassir",
    role: "Junior Developer",
    bio: "I'm a passionate web developer with expertise in React, Next.js, and TypeScript. With a keen eye for design and a love for clean code, I create engaging and performant web applications that deliver exceptional user experiences.",
    location: "Morocco",
  } as PersonalInfo,

  Services: [
    {
      text: "Web Development",
    },
    {
      text: "UI/UX Design",
    },
    {
      text: "Mobile App Development",
    },
    {
      text: "API Integration",
    },
    {
      text: "E-commerce Solutions",
    },
    {
      text: "Performance Optimization",
    },
    {
      text: "SEO",
    },
    {
      text: "Cloud Services",
    },
  ] as Services[],

  NavLink: [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Work",
      path: "/work",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ] as NavLink[],

  faqData: [
    {
      question: "Can you work with clients remotely?",
      answer:
        "Yes, I have extensive experience working with clients remotely using various collaboration tools and communication platforms.",
    },
    {
      question:
        "How long does it typically take to complete a web design project?",
      answer:
        "The timeline for a web design project can vary depending on its complexity and scope. Typically, a basic website might take 2-4 weeks, while more complex projects could take 2-3 months or more.",
    },
    {
      question: "Do you offer website maintenance services?",
      answer:
        "Yes, I offer website maintenance services to ensure your site remains up-to-date, secure, and performs optimally.",
    },
    {
      question: "Can you optimize my website for search engines?",
      answer:
        "I implement SEO best practices in all web projects to improve visibility and ranking in search engine results.",
    },
  ] as FAQItem[],

  skills: [
    {
      icon: <Code2 className="w-6 h-6 mb-2" />,
      title: "Programming Languages",
      description:
        "I am proficient in JavaScript, TypeScript, and Python, which I use to develop both frontend and backend applications. These languages allow me to build scalable, maintainable, and efficient software solutions.",
    },
    {
      icon: <Layout className="w-6 h-6 mb-2" />,
      title: "Frontend Development",
      description:
        "I specialize in React, Next.js, TypeScript, and Three.js, creating seamless user experiences with modern, interactive, and responsive interfaces. My focus is on performance and smooth design, ensuring exceptional web interactions.",
    },
    {
      icon: <Server className="w-6 h-6 mb-2" />,
      title: "Backend",
      description:
        "With experience in Node.js, Laravel, and PHP, I develop reliable backend systems and APIs (RESTful & GraphQL) that integrate smoothly with frontend applications, ensuring efficient data exchange and robust logic implementation.",
    },
    {
      icon: <Smartphone className="w-6 h-6 mb-2" />,
      title: "Mobile",
      description:
        "I build cross-platform mobile apps using React Native and develop native Android applications with Kotlin. My goal is to provide smooth and consistent user experiences across devices, ensuring performance and usability.",
    },
    {
      icon: <Database className="w-6 h-6 mb-2" />,
      title: "Databases",
      description:
        "I work with various databases, including MariaDB, MySQL, MongoDB, PostgreSQL, and SQLite, to design efficient data structures that enable seamless data access and storage for complex applications.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 mb-2" />,
      title: "Testing Tools",
      description:
        "I ensure code quality using Jest for frontend testing and Mocha for backend tests. I also use Cypress for end-to-end testing, guaranteeing smooth interactions across the entire application.",
    },
    {
      icon: <Package className="w-6 h-6 mb-2" />,
      title: "DevOps and Microservices",
      description:
        "I implement DevOps practices using Docker and Docker Compose to manage deployments efficiently. I specialize in building microservices with Node.js and handling asynchronous processes with RabbitMQ.",
    },
    {
      icon: <Cloud className="w-6 h-6 mb-2" />,
      title: "Cloud & Hosting Platforms",
      description:
        "I deploy applications on Vercel, Netlify, and AWS, ensuring they are fast, secure, and scalable. My experience with CI/CD pipelines allows me to deliver updates seamlessly and efficiently.",
    },
    {
      icon: <GitBranch className="w-6 h-6 mb-2" />,
      title: "Version Control & Collaboration Tools",
      description:
        "I use Git for version control and collaborate on projects via GitHub and GitLab. My experience in Agile environments ensures I stay organized and productive during development sprints.",
    },
    {
      icon: <Paintbrush className="w-6 h-6 mb-2" />,
      title: "UI/UX Tools",
      description:
        "I design and style interfaces using Tailwind CSS and Material UI. With Framer, I prototype and ensure that every design aligns with modern standards, providing users with visually appealing and consistent experiences.",
    },
  ] as Skills[],

  projects: [
    {
      id: 1,
      title: "E-commerce Store",
      description:
        "Built a full-fledged store with WordPress and custom styling.",
      technologies: ["WordPress", "CSS", "JavaScript"],
      image: "/images/project1.png",
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Shelter Project Platform",
      description:
        "Developed a platform inspired by the Shelter Projects series.",
      technologies: ["React", "Tailwind CSS"],
      image: "/images/project2.png",
      link: "https://shelterprojects-dp.mayaapps.site",
    },
  ] as Project[],

  resume: {
    education: [
      {
        degree: "bachelor's degree in physics",
        school: "Ocean Atlantic",
        year: "2022",
      },
      {
        degree: "Specialized Technician in Software Development",
        school: "IFIAG",
        year: "2024",
      },
    ] as Education[],
    experiences: [
      {
        company: "2mag Agency",
        role: "Web Development Intern",
        description: "Worked on an e-commerce website using WordPress.",
        duration: "1 month",
      },
    ] as Experience[],
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "WordPress"],
  },

  contactLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/derkaoui-yassir/",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/derkaoui05",
      icon: "github",
    },
    {
      platform: "Email",
      url: "mailto:derkaouidev@gmail.com",
      icon: "mail",
    },
  ] as ContactLink[],
};
