// Data loading utilities for the MBA 204 Operations Study Guide

import { Concept, Lecture, FormulaCategory, ExamData, NormalTableEntry } from './types';

// Cache for loaded data
const dataCache = new Map<string, any>();

export async function loadConcepts(): Promise<Concept[]> {
  if (dataCache.has('concepts')) {
    return dataCache.get('concepts');
  }
  
  try {
    const response = await fetch('/data/concepts.json');
    if (!response.ok) {
      throw new Error(`Failed to load concepts: ${response.statusText}`);
    }
    const concepts = await response.json();
    dataCache.set('concepts', concepts);
    return concepts;
  } catch (error) {
    console.error('Error loading concepts:', error);
    return [];
  }
}

export async function loadLecture(slug: string): Promise<Lecture | null> {
  const cacheKey = `lecture-${slug}`;
  if (dataCache.has(cacheKey)) {
    return dataCache.get(cacheKey);
  }
  
  try {
    const response = await fetch(`/data/lectures/${slug}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load lecture ${slug}: ${response.statusText}`);
    }
    const lecture = await response.json();
    dataCache.set(cacheKey, lecture);
    return lecture;
  } catch (error) {
    console.error(`Error loading lecture ${slug}:`, error);
    return null;
  }
}

export async function loadFormulas(): Promise<Record<string, FormulaCategory>> {
  if (dataCache.has('formulas')) {
    return dataCache.get('formulas');
  }
  
  try {
    const response = await fetch('/data/formulas.json');
    if (!response.ok) {
      throw new Error(`Failed to load formulas: ${response.statusText}`);
    }
    const formulas = await response.json();
    dataCache.set('formulas', formulas);
    return formulas;
  } catch (error) {
    console.error('Error loading formulas:', error);
    return {};
  }
}

export async function loadExam(examId: string): Promise<ExamData | null> {
  const cacheKey = `exam-${examId}`;
  if (dataCache.has(cacheKey)) {
    return dataCache.get(cacheKey);
  }
  
  try {
    const response = await fetch(`/data/exams/${examId}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load exam ${examId}: ${response.statusText}`);
    }
    const exam = await response.json();
    dataCache.set(cacheKey, exam);
    return exam;
  } catch (error) {
    console.error(`Error loading exam ${examId}:`, error);
    return null;
  }
}

export async function loadNormalTable(): Promise<NormalTableEntry[]> {
  if (dataCache.has('normalTable')) {
    return dataCache.get('normalTable');
  }
  
  try {
    const response = await fetch('/data/normal-table.json');
    if (!response.ok) {
      throw new Error(`Failed to load normal table: ${response.statusText}`);
    }
    const normalTable = await response.json();
    dataCache.set('normalTable', normalTable);
    return normalTable;
  } catch (error) {
    console.error('Error loading normal table:', error);
    return [];
  }
}

// Helper functions
export function getConceptById(concepts: Concept[], id: string): Concept | undefined {
  return concepts.find(c => c.id === id);
}

export function getConceptsByModule(concepts: Concept[], module: 'A' | 'B' | 'C'): Concept[] {
  return concepts.filter(c => c.module === module);
}

export function getConceptsByPriority(concepts: Concept[], priority: 'HIGH' | 'MEDIUM' | 'LOW'): Concept[] {
  return concepts.filter(c => c.priority === priority);
}

export function getSecondHalfConcepts(concepts: Concept[]): Concept[] {
  return concepts.filter(c => c.isSecondHalf);
}

export function getModuleColor(module: 'A' | 'B' | 'C'): string {
  switch (module) {
    case 'A': return 'text-moduleA bg-blue-100 dark:bg-blue-900/20';
    case 'B': return 'text-moduleB bg-purple-100 dark:bg-purple-900/20';
    case 'C': return 'text-moduleC bg-green-100 dark:bg-green-900/20';
  }
}

export function getPriorityColor(priority: 'HIGH' | 'MEDIUM' | 'LOW'): string {
  switch (priority) {
    case 'HIGH': return 'text-priorityHigh bg-red-100 dark:bg-red-900/20';
    case 'MEDIUM': return 'text-priorityMedium bg-yellow-100 dark:bg-yellow-900/20';
    case 'LOW': return 'text-priorityLow bg-gray-100 dark:bg-gray-900/20';
  }
}

export function getPriorityIcon(priority: 'HIGH' | 'MEDIUM' | 'LOW'): string {
  switch (priority) {
    case 'HIGH': return '🔴';
    case 'MEDIUM': return '🟡';
    case 'LOW': return '🟢';
  }
}

export function getModuleTitle(module: 'A' | 'B' | 'C'): string {
  switch (module) {
    case 'A': return 'Process Analysis';
    case 'B': return 'Variability';
    case 'C': return 'Supply Chain';
  }
}

// Get all lecture slugs for static generation
export const lecturesSlugs = [
  'ops-strategy',
  'processes-1-kristens', 
  'processes-2-beleza',
  'factory-physics',
  'queueing',
  'supply-chain-risk',
  'beer-game-bullwhip',
  'eoq',
  'newsvendor',
  'supply-chain-strategy',
  'littlefield',
  'brightside',
  'southwest-review'
];

export const examIds = [
  'midterm-2026',
  'final-review',
  'review-notes'
];