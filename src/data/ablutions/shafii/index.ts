import type { AblutionTypeId, AblutionDefinition } from '../types';
import { wudu } from './wudu';
import { ghuslMen } from './ghusl-men';
import { ghuslWomen } from './ghusl-women';
import { tayammum } from './tayammum';

export { wudu } from './wudu';
export { ghuslMen } from './ghusl-men';
export { ghuslWomen } from './ghusl-women';
export { tayammum } from './tayammum';
export { shafiiInvalidators, shafiiNonInvalidators } from './invalidators';
export { shafiiSpecialCases } from './special-cases';
export { shafiiErrors } from './common-errors';

export const allShafiiAblutions: AblutionDefinition[] = [wudu, ghuslMen, ghuslWomen, tayammum];

export function getShafiiAblutionById(id: AblutionTypeId): AblutionDefinition | undefined {
  return allShafiiAblutions.find(a => a.id === id);
}
