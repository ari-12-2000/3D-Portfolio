"use client"

interface InfoPanelProps {
  activeSection: string
}

export default function InfoPanel({ activeSection }: InfoPanelProps) {
  const contactInfo = {
    phone: "9330768649",
    email: "arikum12000@gmail.com",
    location: "Kolkata, West Bengal",
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent backdrop-blur-sm border-t border-slate-800/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer">
            <span className="text-lg">📞</span>
            <span className="text-sm">{contactInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer">
            <span className="text-lg">✉️</span>
            <span className="text-sm">{contactInfo.email}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer">
            <span className="text-lg">📍</span>
            <span className="text-sm">{contactInfo.location}</span>
          </div>
        </div>

        <div className="text-slate-500 text-xs">💡 Rotate • Zoom • Explore</div>
      </div>
    </div>
  )
}
