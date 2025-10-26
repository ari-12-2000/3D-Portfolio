"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import { Suspense, useState } from "react"

import Navigation from "@/components/navigation"
import InfoPanel from "@/components/info-panel"
import ComputerModel from "@/components/computer-model"
import DetailedView from "@/components/detailed-view"


export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [showDetailedView, setShowDetailedView] = useState(false)

  return (
    <div className="w-full h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 opacity-90" />
      <div className="absolute inset-0 bg-linear-to-t from-blue-950/20 via-transparent to-purple-950/20 opacity-50" />

      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* 3D Canvas */}
      <Canvas className="w-full h-full relative z-10">
        <PerspectiveCamera makeDefault position={[0, 2, 15]} />
        <Environment preset="night" />
        <Suspense fallback={null}>
          <ComputerModel activeSection={activeSection} onSectionClick={setActiveSection} />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate
          autoRotateSpeed={0.5}
          maxDistance={50}
          minDistance={2}
        />
      </Canvas>

      {/* Info Panel */}
      <InfoPanel activeSection={activeSection} />

      {/* Detailed View Modal */}
      {showDetailedView && <DetailedView activeSection={activeSection} onClose={() => setShowDetailedView(false)} />}

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />

      {/* View Details Button */}
      <button
        onClick={() => setShowDetailedView(true)}
        className="fixed bottom-24 right-6 z-40 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
      >
        View Details
      </button>
    </div>
  )
}
