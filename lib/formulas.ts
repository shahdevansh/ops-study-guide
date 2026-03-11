// Formula calculation functions for MBA 204 Operations calculators

import { 
  QueueingInputs, 
  QueueingOutputs, 
  EOQInputs, 
  EOQOutputs, 
  NewsvendorInputs, 
  NewsvendorOutputs,
  LittlesLawInputs,
  LittlesLawOutputs 
} from './types';

// Queueing calculations
export function calculateQueueing(inputs: QueueingInputs): QueueingOutputs {
  // Convert to consistent units
  const A = inputs.arrivalRate || (inputs.interarrivalTime ? 1 / inputs.interarrivalTime : 0);
  const M = inputs.serviceRate || (inputs.serviceTime ? 1 / inputs.serviceTime : 0);
  const sigmaA = inputs.sigmaArrival;
  const sigmaS = inputs.sigmaService;
  const n = inputs.servers;

  // Calculate utilization
  const rho = A / (n * M);

  // Calculate coefficients of variation
  const ca = sigmaA / (1 / A); // CV of arrivals
  const cs = sigmaS / (1 / M); // CV of service

  let wq: number;
  if (n === 1) {
    // Single server formula: Wq = M × [ρ/(1-ρ)] × [(Ca²+Cs²)/2]
    wq = (1 / M) * (rho / (1 - rho)) * ((ca * ca + cs * cs) / 2);
  } else {
    // Multi-server formula: Wq = (M/n) × [ρ^(√(2(n+1))-1)/(1-ρ)] × [(Ca²+Cs²)/2]
    const exponent = Math.sqrt(2 * (n + 1)) - 1;
    wq = (1 / M / n) * (Math.pow(rho, exponent) / (1 - rho)) * ((ca * ca + cs * cs) / 2);
  }

  // Calculate other metrics
  const w = wq + (1 / M); // Total time in system
  const lq = A * wq; // Queue length
  const l = A * w; // Total in system
  const wip = l; // WIP = L (Little's Law)

  return {
    rho,
    ca,
    cs,
    wq,
    w,
    lq,
    l,
    wip
  };
}

// EOQ calculations
export function calculateEOQ(inputs: EOQInputs): EOQOutputs {
  const { demandRate: D, setupCost: S, unitCost: c, capitalCostRate: i, physicalHoldingCost: h } = inputs;
  
  // Calculate holding cost per unit per year
  const H = i * c + h;
  
  // Calculate EOQ
  const eoq = Math.sqrt((2 * S * D) / H);
  
  // Calculate total cost at EOQ
  const totalCost = (S * D / eoq) + (H * eoq / 2);
  
  return {
    holdingCost: H,
    eoq,
    totalCost
  };
}

// EOQ total cost for any quantity Q
export function calculateTotalCost(inputs: EOQInputs, Q: number): number {
  const { demandRate: D, setupCost: S, unitCost: c, capitalCostRate: i, physicalHoldingCost: h } = inputs;
  const H = i * c + h;
  return (S * D / Q) + (H * Q / 2);
}

// EOQ savings calculation
export function calculateEOQSavings(inputs: EOQInputs, currentQ: number): EOQOutputs {
  const eoqResults = calculateEOQ(inputs);
  const totalCostAtQ = calculateTotalCost(inputs, currentQ);
  const savingsPercent = ((totalCostAtQ - eoqResults.totalCost) / totalCostAtQ) * 100;
  
  return {
    ...eoqResults,
    totalCostAtQ,
    savingsPercent
  };
}

// EOQ consolidation effect (n locations → 1)
export function calculateConsolidationSavings(inputs: EOQInputs, numLocations: number): {
  originalTotalCost: number;
  consolidatedTotalCost: number;
  savingsPercent: number;
} {
  // Original: n separate locations, each with demand D/n
  const demandPerLocation = inputs.demandRate / numLocations;
  const originalInputs = { ...inputs, demandRate: demandPerLocation };
  const originalResults = calculateEOQ(originalInputs);
  const originalTotalCost = originalResults.totalCost * numLocations;
  
  // Consolidated: one location with total demand D
  const consolidatedResults = calculateEOQ(inputs);
  const consolidatedTotalCost = consolidatedResults.totalCost;
  
  const savingsPercent = ((originalTotalCost - consolidatedTotalCost) / originalTotalCost) * 100;
  
  return {
    originalTotalCost,
    consolidatedTotalCost,
    savingsPercent
  };
}

