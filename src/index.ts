import {
  app,
  HttpRequest,
  InvocationContext,
} from "@azure/functions";
import type { HttpResponseInit } from "@azure/functions";

async function hello(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(
    "Http function was triggered.",
  );

  if (request.url === "")
    context.log(
      "Pointless log so that TypeScript doesn't complain about not using param.",
    );

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
