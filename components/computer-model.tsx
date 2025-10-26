"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import type * as THREE from "three"
import { resumeData } from "@/lib/utils"

interface ComputerModelProps {
  activeSection: string
  onSectionClick: (section: string) => void
}


export default function ComputerModel({ activeSection, onSectionClick }: ComputerModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.3
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.5
    }
  })

  const sections = ["about", "skills", "experience", "projects", "education"]
  const data= resumeData[activeSection as keyof typeof resumeData]

  return (
    <group ref={groupRef}>
      {/* Monitor Stand */}
      <mesh position={[0, -3, 0]}>
        <boxGeometry args={[0.5, 2, 0.5]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Monitor Base */}
      <mesh position={[0, -2.2, 0]}>
        <boxGeometry args={[6, 0.3, 2]} />
        <meshStandardMaterial color="#16213e" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Monitor Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 7, 0.5]} />
        <meshStandardMaterial color="#0f3460" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Monitor Screen - Black Background */}
      <mesh position={[0, 0, 0.3]}>
        <boxGeometry args={[9.5, 6.5, 0.1]} />
        <meshStandardMaterial color="#000000" emissive="#111111" emissiveIntensity={0.5} />
      </mesh>

      {/* Screen Content */}
      <Html transform scale={1} position={[0, 0, 0.4]} distanceFactor={1}>
        <div className="w-[950px] h-[650px] bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-8 rounded-lg overflow-hidden flex flex-col">
          {/* Header */}
          <div className="mb-6 pb-4 border-b border-slate-600">
            <h1 className="text-4xl font-bold bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {data.title}
            </h1>
            {data.subtitle && (
              <p className="text-xl font-semibold mt-2" style={{ color: data.color }}>
                {data.subtitle}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto mb-6">
            {data.description && <p className="text-lg text-slate-300 mb-6 leading-relaxed">{data.description}</p>}

            {data.items && (
              <div className="space-y-4">
                {data.items.map((item: any, index: number) => (
                  <div key={index} className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                    {typeof item === "string" ? (
                      <p className="text-slate-300">{item}</p>
                    ) : (
                      <>
                        {item.role && (
                          <>
                            <p className="text-lg font-bold text-white">{item.role}</p>
                            <p className="text-base font-semibold" style={{ color: data.color }}>
                              {item.company}
                            </p>
                            <p className="text-sm text-slate-400">{item.period}</p>
                            <p className="text-slate-300 mt-2">{item.highlight}</p>
                          </>
                        )}
                        {item.name && (
                          <>
                            <p className="text-lg font-bold text-white">{item.name}</p>
                            <p className="text-slate-300">{item.description}</p>
                            <p className="text-sm text-slate-400 mt-2">{item.tech}</p>
                          </>
                        )}
                        {item.school && (
                          <>
                            <p className="text-lg font-bold text-white">{item.school}</p>
                            <p className="text-slate-300">{item.degree}</p>
                            <p className="text-base font-semibold" style={{ color: data.color }}>
                              {item.cgpa}
                            </p>
                            <p className="text-sm text-slate-400">{item.period}</p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section Buttons */}
          <div className="flex gap-2 flex-wrap">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onSectionClick(section)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                  activeSection === section
                    ? "text-white shadow-lg"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
                style={{
                  backgroundColor: activeSection === section ? data.color : "transparent",
                  boxShadow: activeSection === section ? `0 0 20px ${data.color}80` : "none",
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </Html>

      {/* Glow Effect */}
      <mesh position={[0, 0, 0.5]}>
        <boxGeometry args={[10.5, 7.5, 0.1]} />
        <meshStandardMaterial
          color={data.color}
          emissive={data.color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}
