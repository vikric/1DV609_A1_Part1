// Select one of the Password versions to test

/* import { Password } from "../src/Correct"; */
/* import { Password } from "../src/MyBug"; */

// Correct!
/* import { Password } from '../src/BugMissingPasswordCheck' */
/* import { Password } from "../src/BugToShortPassword"; */
/* import { Password } from "../src/BugVeryShort"; */
/* import { Password } from '../src/BugDoesNotTrim' */
/* import { Password } from '../src/BugWrongMessage' */
/* import { Password } from '../src/BugMissingNumberCheck' */
/* import { Password } from "../src/BugDoesNotHash"; */
/* import { Password } from '../src/BugisPasswordAlwaysSame' */
/* import { Password } from "../src/BugWrongHashingAlgorithm"; */
/* import { Password } from "../src/BugNeverContainsNumbers"; */

describe("Password class, test suite", () => {
  //put constants here to increase readability
  const correctPassword = "MyPassword1234";

  test("Check if password argument is instanceOf Password", () => {
    expect(() => {
      new Password(correctPassword).isPasswordSame("Test");
    }).toThrow("Invalid argument");
  });

  test("constructor should throw exception for short passwords", () => {
    const incorrectPasswords = [
      "", // Catches bugs on empty passwords
      "12345", // Catches bugs on passwords with length less than 6
      "abcde12345", // Catches bugs on passwords with length less than 11
      "  12345678901  ", // Catches bugs on passwords that does not trim or is less than 12.
    ];

    for (const pw of incorrectPasswords) {
      expect(() => new Password(pw)).toThrow("Too short password");
    }
  });

  test("constructor should throw exception for passwords without numbers", () => {
    expect(() => {
      new Password("TestTestTestTest");
    }).toThrow("No number found");
  });

  test("constructor should not throw exception for passwords without numbers", () => {
    expect(() => {
      new Password(correctPassword);
    }).not.toThrow("No number found");
  });

  test("Return the hashed password", () => {
    const password = new Password(correctPassword);
    let hashValue = 7;
    for (let i = 0; i < correctPassword.length; i++) {
      hashValue = hashValue * 31 + correctPassword.charCodeAt(i);
    }
    expect(password.getPasswordHash()).toBe(hashValue);
  });

  test("Check if password is the same", () => {
    const anotherCorrectPassword = new Password("NewPassWord1234");
    const password = new Password(correctPassword);
    const actual = password.isPasswordSame(anotherCorrectPassword);
    expect(actual).toBeFalsy();
  });
});
