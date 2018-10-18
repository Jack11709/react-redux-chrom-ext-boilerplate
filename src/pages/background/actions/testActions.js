import { TEST_ACTION, REMOVE_TEST_ACTION } from './types';

export const testAction = () => {
  return { type: TEST_ACTION, payload: 'test' };
};

export const removeTestAction = () => {
  return { type: REMOVE_TEST_ACTION };
};
