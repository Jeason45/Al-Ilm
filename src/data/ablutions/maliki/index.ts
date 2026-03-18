import type { AblutionTypeId, AblutionDefinition } from '../types';
import { wudu } from './wudu';
import { ghuslMen } from './ghusl-men';
import { ghuslWomen } from './ghusl-women';
import { tayammum } from './tayammum';

export { wudu } from './wudu';
export { ghuslMen } from './ghusl-men';
export { ghuslWomen } from './ghusl-women';
export { tayammum } from './tayammum';
export { malikiInvalidators, malikiNonInvalidators } from './invalidators';
export { malikiSpecialCases } from './special-cases';
export { malikiErrors } from './common-errors';

export const allMalikiAblutions: AblutionDefinition[] = [wudu, ghuslMen, ghuslWomen, tayammum];

export function getMalikiAblutionById(id: AblutionTypeId): AblutionDefinition | undefined {
  return allMalikiAblutions.find(a => a.id === id);
}
