import { PrismaClient } from "@prisma/client";

export const load = async ({ params }) => {
  
  const prisma = new PrismaClient()

  const post = await prisma.post.findFirst({
    where: {
      slug: params.slug
    },
    include: {
        author: {
            select:{
                username: true,
            }
        }
    }
  })

  await prisma.$disconnect();

  return { post }
}