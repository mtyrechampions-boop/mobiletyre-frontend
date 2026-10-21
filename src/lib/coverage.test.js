import test from 'node:test';
import assert from 'node:assert/strict';
import { checkCoverage } from './coverage.js';

const status = (v) => checkCoverage(v).status;

test('supported full postcodes', () => {
  assert.equal(status('GU11 3HY'), 'supported');
  assert.equal(status('  gu113hy '), 'supported');
  assert.equal(status('RG21 4AA'), 'supported');
});

test('supported partial postcodes (outward codes in the locations list)', () => {
  assert.equal(status('GU11'), 'supported');
  assert.equal(status('gu1'), 'supported');
  assert.equal(status('RG6'), 'supported');
});

test('valid but uncovered postcodes are unsupported', () => {
  assert.equal(status('M1 1AE'), 'unsupported');
  assert.equal(status('EH1 1YZ'), 'unsupported');
  assert.equal(status('KT1'), 'unsupported');
  assert.equal(status('GU2 7XH'), 'unsupported'); // GU2 is not in the list; GU1/GU21 are
});

test('malformed and empty input is invalid', () => {
  assert.equal(status(''), 'invalid');
  assert.equal(status('   '), 'invalid');
  assert.equal(status('12345'), 'invalid');
  assert.equal(status('GU11!3HY'), 'invalid');
  assert.equal(status('<script>'), 'invalid');
  assert.equal(status(undefined), 'invalid');
});

test('postcodes that cannot determine coverage are incomplete', () => {
  assert.equal(status('GU'), 'incomplete');
  assert.equal(status('G'), 'incomplete');
  assert.equal(status('GU11 3'), 'incomplete');
});
