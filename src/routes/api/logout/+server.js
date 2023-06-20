
export const DELETE = async ({ request, cookies }) => { 
    
    await cookies.delete('sessionID', { path: '/' });

    return new Response(true)
}