import prisma from "../infra/database";
import { Weather } from "./weather.schema";

export async function createCategory(weather: Weather) {
  return prisma.weather.create({
    // data: {
    //   name: weather.name.trim(),
    //   slug: weather.slug.trim(),
    //   description: weather.description?.trim() ?? "",
    // },
  });
}

// export async function getCategoryByIdOrSlug(idOrSlug: string) {
//   const categoryById = await prisma.category.findUnique({
//     where: { id: idOrSlug },
//   });

//   return prisma.category.update({
//     where:
//     data: {
//       city: data.city?.trim(),
//       : data.slug?.trim(),
//     },
//   });
// }
