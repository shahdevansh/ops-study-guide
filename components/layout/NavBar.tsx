'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const lectureOptions = [
  { slug: 'ops-strategy', title: 'Operations Strategy' },
  { slug: 'processes-1-kristens', title: 'Processes I - Kristen\'s' },
  { slug: 'processes-2-beleza', title: 'Processes II - Beleza' },
  { slug: 'factory-physics', title: 'Factory Physics' },
  { slug: 'queueing', title: 'Queueing' },
  { slug: 'supply-chain-risk', title: 'Supply Chain Risk' },
  { slug: 'beer-game-bullwhip', title: 'Beer Game & Bullwhip' },
  { slug: 'eoq', title: 'Economic Order Quantity' },
  { slug: 'newsvendor', title: 'Newsvendor Model' },
  { slug: 'supply-chain-strategy', title: 'Supply Chain Strategy' },
  { slug: 'littlefield', title: 'Littlefield Simulation' },
  { slug: 'brightside', title: 'BrightSide Produce' },
  { slug: 'southwest-review', title: 'Southwest & Review' }
]

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLectures, setShowLectures] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-moduleA dark:hover:text-moduleA transition-colors"
            >
              MBA 204 Operations
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-moduleA dark:hover:text-moduleA px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* Lectures Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowLectures(!showLectures)}
                  className="text-gray-700 dark:text-gray-300 hover:text-moduleA dark:hover:text-moduleA px-3 py-2 text-sm font-medium inline-flex items-center transition-colors"
                >
                  Lectures
                  <ChevronDownIcon className={`ml-2 h-4 w-4 transition-transform ${showLectures ? 'rotate-180' : ''}`} />
                </button>
                {showLectures && (
                  <div className="absolute z-50 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1 max-h-96 overflow-y-auto">
                      {lectureOptions.map((lecture) => (
                        <Link
                          key={lecture.slug}
                          href={`/lectures/${lecture.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-moduleA dark:hover:text-moduleA transition-colors"
                          onClick={() => setShowLectures(false)}
                        >
                          {lecture.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                href="/exams"
                className="text-gray-700 dark:text-gray-300 hover:text-moduleA dark:hover:text-moduleA px-3 py-2 text-sm font-medium transition-colors"
              >
                Exams
              </Link>
              
              <Link
                href="/formulas"
                className="text-gray-700 dark:text-gray-300 hover:text-moduleA dark:hover:text-moduleA px-3 py-2 text-sm font-medium transition-colors"
              >
                Formulas
              </Link>
              
              <Link
                href="/calculators"
                className="text-gray-700 dark:text-gray-300 hover:text-moduleA dark:hover:text-moduleA px-3 py-2 text-sm font-medium transition-colors"
              >
                Calculators
              </Link>
              
              <Link
                href="/concepts"
                className="text-gray-700 dark:text-gray-300 hover:text-moduleA dark:hover:text-moduleA px-3 py-2 text-sm font-medium transition-colors"
              >
                Concepts
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-moduleA hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-moduleA hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-500 dark:text-gray-400">
                  Lectures
                </div>
                {lectureOptions.map((lecture) => (
                  <Link
                    key={lecture.slug}
                    href={`/lectures/${lecture.slug}`}
                    className="block px-6 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-moduleA hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {lecture.title}
                  </Link>
                ))}
              </div>
              
              <Link
                href="/exams"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-moduleA hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Exams
              </Link>
              
              <Link
                href="/formulas"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-moduleA hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Formulas
              </Link>
              
              <Link
                href="/calculators"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-moduleA hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Calculators
              </Link>
              
              <Link
                href="/concepts"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-moduleA hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Concepts
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}