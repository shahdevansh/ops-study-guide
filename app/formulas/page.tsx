'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FormulaBlock } from '@/components/content/FormulaBlock'

interface FormulaItem {
  name: string
  formula: string
  variables?: Record<string, string>
  description?: string
  notes?: string
}

interface FormulaSection {
  key: string
  title: string
  formulas: FormulaItem[]
}

export default function FormulasPage() {
  const [sections, setSections] = useState<FormulaSection[]>([])

  useEffect(() => {
    fetch('/data/formulas.json')
      .then(r => r.json())
      .then(data => {
        // Handle both array and dict formats
        if (Array.isArray(data)) {
          setSections(data.map((d: { topic?: string; formulas?: FormulaItem[] }, i: number) => ({
            key: String(i),
            title: d.topic || `Section ${i + 1}`,
            formulas: d.formulas || []
          })))
        } else if (typeof data === 'object' && data !== null) {
          // Dict format: { capacityAnalysis: { title, formulas }, ... }
          const transformed = Object.entries(data).map(([key, value]) => {
            const section = value as { title?: string; formulas?: FormulaItem[] }
            return {
              key,
              title: section.title || key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()),
              formulas: section.formulas || []
            }
          })
          setSections(transformed)
        }
      })
      .catch(console.error)
  }, [])

  const moduleColors: Record<string, string> = {
    'capacity': 'border-blue-500 bg-blue-950/30',
    'process': 'border-blue-500 bg-blue-950/30',
    'little': 'border-purple-500 bg-purple-950/30',
    'factory': 'border-purple-500 bg-purple-950/30',
    'queue': 'border-purple-500 bg-purple-950/30',
    'eoq': 'border-green-500 bg-green-950/30',
    'newsvendor': 'border-green-500 bg-green-950/30',
    'supply': 'border-green-500 bg-green-950/30',
  }

  const getColor = (key: string) => {
    const lower = key.toLowerCase()
    for (const [match, color] of Object.entries(moduleColors)) {
      if (lower.includes(match)) return color
    }
    return 'border-gray-500 bg-gray-950/30'
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-cyan-400 hover:underline text-sm mb-4 block">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-2">📐 Formula Sheet</h1>
        <p className="text-gray-400 mb-2">Every formula from MBA 204, organized by topic. Bring this to your exam.</p>
        <p className="text-sm text-gray-500 mb-8">💡 Tip: Download the <a href="/templates/final-review.xlsx" className="text-cyan-400 hover:underline">final-review.xlsx</a> template with all these formulas in Excel.</p>

        {/* Quick nav */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sections.map(s => (
            <a key={s.key} href={`#${s.key}`} className="text-xs px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-full transition">
              {s.title}
            </a>
          ))}
        </div>

        {sections.length === 0 ? (
          <div className="text-gray-500">Loading formulas...</div>
        ) : (
          sections.map(section => (
            <div key={section.key} id={section.key} className={`mb-10 border-l-4 ${getColor(section.key)} rounded-r-lg p-6`}>
              <h2 className="text-xl font-bold mb-6">{section.title}</h2>
              <div className="space-y-6">
                {section.formulas.map((f, j) => (
                  <FormulaBlock
                    key={j}
                    name={f.name}
                    formula={f.formula}
                    variables={f.variables}
                    description={f.description}
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
