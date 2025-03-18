import { createRoute } from "@hono/zod-openapi";
import {
  CommentsSchema,
  insertCommentsSchema,
  ParamsSchema,
  patchCommentsSchema,
} from "../../docs/comments.schema";
import { successSchema } from "../../docs/success.schema";
import { zodError } from "../../docs/error.schema";

export const getCommentsRoute = createRoute({
  method: "get",
  path: "/comments/{id}",
  summary: "get comment",
  description: "/comments",
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: CommentsSchema,
        },
      },
      description: "Success return",
    },
    400: {
      content: {
        "application/json": {
          schema: zodError,
        },
      },
      description: "Bad request",
    },
  },
});

export const insertCommentsRoute = createRoute({
  method: "post",
  path: "/comments",
  summary: "insert comment",
  description: "/comments",
  request: {
    body: {
      content: {
        "application/json": {
          schema: insertCommentsSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Success return",
      content: {
        "application/json": {
          schema: successSchema,
        },
      },
    },
    400: {
      content: {
        "application/json": {
          schema: zodError,
        },
      },
      description: "Bad request",
    },
  },
});

export const deleteCommentsRoute = createRoute({
  method: "delete",
  path: "/comments/{id}",
  summary: "delete comment",
  description: "/comments",
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: successSchema,
        },
      },
      description: "Success return",
    },
    400: {
      content: {
        "application/json": {
          schema: zodError,
        },
      },
      description: "Bad request",
    },
  },
});

export const putCommentsRoute = createRoute({
  method: "put",
  path: "/comments/{id}",
  summary: "update comment",
  description: "/comments",
  request: {
    params: ParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: insertCommentsSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: successSchema,
        },
      },
      description: "Success return",
    },
    400: {
      content: {
        "application/json": {
          schema: zodError,
        },
      },
      description: "Bad request",
    },
  },
});

export const patchCommentsRoute = createRoute({
  method: "patch",
  path: "/comments/{id}",
  summary: "update comment body",
  description: "/comments",
  request: {
    params: ParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: patchCommentsSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: successSchema,
        },
      },
      description: "Success return",
    },
    400: {
      content: {
        "application/json": {
          schema: zodError,
        },
      },
      description: "Bad request",
    },
  },
});
