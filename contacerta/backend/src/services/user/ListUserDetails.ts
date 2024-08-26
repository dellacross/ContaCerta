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
            include: {
                groups: true,
                members: true,
                bankAccounts: true
            }
        })

        return user
    }
}

export { ListUserDetailsService }