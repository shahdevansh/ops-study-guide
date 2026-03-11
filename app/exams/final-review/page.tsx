'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PracticeToggle } from '@/components/content/PracticeToggle'

interface ExamQuestion {
  questionText: string
  solutionText: string
  conceptIds: string[]
  type: string
  topic?: string
}

interface ExamData {
  title?: string
  questions?: ExamQuestion[]
  problems?: ExamQuestion[]
}

export default function FinalReviewPage() {
  const [data, setData] = useState<ExamData | null>(null)

  useEffect(() => {
    fetch('/data/exams/final-review.json').then(r => r.json()).then(setData).catch(console.error)
  }, [])

  const questions = data?.questions || data?.problems || []

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/exams" className="text-cyan-400 hover:underline text-sm mb-4 block">← Back to Exams</Link>
        <h1 className="text-3xl font-bold mb-2">🎯 Final Exam Review Problems</h1>
        <p className="text-gray-400 mb-8">Worked problems from the final exam review session. These are the closest thing to a practice final.</p>

        <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-8">
          <p className="text-yellow-200 text-sm">💡 <strong>Tip:</strong> Try each problem yourself before revealing the solution. Use the <Link href="/calculators" className="underline">calculators</Link> to check your work.</p>
        </div>

        {!data ? (
          <div className="text-gray-500">Loading...</div>
        ) : (
          <div className="space-y-6">
            {questions.map((q: ExamQuestion, i: number) => (
              <div key={i} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${q.type === 'quantitative' ? 'bg-red-900 text-red-300' : 'bg-purple-900 text-purple-300'}`}>
                    {q.type}
                  </span>
                  {q.topic && <span className="text-xs text-gray-500">{q.topic}</span>}
                  {q.conceptIds?.map(c => (
                    <span key={c} className="text-xs bg-gray-700 rounded px-1.5 py-0.5">{c}</span>
                  ))}
                </div>
                <PracticeToggle
                  question={q.questionText}
                  solution={q.solutionText}
                  source="Final Exam Review"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
