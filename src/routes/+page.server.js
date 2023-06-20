import { PrismaClient } from "@prisma/client";

export const load = async () => {
    let posts = [];
  
    const prisma = new PrismaClient();
    posts = await prisma.post.findMany({
        include: {
            author: {
                select:{
                    username: true,
                }
            }
        },
        orderBy: {
            createdAt: "desc",
          }
    })
    prisma.$disconnect()

    return {
      posts
    }
  }