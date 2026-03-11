'use client'

import { QueueingCalculator } from '@/components/interactive/QueueingCalculator'
import { EOQCalculator } from '@/components/interactive/EOQCalculator'
import { NewsvendorCalculator } from '@/components/interactive/NewsvendorCalculator'
import { LittlesLawCalculator } from '@/components/interactive/LittlesLawCalculator'

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📊 Operations Calculators
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interactive calculators for all major MBA 204 Operations concepts. Practice with real course examples 
            and prepare for your Excel-based final exam.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="#queueing"
            className="px-6 py-3 bg-moduleB text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
          >
            🧮 Queueing Theory
          </a>
          <a 
            href="#eoq"
            className="px-6 py-3 bg-moduleC text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
          >
            📦 Economic Order Quantity
          </a>
          <a 
            href="#newsvendor"
            className="px-6 py-3 bg-moduleC text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
          >
            🎰 Newsvendor Model
          </a>
          <a 
            href="#littles-law"
            className="px-6 py-3 bg-moduleB text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
          >
            🔺 Little&apos;s Law
          </a>
        </div>

        {/* Calculator Sections */}
        <div className="space-y-16">
          {/* Queueing Calculator */}
          <section id="queueing">
            <QueueingCalculator />
          </section>

          {/* EOQ Calculator */}
          <section id="eoq">
            <EOQCalculator />
          </section>

          {/* Newsvendor Calculator */}
          <section id="newsvendor">
            <NewsvendorCalculator />
          </section>

          {/* Little's Law Calculator */}
          <section id="littles-law">
            <LittlesLawCalculator />
          </section>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              📝 Excel Exam Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Template Preparation
                </h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
                  <li>Create Excel templates for each calculator type</li>
                  <li>Use yellow cells for inputs, green cells for outputs</li>
                  <li>Include formula text beside calculations for clarity</li>
                  <li>Test your templates with the examples provided here</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Exam Strategy
                </h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
                  <li>Download exam, turn off WiFi as instructed</li>
                  <li>Read problems carefully and identify the model type</li>
                  <li>Use your prepared templates for consistent formatting</li>
                  <li>Double-check units and reasonableness of answers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}