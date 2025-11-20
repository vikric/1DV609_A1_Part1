import { SSNHelper } from "../src/correct/SSNHelper";

// 2 error
/* import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowMonth0"; */

// Correct
/* import { SSNHelper } from "../src/bugs/BuggySSNHelperWrongLength"; */
/* import { SSNHelper } from "../src/bugs/BuggySSNHelperIncorrectFormat"; */
/* import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowDayUpTo30"; */
/* import { SSNHelper } from "../src/bugs/BuggySSNHelperMessyLuhn"; */

describe("SSNHelper Tests", () => {
  const helper = new SSNHelper();
  const correctStringInput = "900407-2261";
  const incorrectStringInput = "1234567-1234";

  test("isCorrectLength should return true when correct length is entered", () => {
    const result = helper.isCorrectLength(correctStringInput);
    expect(result).toBeTruthy();
  });

  test("isCorrectLength should return false when incorrect length is entered", () => {
    const result = helper.isCorrectLength(incorrectStringInput);
    expect(result).toBeFalsy();
  });

  test("isValidMonth should return true when input has valid month", () => {
    for (let i = 1; i <= 12; i++) {
      const result = helper.isValidMonth(i);
      expect(result).toBeTruthy();
    }
  });

  test("isValidMonth should return false when input has invalid month", () => {
    const result = helper.isValidMonth(0);
    expect(result).toBeFalsy();
  });

  test("returns true when input has valid day", () => {
    for (let i = 1; i <= 31; i++) {
      const result = helper.isValidDay(i);
      expect(result).toBeTruthy();
    }
  });

  test("isCorrectFormat should return false when entering invalid regex", () => {
    const result = helper.isCorrectFormat(incorrectStringInput);
    expect(result).toBeFalsy();
  });

  test("luhnisCorrect should return true on correct input", () => {
    const result = helper.luhnisCorrect(correctStringInput);
    expect(result).toBeTruthy();
  });
});
