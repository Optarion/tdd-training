/*
1 ➔ I
   2 ➔ II
   3 ➔ III
   4 ➔ IV
   5 ➔ V
   9 ➔ IX
  21 ➔ XXI
  50 ➔ L
 100 ➔ C
 500 ➔ D
1000 ➔ M
*/

import toRomanNumerals from './romanNumerals';

test('romanNumerals', () => {
   describe('should return I for 1', () => {
      expect(toRomanNumerals(1)).toEqual('I');
   })
});
