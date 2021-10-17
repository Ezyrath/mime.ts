import { MIME } from "../mime.ts";

Deno.test("getByExtension", () => {
  if (
    MIME.getByExtension("pdf") !== "application/pdf" ||
    MIME.getByExtension("css") !== "text/css" ||
    MIME.getByExtension("gif") !== "image/gif"
  ) {
    throw ("getByExtension return bad value !");
  }
});

Deno.test("getByName", () => {
  if (
    MIME.getByName("application/pdf") !== "pdf" ||
    MIME.getByName("text/css") !== "css" ||
    MIME.getByName("image/gif") !== "gif"
  ) {
    throw ("getByName return bad value !");
  }
});

Deno.test("getByExtension default", () => {
  if (
    MIME.getByExtension("test") !== "text/plain"
  ) {
    throw ("getByExtension return bad value by default !");
  }
});

Deno.test("getByName default", () => {
  if (
    MIME.getByName("test/test") !== "txt"
  ) {
    throw ("getByName return bad value by default !");
  }
});
