import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Contact = {
  phone: string;
  email: string;
  location: string;
};

type About = {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  contact: Contact;
};

type Skills = {
  title: string;
  color: string;
  categories: Record<string, string>;
};

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

type Experience = {
  title: string;
  color: string;
  items: ExperienceItem[];
};

type ProjectItem = {
  name: string;
  description: string;
  highlights: string[];
  tech: string;
};

type Projects = {
  title: string;
  color: string;
  items: ProjectItem[];
};

type EducationItem = {
  school: string;
  degree: string;
  cgpa: string;
  period: string;
  location: string;
  achievements: string[];
};

type Education = {
  title: string;
  color: string;
  items: EducationItem[];
};

export type ResumeData = {
  about: About;
  skills: Skills;
  experience: Experience;
  projects: Projects;
  education: Education;
};

export const resumeData: ResumeData = {
  about: {
    title: "Aritra Kumar Bara",
    subtitle: "Full Stack Developer",
    description:
      "Full Stack Developer with 1+ year of experience delivering end-to-end web applications using React, Next.js, Angular, Node.js, and SQL databases. Skilled in both frontend performance optimization and backend system design.",
    color: "#3b82f6",
    contact: {
      phone: "9330768649",
      email: "arikum12000@gmail.com",
      location: "Kolkata, West Bengal",
    },
  },
  skills: {
    title: "Technical Skills",
    color: "#8b5cf6",
    categories: {
      "Languages & Technologies":
        "Angular, JavaScript, TypeScript, Python, Java, C, HTML5, CSS3, SASS, Tailwind CSS, SQL, MongoDB, Node.js, Express.js, React.js, Redux Toolkit, Next.js, Next-Auth, Prisma, Mongoose, JWT, Cloudinary, CI/CD, JEST, Webpack, Next-Intl, React Testing Library, Eslint, Prettier, Material-UI, Razorpay",
      "Tools & Platforms": "Git, GitHub, Linux, Agile Scrum, SEO, UI/UX design principles, Docker",
    },
  },
  experience: {
    title: "Work Experience",
    color: "#ec4899",
    items: [
      {
        role: "Software Developer",
        company: "Orglens Consultancy Private Limited",
        period: "Sep 2024 – Present",
        location: "Noida, Uttar Pradesh",
        highlights: [
          "Built a scalable organizational network visualization tool adopted by 100K+ professionals, enabling HRs/managers to uncover hidden collaboration patterns and improve workforce decisions.",
          "Delivered a responsive learning platform (quizzes, webinars, self-paced courses) for 100K+ users, boosting learner engagement through dashboards, animations, and progress tracking.",
          "Developed secure, high-performance REST APIs with JWT auth and optimized database schemas, reducing response times under 250 ms and ensuring reliability under heavy traffic.",
          "Developed a graph-based analytics application used by leading organizations, helping HR teams discover invisible networks and strengthen team collaboration.",
        ],
      },
      {
        role: "Software Engineer Trainee",
        company: "Invenia Systems",
        period: "June 2024 – Aug 2024",
        location: "West Bengal, Kolkata",
        highlights: [
          "Built secure backend APIs with Express.js, implementing Bcrypt.js for password encryption, JWT for admin authorization, and scalable middleware, ensuring data integrity and access control.",
          "Designed and developed responsive administrative dashboards in Angular 18 + Tailwind CSS, enabling production teams to review and filter batch reports with search and pagination.",
          "Created an equipment monitoring dashboard for real-time visibility into production processes, improving operational efficiency.",
          "Developed a scalable document-oriented data model with MongoDB + Mongoose, optimized for fast queries and high data throughput.",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    color: "#f59e0b",
    items: [
      {
        name: "EduPortal",
        description:
          "Built a scalable, responsive learning platform with quizzes, self-paced courses, learner dashboards (tracking achievements, progress, and certifications), and a seamless payment system.",
        highlights: [
          "Implemented secure authentication & authorization with JWT + Bcrypt.js, profile management with Cloudinary uploads, and role-based access for admin/non-admin users.",
          "Delivered engaging UI with Next.js, Tailwind CSS, lucide-react, shadcdn, and interactive features like animations, accordions, and loading skeletons.",
        ],
        tech: "Next.js, Node.js, Prisma, PostgreSQL, Razorpay, Cloudinary",
      },
    ],
  },
  education: {
    title: "Education",
    color: "#10b981",
    items: [
      {
        school: "Bengal Institute of Technology",
        degree: "B.Tech in Computer Science & Engineering",
        cgpa: "CGPA: 9.15 / 10.00",
        period: "Jul 2019 – Jul 2023",
        location: "Kolkata, West Bengal",
        achievements: ["5 star coder in Hackerrank", "Shortlisted for Smart India Hackathon 2022"],
      },
    ],
  },
}
