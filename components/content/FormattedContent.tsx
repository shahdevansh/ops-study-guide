'use client'

import { InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'

/**
 * Formats operations content text into rich JSX with:
 * - Math expressions rendered via KaTeX
 * - Line breaks preserved
 * - Key terms bolded
 * - Lists formatted properly
 */

// Convert plain math notation to LaTeX
function toLatex(expr: string): string {
  return expr
    .replace(/√\(([^)]+)\)/g, '\\sqrt{$1}')
    .replace(/SQRT\(([^)]+)\)/g, '\\sqrt{$1}')
    .replace(/(\w)²/g, '$1^2')
    .replace(/Ca²/g, 'C_a^2')
    .replace(/Cs²/g, 'C_s^2')
    .replace(/σa/g, '\\sigma_a')
    .replace(/σs/g, '\\sigma_s')
    .replace(/σ/g, '\\sigma')
    .replace(/ρ/g, '\\rho')
    .replace(/λ/g, '\\lambda')
    .replace(/μ/g, '\\mu')
    .replace(/×/g, '\\times')
    .replace(/≤/g, '\\leq')
    .replace(/≥/g, '\\geq')
    .replace(/→/g, '\\rightarrow')
    .replace(/∞/g, '\\infty')
    .replace(/Σ/g, '\\Sigma')
    .replace(/π/g, '\\pi')
}

// Check if a segment looks like a math expression
function isMathExpression(text: string): boolean {
  // Contains = with stuff on both sides, or common math patterns
  const mathPatterns = [
    /^\s*\w+\s*=\s*.+/,           // X = something
    /[+\-*/÷×]\s*[\w(]/,          // operators with operands
    /\b(EOQ|TC|WIP|TH|CT|Q\*|W[qQ]?|L[qQ]?)\s*=/,  // named formulas
    /√|SQRT|NORM\./,               // functions
    /[ρλμσ]/,                       // Greek letters
    /\^\d|²|³/,                     // exponents
    /\d+\/\d+/,                     // fractions like 2/3
  ]
  return mathPatterns.some(p => p.test(text))
}

// Try to render inline math, fall back to code style if KaTeX fails
function MathOrCode({ expr }: { expr: string }) {
  try {
    const latex = toLatex(expr.trim())
    return <InlineMath math={latex} />
  } catch {
    return <code className="px-1.5 py-0.5 bg-gray-700 rounded text-cyan-300 text-sm font-mono">{expr}</code>
  }
}

export function FormattedContent({ text }: { text: string }) {
  if (!text) return null

  const lines = text.split('\n')

  return (
    <div className="space-y-3">
      {lines.map((line, i) => {
        const trimmed = line.trim()
        if (!trimmed) return <div key={i} className="h-2" />

        // Bullet points
        if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
          const content = trimmed.slice(2)
          return (
            <div key={i} className="flex gap-2 pl-2">
              <span className="text-cyan-500 mt-0.5">•</span>
              <span>{renderInlineMath(content)}</span>
            </div>
          )
        }

        // Numbered items
        const numMatch = trimmed.match(/^(\d+)[.)]\s+(.+)/)
        if (numMatch) {
          return (
            <div key={i} className="flex gap-2 pl-2">
              <span className="text-gray-500 font-mono text-sm min-w-[1.5rem]">{numMatch[1]}.</span>
              <span>{renderInlineMath(numMatch[2])}</span>
            </div>
          )
        }

        // Full-line formulas (contains = and looks math-heavy)
        if (isMathExpression(trimmed) && trimmed.includes('=') && !trimmed.includes(':')) {
          return (
            <div key={i} className="my-2 px-4 py-2.5 bg-gray-800/80 rounded-lg border border-gray-700 text-center">
              <MathOrCode expr={trimmed} />
            </div>
          )
        }

        // Section headers (short lines ending with colon or all caps)
        if ((trimmed.endsWith(':') && trimmed.length < 60) || (trimmed === trimmed.toUpperCase() && trimmed.length < 40 && trimmed.length > 2)) {
          return (
            <h4 key={i} className="font-semibold text-white mt-4 mb-1">
              {trimmed}
            </h4>
          )
        }

        // Regular text with inline math detection
        return <p key={i}>{renderInlineMath(trimmed)}</p>
      })}
    </div>
  )
}

// Render inline math expressions within a text string
function renderInlineMath(text: string): React.ReactNode {
  // Split on patterns that look like formulas embedded in text
  // Match: word = formula, or standalone Greek/math expressions
  const parts: React.ReactNode[] = []
  
  // Regex to find inline math: things like "ρ = M/A", "Q* = μ + zσ", "TC = S(D/Q) + H(Q/2)"
  const mathRegex = /([A-Za-z_*]+(?:\([^)]*\))?\s*=\s*[^,;.]+(?:\([^)]*\))*[^,;.]*)|([ρλμσ][^,;.\s]*)|(\b(?:EOQ|TC|WIP|NORM\.\w+)\b\([^)]*\))/g
  
  let lastIndex = 0
  let match
  
  while ((match = mathRegex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(<span key={`t${lastIndex}`}>{text.slice(lastIndex, match.index)}</span>)
    }
    // Add math expression
    const expr = match[0]
    parts.push(
      <code key={`m${match.index}`} className="px-1 py-0.5 bg-gray-700/60 rounded text-cyan-300 text-sm font-mono">
        {expr}
      </code>
    )
    lastIndex = match.index + match[0].length
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(<span key={`t${lastIndex}`}>{text.slice(lastIndex)}</span>)
  }
  
  return parts.length > 0 ? <>{parts}</> : text
}
