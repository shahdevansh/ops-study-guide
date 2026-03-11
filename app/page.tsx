'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { loadConcepts } from '@/lib/data'
import { Concept } from '@/lib/types'
import { getModuleColor, getPriorityIcon } from '@/lib/data'

export default function HomePage() {
  const [concepts, setConcepts] = useState<Concept[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const conceptsData = await loadConcepts()
        setConcepts(conceptsData)
      } catch (error) {
        console.error('Failed to load concepts:', error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Calculate exam countdown to Wed Mar 11, 2026, 8:00 AM PST
  const examDate = new Date('2026-03-11T08:00:00-08:00')
  const now = new Date()
  const timeUntilExam = examDate.getTime() - now.getTime()
  const daysUntilExam = Math.ceil(timeUntilExam / (1000 * 60 * 60 * 24))

  const moduleStats = {
    A: concepts.filter(c => c.module === 'A').length,
    B: concepts.filter(c => c.module === 'B').length, 
    C: concepts.filter(c => c.module === 'C').length
  }

  const priorityConcepts = concepts
    .filter(c => c.priority === 'HIGH' && c.isSecondHalf)
    .slice(0, 8)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading study guide...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            MBA 204 Operations Study Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Master the fundamentals of operations management through interactive concepts, 
            real-world case studies, and hands-on calculators. Your complete resource for 
            success in operations strategy, process analysis, and supply chain management.
          </p>
          
          {/* Exam Countdown */}
          <div className="inline-block bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-600 rounded-lg px-6 py-4 mb-12">
            <div className="text-red-800 dark:text-red-300">
              <div className="text-sm font-medium">Final Exam Countdown</div>
              <div className="text-2xl font-bold">
                {daysUntilExam > 0 ? `${daysUntilExam} days to go` : 'Exam has passed'}
              </div>
              <div className="text-sm">Wed, March 11, 2026 • 8:00 AM PST</div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link 
              href="/calculators"
              className="bg-interactive text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
            >
              📊 Calculators
            </Link>
            <Link 
              href="/formulas"
              className="bg-moduleA text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              📐 Formulas
            </Link>
            <Link 
              href="/exams"
              className="bg-priorityHigh text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              📝 Exam Prep
            </Link>
            <Link 
              href="/concepts"
              className="bg-moduleB text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-600 transition-colors"
            >
              💡 Concepts
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3">
            {/* Module Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Course Modules</h2>
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Module A */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-moduleA/20 rounded-lg flex items-center justify-center text-moduleA text-xl font-bold">
                      A
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Process Analysis</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{moduleStats.A} concepts</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    Identify bottlenecks, calculate capacity, and analyze process flows. Master the fundamentals 
                    of operations without variability.
                  </p>
                  <div className="space-y-2">
                    <Link href="/lectures/processes-1-kristens" className="block text-moduleA hover:underline text-sm">
                      • Kristen&apos;s Cookie Company
                    </Link>
                    <Link href="/lectures/processes-2-beleza" className="block text-moduleA hover:underline text-sm">
                      • Beleza Natural Case
                    </Link>
                  </div>
                </div>

                {/* Module B */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-moduleB/20 rounded-lg flex items-center justify-center text-moduleB text-xl font-bold">
                      B
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Variability</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{moduleStats.B} concepts</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    Understand how variability affects waiting times, WIP, and throughput. Learn queueing theory 
                    and Little&apos;s Law.
                  </p>
                  <div className="space-y-2">
                    <Link href="/lectures/factory-physics" className="block text-moduleB hover:underline text-sm">
                      • Factory Physics
                    </Link>
                    <Link href="/lectures/queueing" className="block text-moduleB hover:underline text-sm">
                      • Queueing Theory
                    </Link>
                  </div>
                </div>

                {/* Module C */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-moduleC/20 rounded-lg flex items-center justify-center text-moduleC text-xl font-bold">
                      C
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Supply Chain</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{moduleStats.C} concepts</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    Master inventory management with EOQ, newsvendor models, and supply chain strategy. 
                    Handle uncertainty and risk.
                  </p>
                  <div className="space-y-2">
                    <Link href="/lectures/eoq" className="block text-moduleC hover:underline text-sm">
                      • Economic Order Quantity
                    </Link>
                    <Link href="/lectures/newsvendor" className="block text-moduleC hover:underline text-sm">
                      • Newsvendor Model
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Updates or Featured Content */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Key Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">📝 Midterm Review</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    Complete walkthrough of the 2026 midterm with Factory Physics, CQDF analysis, and Little&apos;s Law.
                  </p>
                  <Link href="/exams/midterm-2026" className="text-priorityHigh hover:underline font-medium">
                    Review Solutions →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🧮 Interactive Calculators</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    Practice with queueing, EOQ, newsvendor, and Little&apos;s Law calculators using real course examples.
                  </p>
                  <Link href="/calculators" className="text-interactive hover:underline font-medium">
                    Try Calculators →
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Priority Study Path */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                🎯 Priority Study Path
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Focus on these high-priority second-half concepts for maximum exam impact:
              </p>
              <div className="space-y-3">
                {priorityConcepts.map((concept) => (
                  <Link
                    key={concept.id}
                    href={`/lectures/${concept.lectureSlug}`}
                    className="block p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {concept.name}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {concept.definition}
                        </div>
                      </div>
                      <div className="ml-2 flex items-center space-x-1">
                        <span className="text-xs">{getPriorityIcon(concept.priority)}</span>
                        <div className={`w-2 h-2 rounded-full bg-${concept.module === 'A' ? 'moduleA' : concept.module === 'B' ? 'moduleB' : 'moduleC'}`}></div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link 
                href="/concepts"
                className="block mt-4 text-center text-sm text-interactive hover:underline"
              >
                View All Concepts →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}