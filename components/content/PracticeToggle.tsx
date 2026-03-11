'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { FormattedContent } from './FormattedContent'

interface PracticeToggleProps {
  question: string
  solution: string
  source?: string
  type?: 'quantitative' | 'qualitative'
  conceptIds?: string[]
  className?: string
}

export function PracticeToggle({ 
  question, 
  solution, 
  source, 
  type = 'quantitative',
  conceptIds = [],
  className = '' 
}: PracticeToggleProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${className}`}>
      {/* Question */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs rounded font-medium ${
              type === 'quantitative' 
                ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
                : 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300'
            }`}>
              {type === 'quantitative' ? '📊 Quantitative' : '💭 Qualitative'}
            </span>
            {conceptIds.length > 0 && (
              <div className="flex space-x-1">
                {conceptIds.slice(0, 3).map((id) => (
                  <span key={id} className="px-1 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                    {id}
                  </span>
                ))}
              </div>
            )}
          </div>
          {source && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {source.replace('.json', '').replace(/([a-z])([A-Z])/g, '$1 $2')}
            </span>
          )}
        </div>
        
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <FormattedContent text={question} />
        </div>
      </div>

      {/* Solution Toggle */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="text-sm font-medium text-interactive">
            {isOpen ? 'Hide Solution' : 'Show Solution'}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDownIcon className="w-4 h-4 text-interactive" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="practice-toggle"
            >
              <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-600">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-green-600 dark:text-green-400 text-lg mr-2">✓</span>
                    <h4 className="font-medium text-green-900 dark:text-green-100">
                      Solution
                    </h4>
                  </div>
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <FormattedContent text={solution} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}