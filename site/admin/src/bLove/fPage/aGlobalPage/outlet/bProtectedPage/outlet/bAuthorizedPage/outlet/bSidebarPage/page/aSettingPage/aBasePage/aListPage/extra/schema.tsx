import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const listSchema = z.object({
  _id: z.string(),
  title: z.string(),
})

export type ListSchema = z.infer<typeof listSchema>
