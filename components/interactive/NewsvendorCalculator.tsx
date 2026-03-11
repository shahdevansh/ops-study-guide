'use client'

import { useState } from 'react'
import { calculateNewsvendor, normDist } from '@/lib/formulas'
import { NewsvendorInputs, NewsvendorOutputs } from '@/lib/types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'

export function NewsvendorCalculator() {
  const [inputs, setInputs] = useState<NewsvendorInputs>({
    sellingPrice: 25,
    cost: 15,
    salvageValue: 5,
    meanDemand: 100,
    stdDemand: 20
  })

  const [outputs, setOutputs] = useState<NewsvendorOutputs | null>(null)

  const handleCalculate = () => {
    try {
      const result = calculateNewsvendor(inputs)
      setOutputs(result)
    } catch (error) {
      console.error('Calculation error:', error)
      alert('Error in calculation. Please check your inputs.')
    }
  }

  const handleInputChange = (field: keyof NewsvendorInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const loadExample = (example: 'bookstore' | 'brightside') => {
    if (example === 'bookstore') {
      // World Cup soccer book example from course
      setInputs({
        sellingPrice: 20,
        cost: 12,
        salvageValue: 4,
        meanDemand: 150,
        stdDemand: 35
      })
    } else {
      // BrightSide Produce example (zero salvage)
      setInputs({
        sellingPrice: 8,
        cost: 5,
        salvageValue: 0,
        meanDemand: 200,
        stdDemand: 50
      })
    }
    setOutputs(null)
  }

  // Generate normal distribution data for visualization
  const generateNormalDistribution = () => {
    if (!outputs) return []
    
    const data = []
    const { meanDemand, stdDemand } = inputs
    const { optimalQuantity } = outputs
    
    const start = Math.max(0, meanDemand - 3 * stdDemand)
    const end = meanDemand + 3 * stdDemand
    const step = (end - start) / 100
    
    for (let x = start; x <= end; x += step) {
      const probability = normDist(x, meanDemand, stdDemand)
      data.push({
        demand: x,
        probability,
        isOptimal: x <= optimalQuantity
      })
    }
    
    return data
  }

  const distributionData = generateNormalDistribution()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          🎰 Newsvendor Calculator
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => loadExample('bookstore')}
            className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
          >
            Bookstore Example
          </button>
          <button
            onClick={() => loadExample('brightside')}
            className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors"
          >
            BrightSide Example
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
            {/* Selling Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Selling Price (p) - $/unit
              </label>
              <input
                type="number"
                step="0.01"
                value={inputs.sellingPrice}
                onChange={(e) => handleInputChange('sellingPrice', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Cost */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cost (c) - $/unit
              </label>
              <input
                type="number"
                step="0.01"
                value={inputs.cost}
                onChange={(e) => handleInputChange('cost', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Salvage Value */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Salvage Value (s) - $/unit
              </label>
              <input
                type="number"
                step="0.01"
                value={inputs.salvageValue}
                onChange={(e) => handleInputChange('salvageValue', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Mean Demand */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mean Demand (μ) - units
              </label>
              <input
                type="number"
                step="1"
                value={inputs.meanDemand}
                onChange={(e) => handleInputChange('meanDemand', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Standard Deviation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Standard Deviation (σ) - units
              </label>
              <input
                type="number"
                step="0.1"
                value={inputs.stdDemand}
                onChange={(e) => handleInputChange('stdDemand', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-moduleC text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Calculate Optimal Quantity
            </button>
          </div>
        </div>

        {/* Outputs */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            📤 Results
          </h3>
          {outputs ? (
            <div className="space-y-4">
              {/* Cost Analysis */}
              <div className="grid grid-cols-2 gap-3">
                <div className="output-cell p-3 rounded-lg border">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Overage Cost (Co)</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    ${outputs.overageCost.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Cost - Salvage
                  </div>
                </div>
                <div className="output-cell p-3 rounded-lg border">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Underage Cost (Cu)</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    ${outputs.underageCost.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Price - Cost
                  </div>
                </div>
              </div>

              {/* Critical Ratio */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Critical Ratio (pc)</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {(outputs.criticalRatio * 100).toFixed(1)}%
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Cu / (Cu + Co) = Service Level Target
                </div>
              </div>

              {/* Z-Score */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Z-Score</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {outputs.zScore.toFixed(3)}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  NORM.S.INV({(outputs.criticalRatio * 100).toFixed(1)}%)
                </div>
              </div>

              {/* Optimal Quantity */}
              <div className="output-cell p-3 rounded-lg border border-green-300 dark:border-green-600">
                <div className="text-sm font-medium text-green-700 dark:text-green-300">Optimal Quantity (Q*)</div>
                <div className="text-lg font-bold text-green-900 dark:text-green-100">
                  {Math.round(outputs.optimalQuantity)} units
                </div>
                <div className="text-xs text-green-600 dark:text-green-400">
                  μ + z·σ = {inputs.meanDemand} + {outputs.zScore.toFixed(2)}×{inputs.stdDemand}
                </div>
              </div>

              {/* Service Level */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Service Level</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {(outputs.serviceLevel * 100).toFixed(1)}%
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Probability of not stocking out
                </div>
              </div>

              {/* Stockout Probability */}
              <div className="output-cell p-3 rounded-lg border border-red-300 dark:border-red-600">
                <div className="text-sm font-medium text-red-700 dark:text-red-300">Stockout Probability</div>
                <div className="text-lg font-bold text-red-900 dark:text-red-100">
                  {(outputs.stockoutProb * 100).toFixed(1)}%
                </div>
                <div className="text-xs text-red-600 dark:text-red-400">
                  1 - Service Level
                </div>
              </div>

              {/* Expected Profit */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Expected Profit (approx)</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  ${outputs.expectedProfit.toFixed(2)}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Simplified calculation
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  💡 Key Insights
                </h4>
                <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                  {outputs.criticalRatio > 0.5 ? (
                    <li>• High profit margin (Cu &gt; Co) → stock more than mean demand</li>
                  ) : (
                    <li>• Low profit margin (Cu &lt; Co) → stock less than mean demand</li>
                  )}
                  {outputs.serviceLevel > 0.9 ? (
                    <li>• Very high service level target (&gt;90%)</li>
                  ) : outputs.serviceLevel < 0.7 ? (
                    <li>• Moderate service level target (&lt;70%)</li>
                  ) : (
                    <li>• Balanced service level target (70-90%)</li>
                  )}
                  {inputs.salvageValue === 0 && (
                    <li>• Zero salvage value increases penalty for overstocking</li>
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

      {/* Normal Distribution Visualization */}
      {outputs && distributionData.length > 0 && (
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            📊 Demand Distribution & Service Level
          </h3>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={distributionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="demand" 
                  type="number"
                  scale="linear"
                  domain={['dataMin', 'dataMax']}
                  tickFormatter={(value) => Math.round(value).toString()}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    typeof value === 'number' ? value.toFixed(4) : value, 
                    name === 'probability' ? 'Probability Density' : name
                  ]}
                  labelFormatter={(value) => `Demand: ${Math.round(Number(value))}`}
                />
                <Area
                  type="monotone"
                  dataKey="probability"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey={(entry) => entry.isOptimal ? entry.probability : 0}
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500/30 border border-blue-500 mr-2"></div>
                <span>Total Demand Distribution</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500/60 border border-green-500 mr-2"></div>
                <span>Service Level ({(outputs.serviceLevel * 100).toFixed(1)}%)</span>
              </div>
            </div>
            <div className="mt-2 text-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Optimal Quantity: {Math.round(outputs.optimalQuantity)} units
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}