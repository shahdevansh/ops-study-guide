'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FormulaBlock } from '@/components/content/FormulaBlock'

interface FormulaEntry {
  topic: string
  formulas: { name: string; formula: string; variables?: Record<string, string>; notes?: string }[]
}

export default function FormulasPage() {
  const [data, setData] = useState<FormulaEntry[]>([])

  useEffect(() => {
    fetch('/data/formulas.json').then(r => r.json()).then(setData).catch(console.error)
  }, [])

  const moduleColors: Record<string, string> = {
    'Capacity Analysis': 'border-blue-500',
    'Process Analysis': 'border-blue-500',
    "Little's Law": 'border-purple-500',
    'Factory Physics': 'border-purple-500',
    'Queueing': 'border-purple-500',
    'EOQ': 'border-green-500',
    'Newsvendor': 'border-green-500',
    'Supply Chain': 'border-green-500',
  }

  const getColor = (topic: string) => {
    for (const [key, val] of Object.entries(moduleColors)) {
      if (topic.toLowerCase().includes(key.toLowerCase())) return val
    }
    return 'border-gray-500'
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-cyan-400 hover:underline text-sm mb-4 block">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-2">📐 Formula Sheet</h1>
        <p className="text-gray-400 mb-8">Every formula from MBA 204, organized by topic. Bring this to your exam.</p>

        {data.length === 0 ? (
          <div className="text-gray-500">Loading formulas...</div>
        ) : (
          data.map((section, i) => (
            <div key={i} className={`mb-8 border-l-4 ${getColor(section.topic)} pl-4`}>
              <h2 className="text-xl font-semibold mb-4">{section.topic}</h2>
              <div className="space-y-4">
                {section.formulas.map((f, j) => (
                  <FormulaBlock
                    key={j}
                    name={f.name}
                    formula={f.formula}
                    variables={f.variables}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
