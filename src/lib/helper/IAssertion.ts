export interface Assertion {
  /**
   * Check if the actual value is strictly equal to the expected value.
   * @param actual - The value for the assertion
   * @param expected - The value to be asserted
   * @param message - Custom message to be displayed if the assertion fails
   */
  equals<T = string | number | boolean>(
    actual: T,
    expected: T,
    message: string
  ): void;

  /**
   * Check if the actual value includes the expected value.
   * @param actual - The actual value to be checked.
   * @param expected - The expected value to check for.
   * @param message - The message to be displayed if the assertion fails.
   */
  includes(actual: string, expected: string, message: string): void;

  /**
   * Check if the value is strictly true.
   * @param value - The value for the assertion
   * @param message - The message to be displayed if the assertion fails
   */
  isTrue(value: boolean, message: string): void;

  /**
   * Check if the value is strictly false.
   * @param value - The value for the assertion
   * @param message - The message to be displayed if the assertion fails
   */
  isFalse(value: boolean, message: string): void;

  /**
   * Check if the actual value is not equal to the expected value.
   * @param actual - The actual value to be compared.
   * @param expected - The expected value to compare against.
   * @param message - The message to be displayed if the assertion fails.
   */
  notEqual<T = string | number | boolean>(
    actual: T,
    expected: T,
    message: string
  ): void;

  /**
   * Check if the actual value is greater than the expected value.
   * @param actual - The actual value to be compared.
   * @param expected - The expected value to compare against.
   * @param message - The message to be displayed if the assertion fails.
   */
  greaterThan(actual: number, expected: number, message: string): void;

  /**
   * Check if the actual value is less than the expected value.
   * @param actual - The actual value to be compared.
   * @param expected - The expected value to compare against.
   * @param message - The message to be displayed if the assertion fails.
   */
  isLessThan(actual: number, expected: number, message: string): void;

  /**
   * Check if the value is not null or undefined.
   * @param value - The value to be checked.
   * @param message - The message to be displayed if the assertion fails.
   */
  notNull(value: any, message: string): void;

  /**
   * Check if the value is null.
   * @param value - The value to be checked.
   * @param message - The message to be displayed if the assertion fails.
   */
  isNull(value: any, message: string): void;

  /**
   * Check if the value is undefined.
   * @param value - The value to be checked.
   * @param message - The message to be displayed if the assertion fails.
   */
  isUndefined(value: any, message: string): void;

  /**
   * Check if the value is defined.
   * @param value - The value to be checked.
   * @param message - The message to be displayed if the assertion fails.
   */
  isDefined(value: any, message: string): void;

  /**
   * Check if the value is a number.
   * @param value - The value to be checked.
   * @param message - The message to be displayed if the assertion fails.
   */
  isNumber(value: any, message: string): void;

  /**
   * Check if the value is a string.
   * @param value - The value to be checked.
   * @param message - The message to be displayed if the assertion fails.
   */
  isString(value: any, message: string): void;

  /**
   * Throw error (if any) for all assertions
   */
  assertAll(): void;
}
