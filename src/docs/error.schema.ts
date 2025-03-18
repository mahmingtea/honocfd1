import { z } from "@hono/zod-openapi";
export const zodError = z.object({
  success: z.boolean().openapi({ example: false }),
  error: z.object({
    issues: z.array(
      z.object({
        code: z.string().openapi({ example: "invalid_type" }),
        expected: z.string().openapi({ example: "number" }),
        received: z.string().openapi({ example: "nan" }),
        path: z.array(z.string().openapi({ example: "id" })),
        message: z
          .string()
          .openapi({ example: "Expected number, received nan" }),
      })
    ),
    name: z.string().openapi({ example: "ZodError" }).optional(),
  }),
});
