import type { AblutionTypeId, AblutionDefinition } from '../types';
import { wudu } from './wudu';
import { ghuslMen } from './ghusl-men';
import { ghuslWomen } from './ghusl-women';
import { tayammum } from './tayammum';

export { wudu } from './wudu';
export { ghuslMen } from './ghusl-men';
export { ghuslWomen } from './ghusl-women';
export { tayammum } from './tayammum';
export { hanbaliInvalidators, hanbaliNonInvalidators } from './invalidators';
export { hanbaliSpecialCases } from './special-cases';
export { hanbaliErrors } from './common-errors';

export const allHanbaliAblutions: AblutionDefinition[] = [wudu, ghuslMen, ghuslWomen, tayammum];

export function getHanbaliAblutionById(id: AblutionTypeId): AblutionDefinition | undefined {
  return allHanbaliAblutions.find(a => a.id === id);
}
