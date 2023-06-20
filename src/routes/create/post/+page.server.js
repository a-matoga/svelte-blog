import { PrismaClient } from "@prisma/client";
import { redirect } from "@sveltejs/kit";
import {writeFileSync} from 'fs';
import slugify from "slugify";


export const load = async ({ request, locals, cookies }) => {
    const user = locals.user;

    if(!user)
    {
      throw redirect(303, '/');
    }
};

export const actions = {
    'create': async ({ request, locals }) => {
      const data = await request.formData();

      const user = locals.user;
  
      const title = data.get('title');
      const abstract = data.get('abstract');
      const content = data.get('content');
      const image = data.get('image');

      const slug = slugify(title, { lower: true, locale: 'pl' });

      let split = image.type.split("/"); 
      const ext = split[1];
      const imageName = slug + '.' + ext;

      const imageBuffer = await image.arrayBuffer();
      writeFileSync(`static/${imageName}`, Buffer.from(imageBuffer));
  
      const prisma = new PrismaClient();
      await prisma.post.create({
        data: {
          title,
          slug,
          abstract,
          content,
          image: imageName,
          authorId: user.id
        }
      })
      prisma.$disconnect()
  
      return {success: true}
    }
  };