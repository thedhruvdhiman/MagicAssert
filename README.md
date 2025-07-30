# magic-assert

`magic-assert` is a lightweight assertion library for TypeScript and JavaScript, designed to collect assertion errors and throw them all at once. This allows your code to continue executing until you explicitly check for failures.

You can use it in any testing framework, where you want to complete the e2e journey but also want to know the issues found in the end without exiting the flow in the middle.

> How will this help?
> 
> If using `node:assert` or any other similar assertion library, the error is thrown the instant an error is found, 
> which results in execution halt in the middle, but using `magic-assert` we can now complete the e2e journey flow to 
> verify everything works and checking all important verifications along the way.
> Like this we find bugs and also verify the user journey works perfectly fine.

---

## Features

- Collects multiple assertion errors before throwing.
- Simple API for common assertions.
- Works seamlessly with TypeScript and JavaScript.

---

## API Reference

All assertion methods record errors but do not throw immediately. Call `assertAll()` to throw if any errors were recorded.

```ts
equals(actual: any, expected: any, message: string): void
includes(actual: string, expected: string, message: string): void
isTrue(value: boolean, message: string): void
isFalse(value: boolean, message: string): void
notEqual(actual: any, expected: any, message: string): void
greaterThan(actual: number, expected: number, message: string): void
isLessThan(actual: number, expected: number, message: string): void
notNull(value: any, message: string): void
isNull(value: any, message: string): void
isUndefined(value: any, message: string): void
isDefined(value: any, message: string): void
isNumber(value: any, message: string): void
isString(value: any, message: string): void
assertAll(): void
```

---

Now you can import and use `MagicAssert` anywhere in your project:

```ts
import { MagicAssert } from 'magic-assert';

class Foo {
    private magic = new MagicAssert();

    function fun() {
        this.magic.equals('magic', 'assert', 'Custom message in case of a failure');
        this.magic.assertAll();
    }
}

const foo = new Foo();
foo.fun();
```
The output will be as follows:

```text
Custom message in case of a failure
Actual: magic is not equal to Expected: assert

// Followed by stack
```

---
**Notes:**
- Always call `assertAll()` at the end to throw collected errors.
- If `assertAll()` is not called, execution continues even if assertions fail.


---

## Best Practices

- Use descriptive messages for each assertion to make debugging easier.
- Call `assertAll()` whenever and wherever you want to throw collected errors.

---

## License

ISC License

Copyright (c) [2025] [Dhruv Dhiman]

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
