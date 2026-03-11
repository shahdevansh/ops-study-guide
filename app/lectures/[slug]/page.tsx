'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { loadLecture, loadConcepts, getConceptById } from '@/lib/data'
import { Lecture, Concept } from '@/lib/types'
import { FormulaBlock } from '@/components/content/FormulaBlock'
import { InsightBox } from '@/components/content/InsightBox'
import { PracticeToggle } from '@/components/content/PracticeToggle'
import { ConceptTag } from '@/components/content/ConceptTag'
import { FormattedContent } from '@/components/content/FormattedContent'
import { MarkdownContent } from '@/components/content/MarkdownContent'

import { use } from 'react'

interface Props {
  params: Promise<{ slug: string }>
}

export default function LecturePage({ params: paramsPromise }: Props) {
  const params = use(paramsPromise)
  const [lecture, setLecture] = useState<Lecture | null>(null)
  const [concepts, setConcepts] = useState<Concept[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [lectureData, conceptsData] = await Promise.all([
          loadLecture(params.slug),
          loadConcepts()
        ])
        
        if (!lectureData) {
          notFound()
        }
        
        setLecture(lectureData)
        setConcepts(conceptsData)
      } catch (error) {
        console.error('Failed to load lecture:', error)
        notFound()
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading lecture...</div>
      </div>
    )
  }

  if (!lecture) {
    return notFound()
  }

  const getModuleColorClass = (module: 'A' | 'B' | 'C') => {
    switch (module) {
      case 'A': return 'bg-moduleA text-white'
      case 'B': return 'bg-moduleB text-white'
      case 'C': return 'bg-moduleC text-white'
    }
  }

  const getPriorityBadgeClass = (priority: 'HIGH' | 'MEDIUM' | 'LOW') => {
    switch (priority) {
      case 'HIGH': return 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
      case 'MEDIUM': return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300'
      case 'LOW': return 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-300'
    }
  }

  const conceptsInLecture = lecture.concepts.map(id => getConceptById(concepts, id)).filter(Boolean) as Concept[]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className={`${getModuleColorClass(lecture.module)} py-12`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Module {lecture.module}
              </span>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                Class {lecture.classNumber}
              </span>
              <span className={`text-sm px-3 py-1 rounded-full ${getPriorityBadgeClass(lecture.priority)}`}>
                {lecture.priority} Priority
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{lecture.title}</h1>
          <p className="text-xl text-white/90 mb-6">{lecture.keyQuestion}</p>
          
          {/* Concept Tags */}
          <div className="flex flex-wrap gap-2">
            {conceptsInLecture.map(concept => (
              <ConceptTag 
                key={concept.id}
                conceptId={concept.id}
                conceptName={concept.name}
                module={concept.module}
                size="sm"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-interactive hover:underline">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-500">Lectures</span>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900 dark:text-white">{lecture.title}</span>
        </nav>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            📋 Overview
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {lecture.overview}
            </p>
            {lecture.caseName && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                  📚 Case Study
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  {lecture.caseName}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Core Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            📖 Core Concepts
          </h2>
          <div className="space-y-6">
            {lecture.coreContent.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h3>
                
                {/* Concept tags for this section */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {section.conceptIds.map(id => {
                    const concept = getConceptById(concepts, id)
                    return concept ? (
                      <ConceptTag 
                        key={id}
                        conceptId={id}
                        conceptName={concept.name}
                        module={concept.module}
                        size="sm"
                      />
                    ) : null
                  })}
                </div>

                <div className="mb-4">
                  <MarkdownContent content={section.content} />
                </div>

                <InsightBox type="principle">
                  {section.keyInsight}
                </InsightBox>

                {/* Cross-references */}
                {section.crossRefs && (
                  <div className="mt-4 p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-sm">
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">🔗 Cross-References</h4>
                    <div className="space-y-1 text-gray-400">
                      {section.crossRefs.prerequisiteConcepts?.map((ref: string, ri: number) => (
                        <div key={`pre-${ri}`}>← <span className="text-blue-400">Prerequisite:</span> {ref}</div>
                      ))}
                      {section.crossRefs.buildsInto?.map((ref: string, ri: number) => (
                        <div key={`build-${ri}`}>→ <span className="text-green-400">Builds into:</span> {ref}</div>
                      ))}
                      {section.crossRefs.examAppearances?.map((ref: string, ri: number) => (
                        <div key={`exam-${ri}`}>📝 <span className="text-yellow-400">Exam:</span> {ref}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Formulas & Equations */}
        {lecture.formulas.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              🔢 Formulas & Equations
            </h2>
            <div className="grid gap-6">
              {lecture.formulas.map((formula, index) => (
                <FormulaBlock
                  key={index}
                  name={formula.name}
                  formula={formula.formula}
                  variables={formula.variables}
                  example={formula.workedExample}
                />
              ))}
            </div>
          </section>
        )}

        {/* Interactive Element Placeholder */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            🎮 Interactive Element
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
            <div className="text-gray-500 dark:text-gray-400">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
              <p className="text-sm">
                Interactive simulator for {lecture.title} concepts
              </p>
              <Link 
                href="/calculators"
                className="inline-block mt-4 px-4 py-2 bg-interactive text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Try Related Calculators
              </Link>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        {lecture.practiceProblems.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              📝 Practice Problems
            </h2>
            <div className="space-y-6">
              {lecture.practiceProblems.map((problem) => (
                <PracticeToggle
                  key={problem.id}
                  question={problem.question}
                  solution={problem.solution}
                  source={problem.source}
                  type={problem.type}
                  conceptIds={problem.conceptIds}
                />
              ))}
            </div>
          </section>
        )}

        {/* Key Insights */}
        {lecture.keyInsights.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              💡 Key Operations Principles
            </h2>
            <div className="space-y-4">
              {lecture.keyInsights.map((insight, index) => (
                <InsightBox key={index} type="principle">
                  {insight}
                </InsightBox>
              ))}
            </div>
          </section>
        )}

        {/* Connections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            🔗 Connections
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Related Concepts
                </h3>
                <div className="space-y-2">
                  {conceptsInLecture.slice(0, 5).map(concept => (
                    <div key={concept.id} className="flex items-start space-x-3">
                      <ConceptTag 
                        conceptId={concept.id}
                        module={concept.module}
                        size="sm"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {concept.definition}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Exam Appearances
                </h3>
                <div className="space-y-2">
                  {conceptsInLecture
                    .flatMap(c => c.testedBy)
                    .filter((exam, index, self) => self.indexOf(exam) === index)
                    .map(exam => (
                      <div key={exam} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{exam}</span>
                      </div>
                    ))}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                  What to Study Next
                </h3>
                <div className="space-y-2">
                  <Link href="/calculators" className="block text-interactive hover:underline text-sm">
                    → Practice with calculators
                  </Link>
                  <Link href="/formulas" className="block text-interactive hover:underline text-sm">
                    → Review formula sheet
                  </Link>
                  <Link href="/exams" className="block text-interactive hover:underline text-sm">
                    → Try exam problems
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Markdown Notes Download */}
            <a 
              href={`/notes/${lecture.slug}.md`}
              download
              className="block bg-cyan-900/20 border border-cyan-800 rounded-xl p-6 hover:bg-cyan-900/30 transition"
            >
              <h3 className="text-lg font-semibold text-cyan-100 mb-2">📝 Download Study Notes</h3>
              <p className="text-cyan-200 text-sm">Standalone markdown file — use as exam reference notes.</p>
            </a>

            {/* Excel Template Download */}
            {lecture.connections?.excelTemplate && (
              <a 
                href={`/templates/${lecture.connections.excelTemplate}`}
                download
                className="block bg-green-900/20 border border-green-800 rounded-xl p-6 hover:bg-green-900/30 transition"
              >
                <h3 className="text-lg font-semibold text-green-100 mb-2">📊 Excel Template</h3>
                <p className="text-green-200 text-sm">Yellow inputs, green outputs — ready for exam use.</p>
              </a>
            )}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/"
            className="flex items-center space-x-2 text-interactive hover:underline"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/concepts"
              className="text-interactive hover:underline"
            >
              Browse All Concepts
            </Link>
            <Link 
              href="/calculators"
              className="text-interactive hover:underline"
            >
              Try Calculators
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}