import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

async function hello(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(
    "Http function was triggered.",
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
