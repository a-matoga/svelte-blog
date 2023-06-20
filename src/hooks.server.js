import { redirect } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const unProtectedRoutes = ['/', '/login', '/register', '/post'];

export const handle = async ({ event, request, resolve}) => {

    const session = event.cookies.get('sessionID');
    /*
    if (!sessionID && !unProtectedRoutes.includes(event.url.pathname)) {
        throw redirect(303, '/');
    }
    */
   if(!session){
    return resolve(event);
   }
        const prisma = new PrismaClient();
        const userInfo = await prisma.user.findUnique({
            where: {
                id: +session,
            }
        });
        prisma.$disconnect;

    if (userInfo) {
        event.locals.user = {
            isAuthenticated: true,
            email: userInfo.email,
            id: userInfo.id,
            avatar: userInfo.avatar,
            username: userInfo.username
        };
    } else if (!unProtectedRoutes.includes(event.url.pathname)) {
            throw redirect(303, '/');
    }

    const query = event.url.searchParams.get('logout');
    if (Boolean(query) == true) {
        await event.cookies.delete('sessionID', { path: '/' });
        throw redirect(303, '/');
    }

    return resolve(event);
};