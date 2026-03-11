'use client'

import { useState } from 'react'
import { calculateEOQ, calculateEOQSavings, calculateConsolidationSavings } from '@/lib/formulas'
import { EOQInputs, EOQOutputs } from '@/lib/types'

export function EOQCalculator() {
  const [inputs, setInputs] = useState<EOQInputs>({
    demandRate: 1000,
    setupCost: 200,
    unitCost: 50,
    capitalCostRate: 0.15,
    physicalHoldingCost: 5
  })

  const [outputs, setOutputs] = useState<EOQOutputs | null>(null)
  const [currentQ, setCurrentQ] = useState<number>(250)
  const [numLocations, setNumLocations] = useState<number>(4)
  const [showConsolidation, setShowConsolidation] = useState(false)

  const handleCalculate = () => {
    try {
      const result = calculateEOQ(inputs)
      setOutputs(result)
    } catch (error) {
      console.error('Calculation error:', error)
      alert('Error in calculation. Please check your inputs.')
    }
  }

  const handleSavingsCalculation = () => {
    try {
      const result = calculateEOQSavings(inputs, currentQ)
      setOutputs(result)
    } catch (error) {
      console.error('Calculation error:', error)
      alert('Error in calculation. Please check your inputs.')
    }
  }

  const handleInputChange = (field: keyof EOQInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const loadExample = (example: 'pharmacy' | 'retailer') => {
    if (example === 'pharmacy') {
      // Patriot Pharmacy example from course
      setInputs({
        demandRate: 5000,    // units per year
        setupCost: 150,      // $ per order
        unitCost: 25,        // $ per unit
        capitalCostRate: 0.18, // 18% cost of capital
        physicalHoldingCost: 2  // $ per unit per year
      })
      setCurrentQ(400)
    } else {
      // Generic retailer example
      setInputs({
        demandRate: 2400,    // units per year
        setupCost: 80,       // $ per order
        unitCost: 30,        // $ per unit
        capitalCostRate: 0.12, // 12% cost of capital
        physicalHoldingCost: 3  // $ per unit per year
      })
      setCurrentQ(300)
    }
    setOutputs(null)
  }

  const consolidationResults = showConsolidation 
    ? calculateConsolidationSavings(inputs, numLocations)
    : null

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          📦 EOQ Calculator
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => loadExample('pharmacy')}
            className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors"
          >
            Pharmacy Example
          </button>
          <button
            onClick={() => loadExample('retailer')}
            className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
          >
            Retailer Example
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            📥 Inputs
          </h3>
          <div className="space-y-4">
            {/* Annual Demand */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Annual Demand (D) - units/year
              </label>
              <input
                type="number"
                step="1"
                value={inputs.demandRate}
                onChange={(e) => handleInputChange('demandRate', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Setup/Ordering Cost */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Setup/Ordering Cost (S) - $/order
              </label>
              <input
                type="number"
                step="0.01"
                value={inputs.setupCost}
                onChange={(e) => handleInputChange('setupCost', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Unit Cost */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Unit Cost (c) - $/unit
              </label>
              <input
                type="number"
                step="0.01"
                value={inputs.unitCost}
                onChange={(e) => handleInputChange('unitCost', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Cost of Capital Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cost of Capital Rate (i) - decimal (e.g., 0.15 = 15%)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="1"
                value={inputs.capitalCostRate}
                onChange={(e) => handleInputChange('capitalCostRate', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Physical Holding Cost */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Physical Holding Cost (h) - $/unit/year
              </label>
              <input
                type="number"
                step="0.01"
                value={inputs.physicalHoldingCost}
                onChange={(e) => handleInputChange('physicalHoldingCost', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-moduleC text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Calculate EOQ
            </button>

            {/* Savings Comparison */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Compare with Current Order Quantity
              </h4>
              <div className="flex space-x-2">
                <input
                  type="number"
                  step="1"
                  value={currentQ}
                  onChange={(e) => setCurrentQ(parseFloat(e.target.value) || 0)}
                  placeholder="Current Q"
                  className="input-cell flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={handleSavingsCalculation}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
                >
                  Compare
                </button>
              </div>
            </div>

            {/* Consolidation Analysis */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Consolidation Analysis
                </h4>
                <button
                  onClick={() => setShowConsolidation(!showConsolidation)}
                  className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 rounded hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors"
                >
                  {showConsolidation ? 'Hide' : 'Show'}
                </button>
              </div>
              {showConsolidation && (
                <div>
                  <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Number of locations to consolidate:
                  </label>
                  <input
                    type="number"
                    min="2"
                    value={numLocations}
                    onChange={(e) => setNumLocations(parseInt(e.target.value) || 2)}
                    className="input-cell w-full px-2 py-1 text-sm border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            📤 Results
          </h3>
          {outputs ? (
            <div className="space-y-4">
              {/* Holding Cost */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Holding Cost (H)</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  ${outputs.holdingCost.toFixed(2)} per unit per year
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  H = ic + h = {(inputs.capitalCostRate * inputs.unitCost).toFixed(2)} + {inputs.physicalHoldingCost}
                </div>
              </div>

              {/* EOQ */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Economic Order Quantity (EOQ)</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {Math.round(outputs.eoq)} units
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Optimal order quantity
                </div>
              </div>

              {/* Total Cost at EOQ */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Cost at EOQ</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  ${outputs.totalCost.toFixed(2)} per year
                </div>
              </div>

              {/* Savings if comparing */}
              {outputs.totalCostAtQ !== undefined && outputs.savingsPercent !== undefined && (
                <>
                  <div className="output-cell p-3 rounded-lg border">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Cost at Q={currentQ}</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      ${outputs.totalCostAtQ.toFixed(2)} per year
                    </div>
                  </div>
                  <div className="output-cell p-3 rounded-lg border border-green-300 dark:border-green-600">
                    <div className="text-sm font-medium text-green-700 dark:text-green-300">Savings with EOQ</div>
                    <div className="text-lg font-bold text-green-900 dark:text-green-100">
                      {outputs.savingsPercent.toFixed(1)}%
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      ${(outputs.totalCostAtQ - outputs.totalCost).toFixed(2)} per year
                    </div>
                  </div>
                </>
              )}

              {/* Consolidation Results */}
              {consolidationResults && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Consolidation: {numLocations} locations → 1
                  </h4>
                  <div className="space-y-3">
                    <div className="output-cell p-3 rounded-lg border">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Original Total Cost</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        ${consolidationResults.originalTotalCost.toFixed(2)}/year
                      </div>
                    </div>
                    <div className="output-cell p-3 rounded-lg border">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Consolidated Cost</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        ${consolidationResults.consolidatedTotalCost.toFixed(2)}/year
                      </div>
                    </div>
                    <div className="output-cell p-3 rounded-lg border border-green-300 dark:border-green-600">
                      <div className="text-sm font-medium text-green-700 dark:text-green-300">Consolidation Savings</div>
                      <div className="text-lg font-bold text-green-900 dark:text-green-100">
                        {consolidationResults.savingsPercent.toFixed(1)}%
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        ${(consolidationResults.originalTotalCost - consolidationResults.consolidatedTotalCost).toFixed(2)} per year
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Insights */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  💡 Key Insights
                </h4>
                <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                  <li>• EOQ balances ordering costs with holding costs</li>
                  <li>• EOQ is robust - costs increase slowly when deviating from optimal</li>
                  <li>• Consolidation creates economies of scale (EOQ scales by √n)</li>
                  {outputs.savingsPercent !== undefined && outputs.savingsPercent > 10 && (
                    <li>• Significant savings available by switching to EOQ</li>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              Enter parameters and click Calculate to see results
            </div>
          )}
        </div>
      </div>
    </div>
  )
}