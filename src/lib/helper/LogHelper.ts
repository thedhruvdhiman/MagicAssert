/**
 * throwAssertionErrors - A standalone function to format and throw all collected assertion errors.
 *
 * @param errorMessageData {Array<{ message: string }>} - Array of assertion error messages.
 * @throws {Error} - Throws an error containing all assertion error messages.
 */

export const throwAssertionErrors = (
  errorMessageData: { message: string }[]
): void => {
  const errorMessages = errorMessageData
    .map(
      ({message}: { message: string }, index: number) =>
        `❌ [Assertion ${index + 1}]: \n${message}\n`
    )
    .join("\n");
  throw new Error(
    `Assertion errors detected.\n${errorMessages}`
  );
};
