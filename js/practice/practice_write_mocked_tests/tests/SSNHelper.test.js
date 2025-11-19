/* import { SSNHelper } from "../src/correct/SSNHelper"; */
/* import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowDayUpTo30"; */
import { SSNHelper } from "../src/bugs/BuggySSNHelperAllowMonth0";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperIncorrectFormat";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperMessyLuhn";
// import { SSNHelper } from "../src/bugs/BuggySSNHelperWrongLength";
// import { SSNHelper } from "../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck";
// import { SSNHelper } from "../src/bugs/BuggySwedishSocialSecurityNumberNoTrim";
// import { SSNHelper } from "../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn";
//import { SSNHelper } from "../src/bugs/BuggySwedishSocialSecutityNumberWrongYear";

describe("SSNHelper Tests", () => {
  const helper = new SSNHelper();
  test("replace this test with one of your own", () => {
    expect(true).toBe(true);
  });

  test("returns true when input has correct length", () => {
    expect(helper.isCorrectLength("251119-1234")).toBeTruthy();
  });

/*   test("returns true when input has correct format", () => {
    expect(helper.isCorrectFormat("123456-1234")).toBeTruthy();
  }); */

  test("returns true when input has valid month", () => {
    expect(helper.isValidMonth(12)).not.toBe(helper.isValidMonth(0));
  });

/*   test("returns true when input has valid day", () => {
    expect(helper.isValidDay(31)).toBeTruthy();
  });
 */
/*   test("returns true when input has luhn digit", () => {
    expect(helper.luhnisCorrect("780328-9706")).toBeTruthy();
  }); */

  //Add your tests here
});
