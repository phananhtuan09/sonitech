import { z } from 'zod';

export const loginSchema = z.object({
  userid: z.string({
    required_error: 'userid is required',
    invalid_type_error: 'userid must be a string',
  }),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string',
  }),
  selectmode: z.optional(
    z.string({
      invalid_type_error: 'selectmode must be a string',
    }),
  ),
});
