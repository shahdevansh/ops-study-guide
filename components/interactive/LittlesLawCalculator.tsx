'use client'

import { useState } from 'react'
import { calculateLittlesLaw } from '@/lib/formulas'
import { LittlesLawInputs, LittlesLawOutputs } from '@/lib/types'

export function LittlesLawCalculator() {
  const [inputs, setInputs] = useState<LittlesLawInputs>({
    wip: undefined,
    throughputRate: undefined,
    throughputTime: undefined
  })

  const [outputs, setOutputs] = useState<LittlesLawOutputs | null>(null)

  const handleCalculate = () => {
    try {
      // Count how many inputs are provided
      const providedInputs = [inputs.wip, inputs.throughputRate, inputs.throughputTime].filter(x => x !== undefined && x !== null && !isNaN(x as number))
      
      if (providedInputs.length !== 2) {
        alert('Please provide exactly 2 of the 3 values')
        return
      }

      const result = calculateLittlesLaw(inputs)
      setOutputs(result)
    } catch (error) {
      console.error('Calculation error:', error)
      alert('Error in calculation. Please provide exactly 2 values and leave the third blank.')
    }
  }

  const handleInputChange = (field: keyof LittlesLawInputs, value: string) => {
    const numValue = value === '' ? undefined : parseFloat(value)
    setInputs(prev => ({
      ...prev,
      [field]: numValue
    }))
  }

  const loadExample = (example: 'bipty' | 'grohe' | 'restaurant') => {
    if (example === 'bipty') {
      // Bipty fashion rental example from CC2
      setInputs({
        wip: 500,
        throughputRate: undefined,
        throughputTime: 2 // weeks
      })
    } else if (example === 'grohe') {
      // Grohe Lux example from midterm
      setInputs({
        wip: 7500,
        throughputRate: 1744, // units per week
        throughputTime: undefined
      })
    } else {
      // Restaurant example
      setInputs({
        wip: undefined,
        throughputRate: 60, // customers per hour
        throughputTime: 0.75 // hours (45 minutes)
      })
    }
    setOutputs(null)
  }

  const clearAll = () => {
    setInputs({
      wip: undefined,
      throughputRate: undefined,
      throughputTime: undefined
    })
    setOutputs(null)
  }

  // Determine which value will be calculated
  const getCalculatedValue = () => {
    const hasWip = inputs.wip !== undefined && inputs.wip !== null && !isNaN(inputs.wip)
    const hasRate = inputs.throughputRate !== undefined && inputs.throughputRate !== null && !isNaN(inputs.throughputRate)
    const hasTime = inputs.throughputTime !== undefined && inputs.throughputTime !== null && !isNaN(inputs.throughputTime)
    
    if (hasWip && hasRate) return 'throughputTime'
    if (hasWip && hasTime) return 'throughputRate'
    if (hasRate && hasTime) return 'wip'
    return null
  }

  const calculatedValue = getCalculatedValue()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          🔺 Little&apos;s Law Calculator
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => loadExample('bipty')}
            className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 rounded hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors"
          >
            Bipty Example
          </button>
          <button
            onClick={() => loadExample('grohe')}
            className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
          >
            Grohe Example
          </button>
          <button
            onClick={() => loadExample('restaurant')}
            className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors"
          >
            Restaurant Example
          </button>
        </div>
      </div>

      {/* Formula Display */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Little&apos;s Law: WIP = Throughput Rate × Throughput Time
        </h3>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          Provide any 2 values and the calculator will find the third. This fundamental relationship applies to any stable system.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Triangle Visualization */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            🔺 Little&apos;s Law Triangle
          </h3>
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Triangle */}
              <svg width="300" height="260" viewBox="0 0 300 260" className="text-gray-700 dark:text-gray-300">
                {/* Triangle outline */}
                <path
                  d="M 150 20 L 50 220 L 250 220 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                
                {/* WIP at top */}
                <g transform="translate(150, 35)">
                  <rect
                    x="-30"
                    y="-15"
                    width="60"
                    height="30"
                    fill={calculatedValue === 'wip' ? '#10B981' : '#3B82F6'}
                    fillOpacity={calculatedValue === 'wip' ? 0.8 : 0.3}
                    stroke={calculatedValue === 'wip' ? '#065F46' : '#1E40AF'}
                    strokeWidth="2"
                    rx="4"
                  />
                  <text
                    x="0"
                    y="5"
                    textAnchor="middle"
                    className="text-sm font-bold fill-white"
                  >
                    WIP
                  </text>
                </g>

                {/* Throughput Rate at bottom left */}
                <g transform="translate(50, 235)">
                  <rect
                    x="-35"
                    y="-15"
                    width="70"
                    height="30"
                    fill={calculatedValue === 'throughputRate' ? '#10B981' : '#3B82F6'}
                    fillOpacity={calculatedValue === 'throughputRate' ? 0.8 : 0.3}
                    stroke={calculatedValue === 'throughputRate' ? '#065F46' : '#1E40AF'}
                    strokeWidth="2"
                    rx="4"
                  />
                  <text
                    x="0"
                    y="-2"
                    textAnchor="middle"
                    className="text-xs font-bold fill-white"
                  >
                    Throughput
                  </text>
                  <text
                    x="0"
                    y="10"
                    textAnchor="middle"
                    className="text-xs font-bold fill-white"
                  >
                    Rate
                  </text>
                </g>

                {/* Throughput Time at bottom right */}
                <g transform="translate(250, 235)">
                  <rect
                    x="-35"
                    y="-15"
                    width="70"
                    height="30"
                    fill={calculatedValue === 'throughputTime' ? '#10B981' : '#3B82F6'}
                    fillOpacity={calculatedValue === 'throughputTime' ? 0.8 : 0.3}
                    stroke={calculatedValue === 'throughputTime' ? '#065F46' : '#1E40AF'}
                    strokeWidth="2"
                    rx="4"
                  />
                  <text
                    x="0"
                    y="-2"
                    textAnchor="middle"
                    className="text-xs font-bold fill-white"
                  >
                    Throughput
                  </text>
                  <text
                    x="0"
                    y="10"
                    textAnchor="middle"
                    className="text-xs font-bold fill-white"
                  >
                    Time
                  </text>
                </g>

                {/* Multiplication signs */}
                <text x="120" y="200" textAnchor="middle" className="text-2xl font-bold fill-current">
                  ×
                </text>
                <text x="180" y="200" textAnchor="middle" className="text-2xl font-bold fill-current">
                  =
                </text>
              </svg>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              📋 Instructions
            </h4>
            <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-decimal list-inside">
              <li>Enter exactly 2 of the 3 values</li>
              <li>Leave the third value blank</li>
              <li>Click Calculate to find the missing value</li>
              <li>The calculated value will be highlighted in green</li>
            </ol>
          </div>
        </div>

        {/* Input/Output Panel */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            📥 Enter Values (any 2 of 3)
          </h3>
          
          <div className="space-y-4">
            {/* WIP */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Work in Process (WIP) - units in system
                {calculatedValue === 'wip' && (
                  <span className="ml-2 px-2 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded">
                    Will Calculate
                  </span>
                )}
              </label>
              <input
                type="number"
                step="0.1"
                value={inputs.wip ?? ''}
                onChange={(e) => handleInputChange('wip', e.target.value)}
                disabled={calculatedValue === 'wip'}
                className={`
                  w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${calculatedValue === 'wip' ? 'output-cell' : 'input-cell'}
                  ${calculatedValue === 'wip' ? 'cursor-not-allowed opacity-60' : ''}
                `}
                placeholder={calculatedValue === 'wip' ? 'Will be calculated' : 'Enter WIP'}
              />
            </div>

            {/* Throughput Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Throughput Rate - units/time
                {calculatedValue === 'throughputRate' && (
                  <span className="ml-2 px-2 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded">
                    Will Calculate
                  </span>
                )}
              </label>
              <input
                type="number"
                step="0.1"
                value={inputs.throughputRate ?? ''}
                onChange={(e) => handleInputChange('throughputRate', e.target.value)}
                disabled={calculatedValue === 'throughputRate'}
                className={`
                  w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${calculatedValue === 'throughputRate' ? 'output-cell' : 'input-cell'}
                  ${calculatedValue === 'throughputRate' ? 'cursor-not-allowed opacity-60' : ''}
                `}
                placeholder={calculatedValue === 'throughputRate' ? 'Will be calculated' : 'Enter rate'}
              />
            </div>

            {/* Throughput Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Throughput Time - time/unit
                {calculatedValue === 'throughputTime' && (
                  <span className="ml-2 px-2 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded">
                    Will Calculate
                  </span>
                )}
              </label>
              <input
                type="number"
                step="0.001"
                value={inputs.throughputTime ?? ''}
                onChange={(e) => handleInputChange('throughputTime', e.target.value)}
                disabled={calculatedValue === 'throughputTime'}
                className={`
                  w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${calculatedValue === 'throughputTime' ? 'output-cell' : 'input-cell'}
                  ${calculatedValue === 'throughputTime' ? 'cursor-not-allowed opacity-60' : ''}
                `}
                placeholder={calculatedValue === 'throughputTime' ? 'Will be calculated' : 'Enter time'}
              />
            </div>

            <div className="flex space-x-2">
              <button
                onClick={handleCalculate}
                disabled={!calculatedValue}
                className="flex-1 bg-interactive text-white py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Calculate Missing Value
              </button>
              <button
                onClick={clearAll}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Results */}
          {outputs && (
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-600 rounded-lg">
              <h4 className="text-sm font-semibold text-green-900 dark:text-green-100 mb-3">
                ✓ Complete Solution
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between">
                  <span className="text-sm text-green-800 dark:text-green-200">Work in Process:</span>
                  <span className="font-mono font-bold text-green-900 dark:text-green-100">
                    {outputs.wip.toFixed(2)} units
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-800 dark:text-green-200">Throughput Rate:</span>
                  <span className="font-mono font-bold text-green-900 dark:text-green-100">
                    {outputs.throughputRate.toFixed(2)} units/time
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-800 dark:text-green-200">Throughput Time:</span>
                  <span className="font-mono font-bold text-green-900 dark:text-green-100">
                    {outputs.throughputTime.toFixed(3)} time/unit
                  </span>
                </div>
              </div>
              
              {/* Verification */}
              <div className="mt-3 pt-3 border-t border-green-300 dark:border-green-600">
                <div className="text-xs text-green-700 dark:text-green-300">
                  Verification: {outputs.wip.toFixed(2)} = {outputs.throughputRate.toFixed(2)} × {outputs.throughputTime.toFixed(3)} = {(outputs.throughputRate * outputs.throughputTime).toFixed(2)}
                </div>
              </div>
            </div>
          )}

          {/* Key Insights */}
          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              💡 Key Insights
            </h4>
            <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
              <li>• Little&apos;s Law applies to ANY stable system (manufacturing, services, queues)</li>
              <li>• Independent of arrival distributions, service distributions, or service order</li>
              <li>• Key metric for Factory Physics: helps understand WIP-throughput tradeoffs</li>
              <li>• Also known as: WIP = TH × TPT (Work in Process = Throughput × Throughput Time)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}