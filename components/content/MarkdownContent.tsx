'use client'

import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

interface MarkdownContentProps {
  content: string
  className?: string
}

export function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  if (!content) return null

  return (
    <div className={`markdown-content prose prose-sm max-w-none dark:prose-invert 
      prose-headings:text-white prose-strong:text-white
      prose-code:text-cyan-300 prose-code:bg-gray-700/60 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-blockquote:border-yellow-500 prose-blockquote:bg-yellow-900/20 prose-blockquote:text-yellow-200 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
      prose-table:text-sm
      prose-th:bg-gray-800 prose-th:text-gray-200 prose-th:px-3 prose-th:py-2
      prose-td:px-3 prose-td:py-2 prose-td:border-gray-700
      prose-li:text-gray-300
      prose-p:text-gray-300
      prose-a:text-cyan-400
      ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
