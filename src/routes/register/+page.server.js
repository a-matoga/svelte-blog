import { PrismaClient } from "@prisma/client";
import { fail } from "@sveltejs/kit";
import bcrypt from 'bcrypt';


export const actions = {
    "register": async ({ request }) => {
        const data = await request.formData();
        
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");

        

        const prisma = new PrismaClient();

        const inDatabase = await prisma.user.findFirst({
            where: {
                username: username,
                email: email
            }
        });

        if(inDatabase)
        {
            return fail(400, {exist: true});       
        }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);

        await prisma.user.create({
            data: {
                username,
                email,
                password: hash
            }
        });

        const users = await prisma.user.findMany();
        console.log(users);

        prisma.$disconnect
        return {success: true};
    }
};