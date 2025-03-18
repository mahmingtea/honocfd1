import app from "../app";

const doc = app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "0.0.1",
    title: "Cloudflare D1 test",
  },
});

export default doc;
