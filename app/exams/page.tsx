'use client'

import Link from 'next/link'

const examSections = [
  {
    title: '📝 Midterm 2026 Solutions',
    href: '/exams/midterm-2026',
    desc: 'Factory Physics capacity, CQDF strategy, Little\'s Law (Grohe Lux). Full walkthrough.',
    badge: 'Solutions',
    color: 'bg-blue-900/50 border-blue-500',
  },
  {
    title: '🎯 Final Exam Review Problems',
    href: '/exams/final-review',
    desc: 'Queueing, EOQ, Newsvendor, Strategy — worked problems from the review session.',
    badge: 'Must-Do',
    color: 'bg-red-900/50 border-red-500',
  },
  {
    title: '📋 Review Session Notes & Exam Info',
    href: '/exams/review-notes',
    desc: 'Exam format, logistics, study tips, and topic summaries from the review session.',
    badge: 'Logistics',
    color: 'bg-yellow-900/50 border-yellow-500',
  },
]

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="text-cyan-400 hover:underline text-sm mb-4 block">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-2">🎓 Exam Prep Hub</h1>
        <p className="text-gray-400 mb-8">Everything you need for the final. Wednesday, March 11 @ 8:00 AM.</p>

        <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 mb-8">
          <h3 className="font-bold text-red-300 mb-2">⚠️ Exam Format Reminders</h3>
          <ul className="text-sm text-red-200 space-y-1">
            <li>• <strong>Digital, Excel-based</strong> — answers in provided template</li>
            <li>• <strong>Closed internet</strong> — download exam, then disable WiFi</li>
            <li>• <strong>Open notes</strong> from THIS course only — bring your Excel templates!</li>
            <li>• <strong>No AI</strong> allowed during exam</li>
            <li>• <strong>Show your work</strong> for partial credit</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {examSections.map((s) => (
            <Link key={s.href} href={s.href} className={`block border rounded-lg p-6 hover:scale-[1.01] transition ${s.color}`}>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                  <p className="text-gray-300 text-sm">{s.desc}</p>
                </div>
                <span className="text-xs font-bold bg-white/10 rounded px-2 py-1">{s.badge}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <Link href="/formulas" className="block bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition">
            <span className="text-2xl">📐</span>
            <p className="font-semibold mt-1">Formula Sheet</p>
          </Link>
          <Link href="/calculators" className="block bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition">
            <span className="text-2xl">🧮</span>
            <p className="font-semibold mt-1">Calculators</p>
          </Link>
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
          <h3 className="font-bold mb-2">📊 Excel Templates</h3>
          <p className="text-sm text-gray-400 mb-3">Download pre-built templates with yellow inputs and green outputs.</p>
          <div className="grid grid-cols-2 gap-2">
            {['capacity-analysis', 'factory-physics', 'queueing', 'eoq', 'newsvendor', 'supply-chain-strategy', 'final-review'].map(t => (
              <a key={t} href={`/templates/${t}.xlsx`} className="text-sm text-cyan-400 hover:underline">📥 {t}.xlsx</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
