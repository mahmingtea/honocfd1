import { apiReference } from "@scalar/hono-api-reference";
import app from "../app";
// import app from "./openapidocs";

const reference = app.get(
  "/reference",
  apiReference({
    theme: "kepler",
    url: "/doc",
    defaultHttpClient: { targetKey: "js", clientKey: "axios" },
    pageTitle: "Api Reference",
  })
);

export default reference;
