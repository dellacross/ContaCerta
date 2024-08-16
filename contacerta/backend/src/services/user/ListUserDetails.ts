import prismaClient from "../../prisma";

interface UserRequest {
    user_id: string
}

class ListUserDetailsService {
    async execute({ user_id }: UserRequest) {

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                name: true,
                email: true,
                rent: true,
                image: true,
                created_at: true,
                updated_at: true
            }
        })

        return user
    }
}

export { ListUserDetailsService }