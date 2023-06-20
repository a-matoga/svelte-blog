import { PrismaClient } from "@prisma/client";
import { fail, redirect } from "@sveltejs/kit";
import bcrypt from 'bcrypt';

export const actions = {
    "login": async ({ request, cookies }) => {

        const data = await request.formData();
        const username = data.get("username");
        const password = data.get("password");

        const prisma = new PrismaClient();

        const user = await prisma.user.findFirst({
            where: {
                username: username,
            }
        });



        let checkPassword = false;

        if(user != null)
        {
            checkPassword = await bcrypt.compare(password, user.password);
        }

        if(!checkPassword)
        {
            return fail(400, {incorrect: true});       
        }
        prisma.$disconnect;

        const id = {
            id: user.id,
            username: user.username,
            email: user.email,
            avatar: user.avatar
        };


        cookies.set('sessionID', user.id, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: false,
            maxAge: 60*60*24
        });

        throw redirect(303, "/")
    }
};