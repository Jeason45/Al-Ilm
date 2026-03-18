import type { AblutionTypeId, AblutionDefinition } from '../types';
import { wudu } from './wudu';
import { ghuslMen } from './ghusl-men';
import { ghuslWomen } from './ghusl-women';
import { tayammum } from './tayammum';

export { wudu } from './wudu';
export { ghuslMen } from './ghusl-men';
export { ghuslWomen } from './ghusl-women';
export { tayammum } from './tayammum';
export { hanafiInvalidators, hanafiNonInvalidators } from './invalidators';
export { hanafiSpecialCases } from './special-cases';
export { hanafiErrors } from './common-errors';

export const allHanafiAblutions: AblutionDefinition[] = [wudu, ghuslMen, ghuslWomen, tayammum];

export function getHanafiAblutionById(id: AblutionTypeId): AblutionDefinition | undefined {
  return allHanafiAblutions.find(a => a.id === id);
}
