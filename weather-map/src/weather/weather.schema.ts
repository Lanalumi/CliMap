import { z } from "zod";

export const WeatherSchema = z.object({
  //   slug: z.string("Slug should be a string").min(1, "Slug can not be empty"),
  //   name: z.string("Name should be a string").min(1, "Name can not be empty"),
  //   description: z.string().nullable().optional(),
});

export type Weather = z.infer<typeof WeatherSchema>;
