import type { AblutionTypeId, AblutionDefinition, WuduInvalidator } from './types';
import type { MadhabId } from '../prayer-guide/types';
import type { CommonError, SpecialCase } from '../prayer-guide/types';
import { allHanafiAblutions, hanafiInvalidators, hanafiNonInvalidators, hanafiSpecialCases, hanafiErrors } from './hanafi';
import { allMalikiAblutions, malikiInvalidators, malikiNonInvalidators, malikiSpecialCases, malikiErrors } from './maliki';
import { allShafiiAblutions, shafiiInvalidators, shafiiNonInvalidators, shafiiSpecialCases, shafiiErrors } from './shafii';
import { allHanbaliAblutions, hanbaliInvalidators, hanbaliNonInvalidators, hanbaliSpecialCases, hanbaliErrors } from './hanbali';

// Re-export les ablutions Hanafi comme défaut (école par défaut)
export {
  wudu, ghuslMen, ghuslWomen, tayammum,
} from './hanafi';

export { hanafiInvalidators, hanafiNonInvalidators } from './hanafi';
export { hanafiSpecialCases } from './hanafi';
export { hanafiErrors } from './hanafi';

export { malikiInvalidators, malikiNonInvalidators } from './maliki';
export { malikiSpecialCases } from './maliki';
export { malikiErrors } from './maliki';

export { shafiiInvalidators, shafiiNonInvalidators } from './shafii';
export { shafiiSpecialCases } from './shafii';
export { shafiiErrors } from './shafii';

export { hanbaliInvalidators, hanbaliNonInvalidators } from './hanbali';
export { hanbaliSpecialCases } from './hanbali';
export { hanbaliErrors } from './hanbali';

// Duas et anciennes données non-madhab-spécifiques
export { wuduDuas } from './duas';
export * from './types';

export const allAblutions: AblutionDefinition[] = allHanafiAblutions;

export function getAblutionById(id: AblutionTypeId): AblutionDefinition | undefined {
  return allAblutions.find(a => a.id === id);
}

// ── API par madhab ──

export function getAblutionsByMadhab(madhab: MadhabId): AblutionDefinition[] {
  switch (madhab) {
    case 'hanafi': return allHanafiAblutions;
    case 'maliki': return allMalikiAblutions;
    case 'shafii': return allShafiiAblutions;
    case 'hanbali': return allHanbaliAblutions;
    default: return allHanafiAblutions;
  }
}

export function getAblutionByMadhab(madhab: MadhabId, id: AblutionTypeId): AblutionDefinition | undefined {
  return getAblutionsByMadhab(madhab).find(a => a.id === id);
}

export function getInvalidatorsByMadhab(madhab: MadhabId): WuduInvalidator[] {
  switch (madhab) {
    case 'hanafi': return hanafiInvalidators;
    case 'maliki': return malikiInvalidators;
    case 'shafii': return shafiiInvalidators;
    case 'hanbali': return hanbaliInvalidators;
    default: return hanafiInvalidators;
  }
}

export function getNonInvalidatorsByMadhab(madhab: MadhabId): WuduInvalidator[] {
  switch (madhab) {
    case 'hanafi': return hanafiNonInvalidators;
    case 'maliki': return malikiNonInvalidators;
    case 'shafii': return shafiiNonInvalidators;
    case 'hanbali': return hanbaliNonInvalidators;
    default: return hanafiNonInvalidators;
  }
}

export function getSpecialCasesByMadhab(madhab: MadhabId): SpecialCase[] {
  switch (madhab) {
    case 'hanafi': return hanafiSpecialCases;
    case 'maliki': return malikiSpecialCases;
    case 'shafii': return shafiiSpecialCases;
    case 'hanbali': return hanbaliSpecialCases;
    default: return hanafiSpecialCases;
  }
}

export function getErrorsByMadhab(madhab: MadhabId): CommonError[] {
  switch (madhab) {
    case 'hanafi': return hanafiErrors;
    case 'maliki': return malikiErrors;
    case 'shafii': return shafiiErrors;
    case 'hanbali': return hanbaliErrors;
    default: return hanafiErrors;
  }
}
