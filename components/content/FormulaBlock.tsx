'use client'

import { BlockMath, InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'

interface FormulaBlockProps {
  name: string
  formula: string
  variables?: Record<string, string>
  description?: string
  example?: string
  className?: string
}

export function FormulaBlock({ name, formula, variables, description, example, className = '' }: FormulaBlockProps) {
  // Convert common notation to LaTeX
  const formatFormulaForKaTeX = (formula: string): string => {
    return formula
      // Greek letters
      .replace(/rho/g, '\\rho')
      .replace(/sigma/g, '\\sigma')
      .replace(/lambda/g, '\\lambda')
      .replace(/mu/g, '\\mu')
      // Subscripts
      .replace(/(\w)_(\w+)/g, '$1_{$2}')
      // Superscripts  
      .replace(/\^(\d)/g, '^{$1}')
      .replace(/\^2/g, '^2')
      // Square roots
      .replace(/sqrt\(([^)]+)\)/g, '\\sqrt{$1}')
      // Fractions (simple cases)
      .replace(/(\w+)\/(\w+)/g, '\\frac{$1}{$2}')
      // Min/max functions
      .replace(/min\(/g, '\\min(')
      .replace(/max\(/g, '\\max(')
  }

  return (
    <div className={`formula-block ${className}`}>
      {/* Formula name */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        {name}
      </h3>

      {/* Main formula */}
      <div className="text-center mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <BlockMath math={formatFormulaForKaTeX(formula)} />
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          {description}
        </p>
      )}

      {/* Variable definitions */}
      {variables && Object.keys(variables).length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Where:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {Object.entries(variables).map(([variable, definition]) => (
              <div key={variable} className="flex items-start space-x-2 text-sm">
                <InlineMath math={variable} />
                <span className="text-gray-600 dark:text-gray-400">= {definition}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Worked example */}
      {example && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-2">
            💡 Example:
          </h4>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {example}
          </p>
        </div>
      )}
    </div>
  )
}