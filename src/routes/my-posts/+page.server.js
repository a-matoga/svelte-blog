import { Redirect } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";

export const load = async ({request, locals, cookies}) => {
    const user = locals.user;

    if(!user)
    {
      throw redirect(303, '/');
    }

    let posts = [];
  
    const prisma = new PrismaClient();
    posts = await prisma.post.findMany({
        where: {
            author:
            {
                id: user.id,
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
