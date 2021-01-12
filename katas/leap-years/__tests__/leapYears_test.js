// All years divisible by 400 ARE leap years (so, for example, 2000 was indeed a leap year),
// All years divisible by 100 but not by 400 are NOT leap years (so, for example, 1700, 1800, and 1900 were NOT leap years, NOR will 2100 be a leap year),
// All years divisible by 4 but not by 100 ARE leap years (e.g., 2008, 2012, 2016),
// All years not divisible by 4 are NOT leap years (e.g. 2017, 2018, 2019).

import isLeapYear from '../leapYear'

test('leapYear', () => {
    describe('should return true if year is divisible by 400', () => {
        expect(isLeapYear(400)).toEqual(true)
    })


    describe('should return false if year is not divisible by 4', () => {
        expect(isLeapYear(3)).toEqual(false)
        expect(isLeapYear(5)).toEqual(false)
    })

    describe('should return true if year is divisible by 4 but not by 100', () => {
        expect(isLeapYear(2008)).toEqual(true)
        expect(isLeapYear(2012)).toEqual(true)
        expect(isLeapYear(2016)).toEqual(true)
    })
})

// Pas sûr d'être bon dans mes choix de tests. J'ai fait ça un peu incrémentalement mais j'étais pas trop sûr de moi :(

// Pb lors du 'should return true if year is divisible by 4 but not by 100'
// le test est déjà OK parce que je return true dans tous les cas... pourtant, la condition n'est pas testée. Comment je fais ?


// Comment je fais pour faire cet algo en TDD si je n'ai pas à l'avance les cas de test?
