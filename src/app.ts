import { OpenAPIHono } from "@hono/zod-openapi";

export type Bindings = {
  DB: D1Database;
};

const app = new OpenAPIHono<{ Bindings: Bindings }>();

export default app;
