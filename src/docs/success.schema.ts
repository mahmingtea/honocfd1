import { z } from "@hono/zod-openapi";
export const successSchema = z.object({
  success: z.boolean().openapi({ example: true }),
  meta: z.object({
    served_by: z.string().openapi({ example: "miniflare.db" }).optional(),
    duration: z.number().openapi({ example: 0 }),
    changes: z.number().openapi({ example: 1 }),
    last_row_id: z.number().openapi({ example: 3 }),
    changed_db: z.boolean().openapi({ example: true }),
    size_after: z.number().openapi({ example: 15432 }),
    rows_read: z.number().openapi({ example: 1 }),
    rows_written: z.number().openapi({ example: 3 }),
  }),
  results: z.array(z.any()).openapi({ example: [] }),
});
