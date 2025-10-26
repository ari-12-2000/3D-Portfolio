"use client"

const resumeData = {
  about: {
    title: "Aritra Kumar Bara",
    subtitle: "Full Stack Developer",
    description:
      "1+ year of experience delivering end-to-end web applications using React, Next.js, Angular, Node.js, and SQL databases. Skilled in both frontend performance optimization and backend system design.",
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

interface DetailedViewProps {
  activeSection: string
  onClose: () => void
}

export default function DetailedView({ activeSection, onClose }: DetailedViewProps) {
  const data = resumeData[activeSection as keyof typeof resumeData]

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-600 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-linear-to-br from-slate-900 to-slate-800 p-6 border-b border-slate-600 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-linear-to-br from-white to-slate-300 bg-clip-text text-transparent">
              {data.title}
            </h1>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors text-2xl">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {activeSection === "about" && (
            <>
              <div>
                <p className="text-lg text-slate-300 leading-relaxed">{data.description}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                  <p className="text-sm text-slate-400 mb-1">Phone</p>
                  <p className="text-white font-semibold">{data.contact.phone}</p>
                </div>
                <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <p className="text-white font-semibold break-all">{data.contact.email}</p>
                </div>
                <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p className="text-white font-semibold">{data.contact.location}</p>
                </div>
              </div>
            </>
          )}

          {activeSection === "skills" && (
            <div className="space-y-6">
              {Object.entries(data.categories).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-xl font-bold mb-3" style={{ color: data.color }}>
                    {category}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{skills}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === "experience" && (
            <div className="space-y-6">
              {data.items.map((item, index) => (
                <div key={index} className="bg-slate-700/20 p-6 rounded-lg border border-slate-600/50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                      <p className="text-lg font-semibold" style={{ color: data.color }}>
                        {item.company}
                      </p>
                    </div>
                    <span className="text-sm text-slate-400">{item.period}</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">{item.location}</p>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-slate-300">
                        <span className="flex-shrink-0 mt-1" style={{ color: data.color }}>
                          ▸
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeSection === "projects" && (
            <div className="space-y-6">
              {data.items.map((item, index) => (
                <div key={index} className="bg-slate-700/20 p-6 rounded-lg border border-slate-600/50">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-slate-300 mb-4">{item.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-400 mb-2">Key Features:</p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <span className="flex-shrink-0 mt-1" style={{ color: data.color }}>
                            ▸
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-slate-400">
                    <span className="font-semibold">Tech Stack:</span> {item.tech}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeSection === "education" && (
            <div className="space-y-6">
              {data.items.map((item, index) => (
                <div key={index} className="bg-slate-700/20 p-6 rounded-lg border border-slate-600/50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{item.school}</h3>
                      <p className="text-lg text-slate-300">{item.degree}</p>
                    </div>
                    <span className="text-sm text-slate-400">{item.period}</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">{item.location}</p>
                  <p className="text-base font-semibold mb-4" style={{ color: data.color }}>
                    {item.cgpa}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-slate-400 mb-2">Achievements:</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <span className="flex-shrink-0 mt-1" style={{ color: data.color }}>
                            ★
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
