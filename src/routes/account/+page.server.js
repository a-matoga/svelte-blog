import { redirect } from "@sveltejs/kit";

export const load = async ({ request, locals, cookies }) => {
    const user = locals.user;

    if(!user)
    {
      throw redirect(303, '/');
    }
};