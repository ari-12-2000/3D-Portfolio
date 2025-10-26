"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import * as THREE from "three"

interface FloatingCardProps {
  position: [number, number, number]
  title: string
  subtitle?: string
  description?: string
  content?: any
  color: string
  delay: number
  index?: number
}

export default function FloatingCard({
  position,
  title,
  subtitle,
  description,
  content,
  color,
  delay,
  index = 0,
}: FloatingCardProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const initialY = position[1]

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() + delay
      meshRef.current.position.y = initialY + Math.sin(time * 0.4) * 0.8
      meshRef.current.rotation.x = Math.sin(time * 0.25) * 0.15
      meshRef.current.rotation.z = Math.cos(time * 0.15) * 0.15
      meshRef.current.rotation.y = Math.sin(time * 0.1) * 0.1

      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.15, 1.15, 1.15), 0.08)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08)
      }
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <boxGeometry args={[12, 14, 0.4]} />
      <meshStandardMaterial
        color={color}
        emissive={hovered ? color : "#000000"}
        emissiveIntensity={hovered ? 0.6 : 0.15}
        metalness={0.4}
        roughness={0.3}
        wireframe={false}
      />

      <Html transform scale={2} position={[0, 0, 0.25]} distanceFactor={1}>
        <div className="w-full max-w-2xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-8 border border-slate-600 shadow-2xl backdrop-blur-sm">
          {/* Header Section */}
          <div className="mb-4">
            <h2 className="text-3xl font-bold bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent mb-1">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl font-semibold" style={{ color }}>
                {subtitle}
              </p>
            )}
          </div>

          {description && <p className="text-base text-slate-300 mb-5 leading-relaxed">{description}</p>}

          {/* Content Section */}
          {content && (
            <div className="space-y-3">
              {typeof content === "string" ? (
                <p className="text-base text-slate-300 leading-relaxed">{content}</p>
              ) : (
                <>
                  {content.role && (
                    <div className="space-y-2">
                      <p className="text-base font-bold text-white">{content.role}</p>
                      <p className="text-base font-semibold" style={{ color }}>
                        {content.company}
                      </p>
                      <p className="text-sm text-slate-400">{content.period}</p>
                      <p className="text-base text-slate-300 mt-2 leading-relaxed">{content.highlight}</p>
                    </div>
                  )}
                  {content.name && (
                    <div className="space-y-2">
                      <p className="text-base font-bold text-white">{content.name}</p>
                      <p className="text-base text-slate-300 leading-relaxed">{content.description}</p>
                      <p className="text-sm text-slate-400 mt-2">{content.tech}</p>
                    </div>
                  )}
                  {content.school && (
                    <div className="space-y-2">
                      <p className="text-base font-bold text-white">{content.school}</p>
                      <p className="text-base text-slate-300">{content.degree}</p>
                      <p className="text-base font-semibold" style={{ color }}>
                        {content.cgpa}
                      </p>
                      <p className="text-sm text-slate-400">{content.period}</p>
                    </div>
                  )}
                  {Array.isArray(content) && (
                    <ul className="text-base text-slate-300 space-y-2">
                      {content.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 shrink-0" style={{ color }}>
                            ▸
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          )}

          {/* Accent Line */}
          <div
            className="mt-5 h-2 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${color}, ${color}33)`,
              boxShadow: `0 0 10px ${color}66`,
            }}
          />
        </div>
      </Html>
    </mesh>
  )
}
