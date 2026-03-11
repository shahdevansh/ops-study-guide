// Core data types for the MBA 204 Operations Study Guide

export interface Concept {
  id: string;
  name: string;
  module: 'A' | 'B' | 'C';
  definition: string;
  explanation15: string;
  formulas: string[];
  lectureSlug: string;
  prerequisites: string[];
  relatedConcepts: string[];
  testedBy: string[];
  appearsIn: string[];
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  isSecondHalf: boolean;
  keyInsights: string[];
}

export interface Lecture {
  slug: string;
  title: string;
  classNumber: number;
  module: 'A' | 'B' | 'C';
  keyQuestion: string;
  caseName?: string;
  prerequisites: string[];
  concepts: string[];
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  overview: string;
  coreContent: CoreContentSection[];
  formulas: FormulaWithExample[];
  practiceProblems: PracticeProblem[];
  keyInsights: string[];
  excelTemplate?: string;
  connections?: {
    relatedLectures?: string[];
    examAppearances?: string[];
    excelTemplate?: string;
  };
}

export interface CoreContentSection {
  title: string;
  conceptIds: string[];
  content: string;
  keyInsight: string;
  crossRefs?: {
    prerequisiteConcepts?: string[];
    buildsInto?: string[];
    examAppearances?: string[];
  };
}

export interface FormulaWithExample {
  name: string;
  formula: string;
  variables: Record<string, string>;
  workedExample: string;
}

export interface PracticeProblem {
  id: string;
  question: string;
  solution: string;
  source: string;
  conceptIds: string[];
  type: 'quantitative' | 'qualitative';
}

export interface FormulaCategory {
  title: string;
  formulas: Formula[];
}

export interface Formula {
  name: string;
  formula: string;
  variables: Record<string, string>;
  description: string;
}

export interface ExamQuestion {
  questionId: string;
  type: 'quantitative' | 'qualitative';
  topic: string;
  conceptIds: string[];
  questionText: string;
  solutionText: string;
  keyInsights: string[];
}

export interface ExamData {
  examTitle: string;
  examDate: string;
  format: string;
  source: string;
  questions: ExamQuestion[];
  examSummary: {
    totalQuestions: number;
    quantitativeCount: number;
    qualitativeCount: number;
    keyTopics: string[];
  };
}

export interface NormalTableEntry {
  z: number;
  prob: number;
}

// Calculator input/output types
export interface QueueingInputs {
  arrivalRate?: number;
  interarrivalTime?: number;
  serviceRate?: number;
  serviceTime?: number;
  sigmaArrival: number;
  sigmaService: number;
  servers: number;
}

export interface QueueingOutputs {
  rho: number;
  ca: number;
  cs: number;
  wq: number;
  w: number;
  lq: number;
  l: number;
  wip: number;
}

export interface EOQInputs {
  demandRate: number;
  setupCost: number;
  unitCost: number;
  capitalCostRate: number;
  physicalHoldingCost: number;
}

export interface EOQOutputs {
  holdingCost: number;
  eoq: number;
  totalCost: number;
  totalCostAtQ?: number;
  savingsPercent?: number;
}

export interface NewsvendorInputs {
  sellingPrice: number;
  cost: number;
  salvageValue: number;
  meanDemand: number;
  stdDemand: number;
}

export interface NewsvendorOutputs {
  overageCost: number;
  underageCost: number;
  criticalRatio: number;
  zScore: number;
  optimalQuantity: number;
  serviceLevel: number;
  expectedProfit: number;
  stockoutProb: number;
}

export interface LittlesLawInputs {
  wip?: number;
  throughputRate?: number;
  throughputTime?: number;
}

export interface LittlesLawOutputs {
  wip: number;
  throughputRate: number;
  throughputTime: number;
}