/* import { SSNHelper } from "../src/correct/SSNHelper"; */

// 2 error
import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowMonth0";

// Correct
/* import { SSNHelper } from "../src/bugs/BuggySSNHelperWrongLength"; */
/* import { SSNHelper } from "../src/bugs/BuggySSNHelperIncorrectFormat"; */
/* import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowDayUpTo30"; */
/* import { SSNHelper } from "../src/bugs/BuggySSNHelperMessyLuhn"; */

describe("SSNHelper Tests", () => {
  const helper = new SSNHelper();

  const correctStringInput = ["900407-2261", "810710-4856", "820129-0528"];

  const incorrectStringInput = [
    "12345678-1234",
    "1234567-12345",
    "12345678-12345",
  ];

  const correctDays = ["1", "15", "31"];
  const correctMonths = ["1", "6", "12"];
  const incorrectMonths = ["0"];

  test.each(incorrectStringInput)(
    "isCorrectLength should return false when incorrect length is entered %s",
    (value) => {
      const result = helper.isCorrectLength(value);
      expect(result).toBeFalsy();
    }
  );

  test.each(incorrectMonths)(
    "isValidMonth should return false when input has invalid month %s",
    (month) => {
      const result = helper.isValidMonth(month);
      expect(result).toBeFalsy();
    }
  );

  test.each(correctDays)(
    "isValidDay should return true when input has valid day %s",
    (day) => {
      const result = helper.isValidDay(day);
      expect(result).toBeTruthy();
    }
  );

  test.each(incorrectStringInput)(
    "isCorrectFormat should return false when entering invalid format",
    (value) => {
      const result = helper.isCorrectFormat(value);
      expect(result).toBeFalsy();
    }
  );

  test.each(correctStringInput)(
    "luhnisCorrect should return true on correct input",
    (value) => {
      const result = helper.luhnisCorrect(value);
      expect(result).toBeTruthy();
    }
  );

  test.each(correctMonths)(
    "isValidMonth should return true when input has valid month '%s'",
    (month) => {
      const result = helper.isValidMonth(month);
      expect(result).toBeTruthy();
    }
  );
});
