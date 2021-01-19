/*
1 ➔ I
   2 ➔ II
   3 ➔ III
   4 ➔ IV
   5 ➔ V
   8 ➔ IIIV
   9 ➔ IX
  21 ➔ XXI
  50 ➔ L
  80 ➔ LXXX
  90 ➔ XC
  99 ➔ XCIX
 100 ➔ C
 400 ➔ CD
 500 ➔ D
 900 ➔ CM
 999 ➔ CMXCIX
1000 ➔ M
2021 ➔ MMXXI
*/

import toRomanNumerals from './romanNumerals';

test('romanNumerals', () => {
   describe('should return "I" for 1', () => {
      expect(toRomanNumerals(1)).toEqual('I');
   })

   describe('should return "II" for 2', () => {
      expect(toRomanNumerals(2)).toEqual('II');
   })

   describe('should return "IV" for 4', () => {
      expect(toRomanNumerals(4)).toEqual('IV');
   })

   describe('should return "V" for 5', () => {
      expect(toRomanNumerals(5)).toEqual('V');
   })

   describe('should return "VI" for 6', () => {
      expect(toRomanNumerals(6)).toEqual('VI');
   })

   describe('should return "VII" for 7', () => {
      expect(toRomanNumerals(7)).toEqual('VII');
   })

   describe('should return "VIII" for 8', () => {
      expect(toRomanNumerals(8)).toEqual('VIII');
   })

   describe('should return "IX" for 9', () => {
      expect(toRomanNumerals(9)).toEqual('IX');
   })

   describe('should return "X" for 10', () => {
      expect(toRomanNumerals(10)).toEqual('X');
   })

   describe('should return "XI" for 11', () => {
      expect(toRomanNumerals(11)).toEqual('XI');
   })

   describe('should return "XII" for 12', () => {
      expect(toRomanNumerals(12)).toEqual('XII');
   })

   describe('should return "XV" for 15', () => {
      expect(toRomanNumerals(15)).toEqual('XV');
   })

   describe('should return "M" for 1000', () => {
      expect(toRomanNumerals(1000)).toEqual('M');
   })
});


