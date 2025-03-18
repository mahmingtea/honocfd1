import { z } from "@hono/zod-openapi";

export const ParamsSchema = z.object({
  id: z.coerce
    .number()
    .min(1)
    .openapi({
      param: {
        name: "id",
        in: "path",
      },
      example: 1,
    }),
});

export const CommentsSchema = z
  .object({
    id: z.number().openapi({
      example: 123,
    }),
    author: z.string().openapi({
      example: "John Doe",
    }),
    body: z.string().openapi({
      example: "Comments body",
    }),
    post_slug: z.string().openapi({
      example: "new",
    }),
  })
  .openapi("comment");

export const insertCommentsSchema = z.object({
  author: z.string().openapi({
    example: "John Doe",
  }),
  body: z.string().openapi({
    example: "Comments body",
  }),
  post_slug: z.string().openapi({
    example: "new",
  }),
});

export const patchCommentsSchema = z.object({
  body: z.string().openapi({
    example: "new updated body",
  }),
});
