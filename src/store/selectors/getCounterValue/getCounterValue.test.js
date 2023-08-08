import { describe, expect, it } from 'vitest';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  it('empty state', () => {
    expect(getCounterValue({})).toBe(0);
  });
  it('filled state', () => {
    expect(getCounterValue({ counter: { counter: 100 } })).toBe(100);
  });
});
