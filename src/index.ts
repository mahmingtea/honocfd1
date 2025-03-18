import { logger } from "hono/logger";
import reference from "./docs/reference";
import comments from "./route/comments/comments.handler";
import app from "./app";
import doc from "./docs/openapidocs";
app.use(logger());
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/init", async (c) => {
  try {
    let results = await c.env.DB.exec(
      "CREATE TABLE IF NOT EXISTS comments (id integer PRIMARY KEY AUTOINCREMENT,author text NOT NULL,body text NOT NULL,post_slug text NOT NULL);"
    );
    console.log(results);
    return c.json(results);
  } catch (e: any) {
    console.log({ error: e.message });
    return c.json({ error: e.message });
  }
});

app.route("/", comments);
app.route("/", reference);
app.route("/", doc);

export default app;
