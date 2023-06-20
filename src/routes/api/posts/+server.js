import { PrismaClient } from "@prisma/client";
import {unlinkSync} from 'fs';

export const DELETE = async ({ request, locals }) => { 
    
    const data = await request.json();
    const user = locals.user;


    const prisma = new PrismaClient();


    const image = await prisma.post.findUnique({
        where: {
            id: data.postId
        },
        select:{
            image: true,
        }
    });

    if(image){
        unlinkSync(`static/${image.image}`);
    }

    const result = await prisma.post.delete({
        where: {
            id: data.postId
        }
    });

    let posts = [];
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
    });
  await prisma.$disconnect()

  return new Response(JSON.stringify(posts))
}