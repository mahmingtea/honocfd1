import { Bindings } from "../../app";
import {
  deleteCommentsRoute,
  getCommentsRoute,
  insertCommentsRoute,
  patchCommentsRoute,
  putCommentsRoute,
} from "./comments.route";
import { OpenAPIHono } from "@hono/zod-openapi";

const comments = new OpenAPIHono<{ Bindings: Bindings }>();
comments.openapi(getCommentsRoute, async (c) => {
  const id = c.req.param("id");
  let { results } = await c.env.DB.prepare(
    "SELECT * FROM comments where id = ?"
  )
    .bind(id)
    .run();
  return c.json(results);
});
comments.openapi(insertCommentsRoute, async (c) => {
  const req = c.req.json();
  const body = await req;
  let res = await c.env.DB.prepare(
    "INSERT INTO comments (author, body, post_slug) VALUES (?, ?, ?)"
  )
    .bind(body.author, body.body, body.post_slug)
    .all();
  return c.json(res, 201);
});
comments.openapi(deleteCommentsRoute, async (c) => {
  const id = c.req.param("id");
  let result = await c.env.DB.prepare("DELETE FROM comments where id = ?")
    .bind(id)
    .run();
  return c.json(result, 200);
});
comments.openapi(putCommentsRoute, async (c) => {
  const id = c.req.param("id");
  const req = c.req.json();
  const body = await req;
  let results = await c.env.DB.prepare(
    "UPDATE comments SET author = ?, body = ?, post_slug = ? where id = ?"
  )
    .bind(body.author, body.body, body.post_slug, id)
    .all();
  return c.json(results, 200);
});
comments.openapi(patchCommentsRoute, async (c) => {
  const id = c.req.param("id");
  const req = c.req.json();
  const body = await req;
  let results = await c.env.DB.prepare(
    "UPDATE comments SET body = ? where id = ?"
  )
    .bind(body.body, id)
    .all();
  return c.json(results, 200);
});

export default comments;
