'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface ReviewData {
  title?: string
  examFormat?: {
    date: string
    format: string
    materials: string
    restrictions: string
    submission: string
    partialCredit: string
    locations: Record<string, string>
  }
  topicSummaries?: { topic: string; content: string; conceptIds?: string[] }[]
  studyTips?: string[]
}

export default function ReviewNotesPage() {
  const [data, setData] = useState<ReviewData | null>(null)

  useEffect(() => {
    fetch('/data/exams/review-notes.json').then(r => r.json()).then(setData).catch(console.error)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/exams" className="text-cyan-400 hover:underline text-sm mb-4 block">← Back to Exams</Link>
        <h1 className="text-3xl font-bold mb-2">📋 Review Session Notes &amp; Exam Info</h1>

        {!data ? (
          <div className="text-gray-500">Loading...</div>
        ) : (
          <>
            {data.examFormat && (
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8">
                <h2 className="text-xl font-bold mb-4">📅 Exam Logistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div><strong className="text-gray-400">Date:</strong> {data.examFormat.date}</div>
                  <div><strong className="text-gray-400">Format:</strong> {data.examFormat.format}</div>
                  <div><strong className="text-gray-400">Materials:</strong> {data.examFormat.materials}</div>
                  <div><strong className="text-gray-400">Restrictions:</strong> {data.examFormat.restrictions}</div>
                  <div className="col-span-full"><strong className="text-gray-400">Submission:</strong> {data.examFormat.submission}</div>
                  <div className="col-span-full"><strong className="text-gray-400">Partial Credit:</strong> {data.examFormat.partialCredit}</div>
                </div>
                {data.examFormat.locations && (
                  <div className="mt-4">
                    <strong className="text-gray-400 text-sm">Exam Rooms:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {Object.entries(data.examFormat.locations).map(([section, room]) => (
                        <span key={section} className={`text-xs px-3 py-1 rounded-full ${section === 'Axe' ? 'bg-cyan-900 text-cyan-300 ring-1 ring-cyan-500' : 'bg-gray-800 text-gray-300'}`}>
                          {section}: {room}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {data.studyTips && data.studyTips.length > 0 && (
              <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold mb-3">💡 Study Tips</h2>
                <ul className="space-y-2 text-sm">
                  {data.studyTips.map((tip, i) => (
                    <li key={i} className="text-yellow-200">• {tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {data.topicSummaries && data.topicSummaries.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-4">📚 Topic Summaries</h2>
                <div className="space-y-4">
                  {data.topicSummaries.map((s, i) => (
                    <div key={i} className="bg-gray-900 rounded-lg p-5 border border-gray-800">
                      <h3 className="font-semibold mb-2">{s.topic}</h3>
                      <p className="text-sm text-gray-300 whitespace-pre-line">{s.content}</p>
                      {s.conceptIds && s.conceptIds.length > 0 && (
                        <div className="flex gap-1 mt-2">
                          {s.conceptIds.map(c => (
                            <span key={c} className="text-xs bg-gray-700 rounded px-1.5 py-0.5">{c}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
