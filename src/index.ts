import {
  app,
} from "@azure/functions";
import type {
  HttpResponseInit,
  HttpRequest,
  InvocationContext,
} from "@azure/functions";

async function hello(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  context.log(
    "Http function was triggered.",
  );

  if (typeof request !== "undefined")
    context.log("OK");

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
    handler: hello,
  },
);