// Normal distribution functions
export function normInv(probability: number, mean: number = 0, std: number = 1): number {
  // Inverse normal distribution approximation (Beasley-Springer-Moro algorithm)
  if (probability <= 0 || probability >= 1) {
    throw new Error('Probability must be between 0 and 1');
  }
  
  // Constants for the approximation
  const a = [0, -3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
  const b = [0, -5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
  const c = [0, -7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
  const d = [0, 7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];
  
  let x: number;
  
  if (probability < 0.02425) {
    const q = Math.sqrt(-2 * Math.log(probability));
    x = (((((c[1]*q+c[2])*q+c[3])*q+c[4])*q+c[5])*q+c[6]) / ((((d[1]*q+d[2])*q+d[3])*q+d[4])*q+1);
  } else if (probability > 0.97575) {
    const q = Math.sqrt(-2 * Math.log(1 - probability));
    x = -(((((c[1]*q+c[2])*q+c[3])*q+c[4])*q+c[5])*q+c[6]) / ((((d[1]*q+d[2])*q+d[3])*q+d[4])*q+1);
  } else {
    const q = probability - 0.5;
    const r = q * q;
    x = (((((a[1]*r+a[2])*r+a[3])*r+a[4])*r+a[5])*r+a[6]) * q / (((((b[1]*r+b[2])*r+b[3])*r+b[4])*r+b[5])*r+1);
  }
  
  return mean + std * x;
}

export function normDist(x: number, mean: number = 0, std: number = 1): number {
  // Standard normal CDF approximation
  const z = (x - mean) / std;
  return 0.5 * (1 + erf(z / Math.sqrt(2)));
}

function erf(x: number): number {
  // Error function approximation (Abramowitz and Stegun)
  const a1 =  0.254829592;
  const a2 = -0.284496736;
  const a3 =  1.421413741;
  const a4 = -1.453152027;
  const a5 =  1.061405429;
  const p  =  0.3275911;

  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);

  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}

// Newsvendor calculations
export function calculateNewsvendor(inputs: NewsvendorInputs): NewsvendorOutputs {
  const { sellingPrice: p, cost: c, salvageValue: s, meanDemand: mu, stdDemand: sigma } = inputs;
  
  // Calculate costs
  const overageCost = c - s; // Co = cost - salvage
  const underageCost = p - c; // Cu = price - cost
  
  // Calculate critical ratio
  const criticalRatio = underageCost / (underageCost + overageCost);
  
  // Calculate z-score and optimal quantity
  const zScore = normInv(criticalRatio);
  const optimalQuantity = mu + zScore * sigma;
  
  // Service level at optimal quantity
  const serviceLevel = criticalRatio;
  
  // Stockout probability
  const stockoutProb = 1 - serviceLevel;
  
  // Expected profit (simplified approximation)
  const expectedSales = Math.min(optimalQuantity, mu);
  const expectedLeftover = Math.max(0, optimalQuantity - mu);
  const expectedProfit = expectedSales * (p - c) - expectedLeftover * (c - s);
  
  return {
    overageCost,
    underageCost,
    criticalRatio,
    zScore,
    optimalQuantity,
    serviceLevel,
    expectedProfit,
    stockoutProb
  };
}

// Little's Law calculations
export function calculateLittlesLaw(inputs: LittlesLawInputs): LittlesLawOutputs {
  const { wip, throughputRate, throughputTime } = inputs;
  
  // Calculate missing value using Little's Law: WIP = Throughput Rate × Throughput Time
  let resultWip = wip;
  let resultThroughputRate = throughputRate;  
  let resultThroughputTime = throughputTime;
  
  if (wip !== undefined && throughputRate !== undefined) {
    // Calculate throughput time
    resultThroughputTime = wip / throughputRate;
  } else if (wip !== undefined && throughputTime !== undefined) {
    // Calculate throughput rate
    resultThroughputRate = wip / throughputTime;
  } else if (throughputRate !== undefined && throughputTime !== undefined) {
    // Calculate WIP
    resultWip = throughputRate * throughputTime;
  } else {
    throw new Error('Must provide exactly 2 of the 3 values: WIP, Throughput Rate, Throughput Time');
  }
  
  return {
    wip: resultWip!,
    throughputRate: resultThroughputRate!,
    throughputTime: resultThroughputTime!
  };
}