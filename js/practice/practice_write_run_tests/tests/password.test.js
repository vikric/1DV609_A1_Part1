// Select one of the Password versions to test

/* import { Password } from "../src/BugDoesNotHash"; */

// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
/* import { Password } from "../src/BugNeverContainsNumbers"; */

// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
/* import { Password } from "../src/Correct"; */

// Correct!
/* import { Password } from "../src/BugToShortPassword"; */
/* import { Password } from "../src/BugVeryShort"; */
/* import { Password } from '../src/BugDoesNotTrim' */

describe("Password class, test suite", () => {
  //put constants here to increase readability
  const correctPassword = "MyPassword1234";
  /* const password = new Password(correctPassword); */

  test("constructor throws for all too short passwords", () => {
    const incorrectPasswords = [
      "12345",              // Catches bugs on passwords with length less than 6
      "abcdef12345",        // Catches bugs on passwords with length less than 11
      "   12345678901 ",    // Catches bugs on passwords that does not trim
    ];

    for (const pw of incorrectPasswords) {
      expect(() => new Password(pw)).toThrow("Too short password");
    }
  });

  test("throws error if password does not contain numbers", () => {
    expect(() => {
      new Password("TestTestTestTest");
    }).toThrow("No number found");
  });

  test("Return the hashed password", () => {
    const password = new Password(correctPassword)
    let hashValue = 7;
    for (let i = 0; i < correctPassword.length; i++) {
      hashValue = hashValue * 31 + correctPassword.charCodeAt(i);
    }
    expect(password.getPasswordHash()).toBe(hashValue);
  });

  test("Check if password is the same", () => {
    const anotherCorrectPassword = new Password("NewPassWord1234");
    const password = new Password(correctPassword)
    const actual = password.isPasswordSame(anotherCorrectPassword);
    expect(actual).toBeFalsy();
  });

  test("Check if password argument is instanceOf Password", () => {
    expect(() => {
      new Password(correctPassword).isPasswordSame("Test");
    }).toThrow("Invalid argument");
  });
});
