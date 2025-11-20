import { SwedishSocialSecurityNumber } from "../src/correct/SwedishSocialSecurityNumber";
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck";
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberNoTrim";
// import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn";
//import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecutityNumberWrongYear";
import { beforeEach, expect, jest } from "@jest/globals";

//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe("SwedishSocialSecurityNumber Tests", () => {
  // Creating these mockHelper & sut before the beforEach block makes them accessible througout the test. Otherwise they
  // would only be available within the beforeEach block

  let mockHelper;
  let sut;
  const ssn = "900407-2261";

  beforeEach(() => {
    mockHelper = {
      isCorrectLength: jest.fn().mockReturnValue(true),
      isCorrectFormat: jest.fn().mockReturnValue(true),
      isValidMonth: jest.fn().mockReturnValue(true),
      isValidDay: jest.fn().mockReturnValue(true),
      luhnisCorrect: jest.fn().mockReturnValue(true),
    };
    sut = new SwedishSocialSecurityNumber(ssn, mockHelper);
  });

  test("Mock test", () => {
    const actual = sut.getYear();
    const expectedYear = ssn.substring(0,2)
    expect(actual).toBe(expectedYear)
  });

  //Add your tests here
});
