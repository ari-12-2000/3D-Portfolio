"use client"

import { resumeData } from "@/lib/utils"

interface DetailedViewProps {
  activeSection: string
  onClose: () => void
}

export default function DetailedView({ activeSection, onClose }: DetailedViewProps) {
  const data:ResumeData = resumeData[activeSection as keyof typeof resumeData]

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
