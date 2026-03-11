'use client'

import Link from 'next/link'
import { getModuleColor } from '@/lib/data'

interface ConceptTagProps {
  conceptId: string
  conceptName?: string
  module?: 'A' | 'B' | 'C'
  size?: 'sm' | 'md' | 'lg'
  clickable?: boolean
  className?: string
}

export function ConceptTag({ 
  conceptId, 
  conceptName, 
  module,
  size = 'md', 
  clickable = true,
  className = '' 
}: ConceptTagProps) {
  const moduleColorClass = module ? getModuleColor(module) : 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400'
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  const baseClasses = `
    concept-tag 
    ${moduleColorClass} 
    ${sizeClasses[size]}
    inline-flex items-center space-x-1 rounded-full font-medium
    ${clickable ? 'hover:opacity-80 hover:scale-105 cursor-pointer transition-all duration-200' : ''}
    ${className}
  `

  const content = (
    <span className={baseClasses}>
      <span className="font-mono font-bold">{conceptId}</span>
      {conceptName && (
        <>
          <span>•</span>
          <span className="truncate max-w-32">{conceptName}</span>
        </>
      )}
    </span>
  )

  if (clickable) {
    return (
      <Link href={`/concepts#${conceptId}`} className="inline-block">
        {content}
      </Link>
    )
  }

  return content
}