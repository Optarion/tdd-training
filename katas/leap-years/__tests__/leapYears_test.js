import isLeapYear from '../leapYear'

test('leapYear', () => {
    expect(isLeapYear(1944)).toEqual(true)
})
