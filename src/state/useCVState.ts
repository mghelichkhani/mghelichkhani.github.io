import { useState, useCallback } from 'react';
import type {
  CVData,
  RoleWithScore
} from '../models/cv-types';
import {
  computeRelevanceScore,
  sortRoles
} from './relevance';

export interface CVUIState {
  activeTab: "timeline" | "skills" | "tech";
}

const DEFAULT_STATE: CVUIState = {
  activeTab: "timeline"
};

export function useCVState(cvData: CVData) {
  const [state, setState] = useState<CVUIState>(DEFAULT_STATE);

  // Set active tab
  const setActiveTab = useCallback((tab: "timeline" | "skills" | "tech") => {
    setState(prev => ({ ...prev, activeTab: tab }));
  }, []);

  // Get visible roles with scores
  const getVisibleRoles = useCallback((): RoleWithScore[] => {
    let roles = cvData.roles.map(role => ({
      ...role,
      relevanceScore: computeRelevanceScore(role)
    }));

    // Sort
    roles = sortRoles(roles);

    return roles;
  }, [cvData]);

  return {
    state,
    setActiveTab,
    getVisibleRoles
  };
}

