"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import FloatingCard from "./floating-card"


const resumeData = {
  about: {
    title: "Aritra Kumar Bara",
    subtitle: "Full Stack Developer",
    description: "Full Stack Developer with 1+ year of experience delivering end-to-end web applications using React, Next.js, Angular, Node.js, and SQL databases. Skilled in both frontend performance optimization and backend system design.",
    color: "#3b82f6",
  },
  skills: {
    title: "Technical Skills",
    items: [
      "React.js, Next.js, Angular",
      "Node.js, Express.js",
      "TypeScript, JavaScript",
      "PostgreSQL, MongoDB",
      "Tailwind CSS, Material-UI",
      "Docker, CI/CD",
    ],
    color: "#8b5cf6",
  },
  experience: {
    title: "Work Experience",
    items: [
      {
        role: "Software Developer",
        company: "Orglens Consultancy",
        period: "Sep 2024 – Present",
        highlight: "Built scalable org network visualization for 100K+ users",
      },
      {
        role: "Software Engineer Trainee",
        company: "Invenia Systems",
        period: "June 2024 – Aug 2024",
        highlight: "Developed responsive dashboards with Angular 18",
      },
    ],
    color: "#ec4899",
  },
  projects: {
    title: "Projects",
    items: [
      {
        name: "EduPortal",
        description: "Scalable learning platform with quizzes, courses, and payments",
        tech: "Next.js, Node.js, Prisma, PostgreSQL, Razorpay",
      },
    ],
    color: "#f59e0b",
  },
  education: {
    title: "Education",
    items: [
      {
        school: "Bengal Institute of Technology",
        degree: "B.Tech in Computer Science & Engineering",
        cgpa: "CGPA: 9.15 / 10.00",
        period: "Jul 2019 – Jul 2023",
      },
    ],
    color: "#10b981",
  },
}

export default function Scene({ activeSection }: { activeSection: string }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005
    }
  })

  const getSectionData = () => {
    switch (activeSection) {
      case "skills":
        return resumeData.skills
      case "experience":
        return resumeData.experience
      case "projects":
        return resumeData.projects
      case "education":
        return resumeData.education
      default:
        return resumeData.about
    }
  }

  const data = getSectionData()
  const cardCount =
    activeSection === "about" ? 1 : ("items" in data ? data.items?.length ?? 1 : 1)

  // Ensure we have a properly-typed items array to iterate over when present
  const items = ("items" in data ? (data.items ?? []) : []) 
  return (
    <group ref={groupRef}>
      {/* Ambient Light */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#8b5cf6" />

      {/* Floating Cards */}
      {activeSection === "about" ? (
        <FloatingCard
          position={[0, 0, 0]}
          title={resumeData.about.title}
          subtitle={resumeData.about.subtitle}
          description={resumeData.about.description}
          color={resumeData.about.color}
          delay={0}
        />
      ) : (
        items.map((item: any, index: number) => {
          const angle = (index / cardCount) * Math.PI * 2
          const radius = 5
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          const y = Math.sin(index * 0.5) * 1.5

          return (
            <FloatingCard
              key={index}
              position={[x, y, z]}
              title={data.title}
              content={item}
              color={data.color}
              delay={index * 0.1}
              index={index}
            />
          )
        })
      )}
    </group>
  )
}
