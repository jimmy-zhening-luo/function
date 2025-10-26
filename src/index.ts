import { app } from "@azure/functions";
import type {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

/* eslint ts/require-await: 0 */
async function hello(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  context.log("Function invoked");

  if (typeof request !== "undefined")
    context.log("Function received request");

  context.log("Function responding 'Hello'");

  return {
    body: "Hello, world!",
  };
}

app.http(
  "hello",
  {
    methods: [
      "GET",
      "POST",
    ],
    route: "hello",
    handler: hello,
  },
);
