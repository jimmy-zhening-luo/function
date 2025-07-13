import {
  app,
  output,
} from "@azure/functions";
import type {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
  Timer,
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
    route: "hello/world",
    handler: hello,
  },
);

async function timedHello(
  timer: Timer,
  context: InvocationContext,
): Promise<Record<"hello", string>> {
  context.log("Timer function was triggered.");

  if (typeof timer !== "undefined")
    context.log("OK lmao");

  return { hello: "timed world" };
}

app.timer(
  "timedHello",
  {
    schedule: "0 */5 * * * *",
    "return": output.storageQueue({
      connection: "storage_APPSETTING",
      queueName: "fuck_you",
    }),
    handler: timedHello,
  },
);
