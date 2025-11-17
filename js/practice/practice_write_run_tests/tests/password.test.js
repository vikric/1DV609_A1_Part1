
// Select one of the Password versions to test

import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {

    //put constants here to increase readability
    const passwordText = "Password1234"
    const password = new Password(passwordText)

    test('Check constructor of class', () => {
        
        expect(password).toBeInstanceOf(Password);
    });

    test('throws error for too short password', () => {
        expect(() => {
            new Password('Test123')
        }).toThrow('Too short password')
    });

    test('throws error if password does not contain numbers', () => {
        expect(() => {
            new Password('Test123123123123')
        }).toThrow('No number found')
    });

    //Add your tests here
});