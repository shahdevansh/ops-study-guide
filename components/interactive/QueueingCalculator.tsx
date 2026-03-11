'use client'

import { useState } from 'react'
import { calculateQueueing } from '@/lib/formulas'
import { QueueingInputs, QueueingOutputs } from '@/lib/types'

export function QueueingCalculator() {
  const [inputs, setInputs] = useState<QueueingInputs>({
    arrivalRate: 10,
    serviceRate: 12,
    sigmaArrival: 1.2,
    sigmaService: 0.8,
    servers: 1
  })

  const [outputs, setOutputs] = useState<QueueingOutputs | null>(null)

  const handleCalculate = () => {
    try {
      const result = calculateQueueing(inputs)
      setOutputs(result)
    } catch (error) {
      console.error('Calculation error:', error)
      alert('Error in calculation. Please check your inputs.')
    }
  }

  const handleInputChange = (field: keyof QueueingInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const loadExample = (example: 'hanover' | 'convenience') => {
    if (example === 'hanover') {
      // Hanover Post Office example from course
      setInputs({
        arrivalRate: 4.5, // customers per hour
        serviceRate: 6,   // customers per hour  
        sigmaArrival: 1.8,
        sigmaService: 1.2,
        servers: 1
      })
    } else {
      // Multi-server convenience store example
      setInputs({
        arrivalRate: 20,  // customers per hour
        serviceRate: 8,   // customers per hour per server
        sigmaArrival: 2.5,
        sigmaService: 1.5,
        servers: 3
      })
    }
    setOutputs(null)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          🧮 Queueing Calculator
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => loadExample('hanover')}
            className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
          >
            Hanover Example
          </button>
          <button
            onClick={() => loadExample('convenience')}
            className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 rounded hover:bg-purple-200 dark:hover:bg-purple-900/40 transition-colors"
          >
            Multi-Server Example
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
            {/* Arrival Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Arrival Rate (λ) - customers/hour
              </label>
              <input
                type="number"
                step="0.1"
                value={inputs.arrivalRate || ''}
                onChange={(e) => handleInputChange('arrivalRate', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Service Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Service Rate (μ) - customers/hour per server
              </label>
              <input
                type="number"
                step="0.1"
                value={inputs.serviceRate || ''}
                onChange={(e) => handleInputChange('serviceRate', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Arrival Variability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Arrival Standard Deviation (σₐ)
              </label>
              <input
                type="number"
                step="0.1"
                value={inputs.sigmaArrival}
                onChange={(e) => handleInputChange('sigmaArrival', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Service Variability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Service Standard Deviation (σₛ)
              </label>
              <input
                type="number"
                step="0.1"
                value={inputs.sigmaService}
                onChange={(e) => handleInputChange('sigmaService', parseFloat(e.target.value) || 0)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Number of Servers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Servers (n)
              </label>
              <input
                type="number"
                min="1"
                value={inputs.servers}
                onChange={(e) => handleInputChange('servers', parseInt(e.target.value) || 1)}
                className="input-cell w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="w-full bg-interactive text-white py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
            >
              Calculate Queue Metrics
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
              {/* Utilization */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Utilization (ρ)</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {(outputs.rho * 100).toFixed(1)}%
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {outputs.rho < 0.8 ? 'Low' : outputs.rho < 0.9 ? 'Medium' : 'High'} utilization
                </div>
              </div>

              {/* Wait Time in Queue */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Wait Time in Queue (Wq)</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {outputs.wq.toFixed(2)} hours
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {(outputs.wq * 60).toFixed(0)} minutes
                </div>
              </div>

              {/* Total Time in System */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Time in System (W)</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {outputs.w.toFixed(2)} hours
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {(outputs.w * 60).toFixed(0)} minutes
                </div>
              </div>

              {/* Queue Length */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Queue Length (Lq)</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {outputs.lq.toFixed(2)} customers
                </div>
              </div>

              {/* Total in System */}
              <div className="output-cell p-3 rounded-lg border">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Total in System (L)</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {outputs.l.toFixed(2)} customers
                </div>
              </div>

              {/* Coefficients of Variation */}
              <div className="grid grid-cols-2 gap-3">
                <div className="output-cell p-3 rounded-lg border">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">CV Arrivals (Cₐ)</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {outputs.ca.toFixed(2)}
                  </div>
                </div>
                <div className="output-cell p-3 rounded-lg border">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">CV Service (Cₛ)</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {outputs.cs.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Insights */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  💡 Key Insights
                </h4>
                <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                  {outputs.rho > 0.95 && (
                    <li>• High utilization causes dramatically increased wait times</li>
                  )}
                  {outputs.ca > 1.5 || outputs.cs > 1.5 ? (
                    <li>• High variability significantly increases wait times</li>
                  ) : (
                    <li>• Low variability helps keep wait times manageable</li>
                  )}
                  {inputs.servers > 1 && (
                    <li>• Multiple servers reduce wait times dramatically vs single server</li>
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