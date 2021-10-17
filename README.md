# mime.ts

MIME Types resolver (getByExtension / getByName) for TypeScript

## Example

```ts
import { MIME } from "mime.ts";

console.log(MIME.getByExtension("pdf"));
// "application/pdf"

console.log(MIME.getByName("application/pdf"));
// "pdf"

```