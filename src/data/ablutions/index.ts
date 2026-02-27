import type { AblutionTypeId, AblutionDefinition } from './types';
import { wudu } from './wudu';
import { ghuslMen } from './ghusl-men';
import { ghuslWomen } from './ghusl-women';
import { tayammum } from './tayammum';

export { wudu } from './wudu';
export { ghuslMen } from './ghusl-men';
export { ghuslWomen } from './ghusl-women';
export { tayammum } from './tayammum';
export { wuduInvalidators } from './invalidators';
export { wuduDuas } from './duas';
export { ablutionErrors } from './common-errors';
export { ablutionSpecialCases } from './special-cases';
export * from './types';

export const allAblutions: AblutionDefinition[] = [wudu, ghuslMen, ghuslWomen, tayammum];

export function getAblutionById(id: AblutionTypeId): AblutionDefinition | undefined {
  return allAblutions.find(a => a.id === id);
}
