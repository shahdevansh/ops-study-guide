'use client'

import Link from 'next/link'
import { Concept } from '@/lib/types'
import { getModuleColor, getPriorityColor, getPriorityIcon } from '@/lib/data'

interface ConceptCardProps {
  concept: Concept
  showDetails?: boolean
  onClick?: () => void
}

export function ConceptCard({ concept, showDetails = false, onClick }: ConceptCardProps) {
  const moduleColorClass = getModuleColor(concept.module)
  const priorityColorClass = getPriorityColor(concept.priority)

  const CardContent = () => (
    <div className={`
      bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 
      p-4 hover:shadow-md transition-all duration-300 
      ${onClick ? 'cursor-pointer hover:scale-105' : ''}
    `}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className={`concept-tag ${moduleColorClass} text-xs`}>
            {concept.module}
          </span>
          <span className={`concept-tag ${priorityColorClass} text-xs`}>
            {getPriorityIcon(concept.priority)} {concept.priority}
          </span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
          {concept.id}
        </span>
      </div>

      {/* Title and Definition */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {concept.name}
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        {concept.definition}
      </p>

      {/* Detailed content when expanded */}
      {showDetails && (
        <>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Like You&apos;re 15 📚
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {concept.explanation15}
            </p>

            {/* Formulas */}
            {concept.formulas.length > 0 && (
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Formulas 🔢
                </h4>
                <div className="space-y-1">
                  {concept.formulas.map((formula, index) => (
                    <code key={index} className="block text-xs bg-gray-100 dark:bg-gray-700 p-2 rounded">
                      {formula}
                    </code>
                  ))}
                </div>
              </div>
            )}

            {/* Key Insights */}
            {concept.keyInsights.length > 0 && (
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Insights 💡
                </h4>
                <ul className="space-y-1">
                  {concept.keyInsights.map((insight, index) => (
                    <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tested By */}
            {concept.testedBy.length > 0 && (
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Appears on Exams 📝
                </h4>
                <div className="flex flex-wrap gap-1">
                  {concept.testedBy.map((exam) => (
                    <span key={exam} className="px-2 py-1 text-xs bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 rounded">
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related Concepts */}
            {concept.relatedConcepts.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Related Concepts 🔗
                </h4>
                <div className="flex flex-wrap gap-1">
                  {concept.relatedConcepts.slice(0, 5).map((relatedId) => (
                    <span key={relatedId} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
                      {relatedId}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Footer with lecture link */}
      {!showDetails && (
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href={`/lectures/${concept.lectureSlug}`}
            className="text-xs text-interactive hover:underline"
          >
            View in lecture →
          </Link>
          {concept.isSecondHalf && (
            <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
              2nd Half
            </span>
          )}
        </div>
      )}
    </div>
  )

  return onClick ? (
    <div onClick={onClick}>
      <CardContent />
    </div>
  ) : (
    <CardContent />
  )
}