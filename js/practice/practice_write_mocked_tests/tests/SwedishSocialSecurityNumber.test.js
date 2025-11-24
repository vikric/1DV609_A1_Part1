/* import { SwedishSocialSecurityNumber } from "../src/correct/SwedishSocialSecurityNumber"; */
/* import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck"; */
/* import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecurityNumberNoTrim"; */
/* import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn"; */
import { SwedishSocialSecurityNumber } from "../src/bugs/BuggySwedishSocialSecutityNumberWrongYear";
import { beforeEach, expect, jest } from "@jest/globals";

//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe("SwedishSocialSecurityNumber Tests", () => {
  // Creating these mockHelper & sut before the beforEach block makes them accessible througout the test. Otherwise they
  // would only be available within the beforeEach block

  let mockHelper;
  let sut;
  const ssn = "950407-1234";
  const ssnWithSpaces = " 950407-1234 ";

  beforeEach(() => {
    mockHelper = {
      isCorrectLength: jest.fn().mockReturnValue(true),
      isCorrectFormat: jest.fn().mockReturnValue(true),
      isValidMonth: jest.fn().mockReturnValue(true),
      isValidDay: jest.fn().mockReturnValue(true),
      luhnisCorrect: jest.fn().mockReturnValue(true),
    };
  });

  test("Should throw exception when length is invalid", () => {
    mockHelper.isCorrectLength.mockReturnValue(false);
    expect(() => new SwedishSocialSecurityNumber(ssn, mockHelper)).toThrow();
  });

  test("Should throw exception when ssn is not trimmed", () => {
    const trimSpy = jest.spyOn(String.prototype, "trim");
    sut = new SwedishSocialSecurityNumber(ssnWithSpaces, mockHelper);
    expect(trimSpy).toHaveBeenCalled();
  });

  test("Should throw exception when luhn alghorithm is invalid", () => {
    mockHelper.luhnisCorrect.mockReturnValue(false);
    expect(() => new SwedishSocialSecurityNumber(ssn, mockHelper)).toThrow();
  });

  test("Should return first 2 digits from entered ssn", () => {
    const expectedYear = ssn.substring(0, 2);
    sut = new SwedishSocialSecurityNumber(ssn, mockHelper);
    const actual = sut.getYear();
    expect(actual).toBe(expectedYear);
  });

  test("Should throw exception when format is invalid", () => {
    mockHelper.isCorrectFormat.mockReturnValue(false);
    expect(() => new SwedishSocialSecurityNumber(ssn, mockHelper)).toThrow();
  });

  test("Should throw exception when month is invalid", () => {
    mockHelper.isValidMonth.mockReturnValue(false);
    expect(() => new SwedishSocialSecurityNumber(ssn, mockHelper)).toThrow();
  });

  test("Should throw exception when day is invalid", () => {
    mockHelper.isValidDay.mockReturnValue(false);
    expect(() => new SwedishSocialSecurityNumber(ssn, mockHelper)).toThrow();
  });

  test("Should return last 4 digits from entered ssn", () => {
    const expectedDigits = ssn.substring(7, 11);
    sut = new SwedishSocialSecurityNumber(ssn, mockHelper);
    const actual = sut.getSerialNumber();
    expect(actual).toBe(expectedDigits);
  });
});
