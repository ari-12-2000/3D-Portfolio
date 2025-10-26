"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import FloatingCard from "./floating-card"
import { resumeData } from "@/lib/utils"


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
