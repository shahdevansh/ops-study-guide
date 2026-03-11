'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Concept {
  id: string
  name: string
  module: string
  definition: string
  explanation15?: string
  formulas?: string[]
  lectureSlug?: string
  prerequisites?: string[]
  relatedConcepts?: string[]
  testedBy?: string[]
  priority: string
  isSecondHalf?: boolean
  keyInsights?: string[]
}

const moduleLabels: Record<string, { name: string; color: string; bg: string }> = {
  A: { name: 'Process Analysis', color: 'text-blue-400', bg: 'bg-blue-900/50 border-blue-500' },
  B: { name: 'Variability', color: 'text-purple-400', bg: 'bg-purple-900/50 border-purple-500' },
  C: { name: 'Supply Chain', color: 'text-green-400', bg: 'bg-green-900/50 border-green-500' },
}

const priorityColors: Record<string, string> = {
  HIGH: 'bg-red-900 text-red-300',
  MEDIUM: 'bg-yellow-900 text-yellow-300',
  LOW: 'bg-gray-700 text-gray-300',
}

export default function ConceptsPage() {
  const [concepts, setConcepts] = useState<Concept[]>([])
  const [filter, setFilter] = useState<string>('all')
  const [priorityFilter, setPriorityFilter] = useState<string>('all')
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    fetch('/data/concepts.json').then(r => r.json()).then(d => {
      setConcepts(Array.isArray(d) ? d : d.concepts || [])
    }).catch(console.error)
  }, [])

  const filtered = concepts.filter(c => {
    if (filter !== 'all' && c.module !== filter) return false
    if (priorityFilter !== 'all' && c.priority !== priorityFilter) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link href="/" className="text-cyan-400 hover:underline text-sm mb-4 block">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-2">🧠 Concept Encyclopedia</h1>
        <p className="text-gray-400 mb-6">{concepts.length} concepts across 3 modules. Click any card to expand.</p>

        <div className="flex flex-wrap gap-2 mb-6">
          <button onClick={() => setFilter('all')} className={`text-sm px-3 py-1 rounded-full ${filter === 'all' ? 'bg-white text-black' : 'bg-gray-800 text-gray-300'}`}>All Modules</button>
          {Object.entries(moduleLabels).map(([key, val]) => (
            <button key={key} onClick={() => setFilter(key)} className={`text-sm px-3 py-1 rounded-full ${filter === key ? val.bg + ' border' : 'bg-gray-800 text-gray-300'}`}>{val.name}</button>
          ))}
          <span className="text-gray-600 mx-2">|</span>
          <button onClick={() => setPriorityFilter('all')} className={`text-sm px-3 py-1 rounded-full ${priorityFilter === 'all' ? 'bg-white text-black' : 'bg-gray-800 text-gray-300'}`}>All Priorities</button>
          {['HIGH', 'MEDIUM', 'LOW'].map(p => (
            <button key={p} onClick={() => setPriorityFilter(p)} className={`text-sm px-3 py-1 rounded-full ${priorityFilter === p ? priorityColors[p] : 'bg-gray-800 text-gray-300'}`}>{p}</button>
          ))}
        </div>

        <div className="grid gap-3">
          {filtered.map(c => {
            const mod = moduleLabels[c.module] || moduleLabels.A
            const isExpanded = expanded === c.id
            return (
              <div key={c.id} onClick={() => setExpanded(isExpanded ? null : c.id)} className={`bg-gray-900 rounded-lg p-4 border border-gray-800 cursor-pointer hover:border-gray-600 transition ${isExpanded ? 'ring-1 ring-cyan-500' : ''}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-mono ${mod.color}`}>{c.id}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${priorityColors[c.priority] || ''}`}>{c.priority}</span>
                  {c.isSecondHalf && <span className="text-xs bg-orange-900 text-orange-300 px-1.5 py-0.5 rounded">2nd Half</span>}
                  {c.testedBy && c.testedBy.length > 0 && (
                    <span className="text-xs text-gray-500">📝 {c.testedBy.join(', ')}</span>
                  )}
                </div>
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{c.definition}</p>

                {isExpanded && (
                  <div className="mt-4 space-y-3 border-t border-gray-800 pt-4">
                    {c.explanation15 && (
                      <div>
                        <h4 className="text-xs font-bold text-cyan-400 mb-1">Explain Like I&apos;m 15</h4>
                        <p className="text-sm text-gray-300">{c.explanation15}</p>
                      </div>
                    )}
                    {c.formulas && c.formulas.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-cyan-400 mb-1">Formulas</h4>
                        <div className="space-y-1">
                          {c.formulas.map((f, i) => (
                            <code key={i} className="block text-sm bg-gray-800 px-2 py-1 rounded font-mono">{f}</code>
                          ))}
                        </div>
                      </div>
                    )}
                    {c.keyInsights && c.keyInsights.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-yellow-400 mb-1">💡 Key Insights</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {c.keyInsights.map((ins, i) => <li key={i}>• {ins}</li>)}
                        </ul>
                      </div>
                    )}
                    {c.lectureSlug && (
                      <Link href={`/lectures/${c.lectureSlug}`} onClick={e => e.stopPropagation()} className="inline-block text-sm text-cyan-400 hover:underline mt-2">
                        → Go to lecture →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
