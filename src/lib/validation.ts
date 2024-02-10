import { z } from "zod";
<<<<<<< HEAD:src/lib/validation.ts
=======
import { Job } from "@prisma/client";
>>>>>>> 68455b78f8496cf6e987445b9b65b623a8533e55:src/app/lib/validation.ts

export const jobFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

<<<<<<< HEAD:src/lib/validation.ts
export type JobFilterValues = z.infer<typeof jobFilterSchema>;
=======
export type JobFilterValues = z.infer<typeof jobFilterSchema>;
>>>>>>> 68455b78f8496cf6e987445b9b65b623a8533e55:src/app/lib/validation.ts
