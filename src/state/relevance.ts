import type {
  Role,
  RoleWithScore
} from '../models/cv-types';

/**
 * Compute recency score based on role dates
 * Returns 0-5 based on how recent the role is
 */
function computeRecencyScore(role: Role): number {
  const now = new Date();
  const endDate = role.endDate ? new Date(role.endDate) : now;
  
  // Use end date if available, otherwise start date
  const relevantDate = role.isCurrent ? now : endDate;
  
  // Calculate years since end date (or current date)
  const yearsSince = (now.getTime() - relevantDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
  
  // Score: 5 for current, 4 for <1 year, 3 for <2 years, etc.
  if (role.isCurrent) return 5;
  if (yearsSince < 1) return 4;
  if (yearsSince < 2) return 3;
  if (yearsSince < 3) return 2;
  if (yearsSince < 5) return 1;
  return 0;
}

/**
 * Compute relevance score for a role based on recency
 */
export function computeRelevanceScore(role: Role): number {
  // Recency: up to 3 points
  const recencyScore = computeRecencyScore(role);
  const recencyPoints = recencyScore * 0.6; // Scale to ~3 max

  return recencyPoints;
}

/**
 * Filter roles by search query
 */
/**
 * Sort roles by recency (newest end date first, fallback to start date)
 */
export function sortRoles(roles: RoleWithScore[]): RoleWithScore[] {
  const sorted = [...roles];

  sorted.sort((a, b) => {
    const aDate = getRoleSortDate(a);
    const bDate = getRoleSortDate(b);
    return bDate.getTime() - aDate.getTime();
  });

  return sorted;
}

function getRoleSortDate(role: Role): Date {
  if (role.isCurrent) {
    return new Date();
  }
  if (role.endDate) {
    const end = new Date(role.endDate);
    if (!Number.isNaN(end.getTime())) {
      return end;
    }
  }
  const start = new Date(role.startDate);
  return Number.isNaN(start.getTime()) ? new Date(0) : start;
}

/**
 * Group roles by year and month for timeline display
 * Returns structure: year -> months -> roles
 */
export function groupRolesByYear(roles: RoleWithScore[]): Array<{ 
  year: number;
  months: Array<{
    month: number;
    monthName: string;
    roles: RoleWithScore[];
  }>;
}> {
  if (roles.length === 0) return [];
  
  // Group by year and month
  const yearMonthMap = new Map<number, Map<number, RoleWithScore[]>>();
  
  roles.forEach(role => {
    // Group by end year (or current year if ongoing)
    const endDate = role.isCurrent 
      ? new Date() 
      : (role.endDate ? new Date(role.endDate) : new Date());
    const year = endDate.getFullYear();
    const month = endDate.getMonth(); // 0-11
    
    if (!yearMonthMap.has(year)) {
      yearMonthMap.set(year, new Map());
    }
    
    const monthMap = yearMonthMap.get(year)!;
    if (!monthMap.has(month)) {
      monthMap.set(month, []);
    }
    
    monthMap.get(month)!.push(role);
  });
  
  // Convert to array structure
  const result: Array<{ 
    year: number;
    months: Array<{
      month: number;
      monthName: string;
      roles: RoleWithScore[];
    }>;
  }> = [];
  
  Array.from(yearMonthMap.entries())
    .sort((a, b) => b[0] - a[0]) // Sort years descending
    .forEach(([year, monthMap]) => {
      const months: Array<{
        month: number;
        monthName: string;
        roles: RoleWithScore[];
      }> = [];
      
      Array.from(monthMap.entries())
        .sort((a, b) => b[0] - a[0]) // Sort months descending
        .forEach(([month, monthRoles]) => {
          months.push({
            month,
            monthName: getMonthName(month),
            roles: monthRoles
          });
        });
      
      result.push({ year, months });
    });
  
  return result;
}

function getMonthName(monthIndex: number): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[monthIndex];
}

