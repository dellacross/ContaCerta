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

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            groups: user.groups,
            members: user.members,
            bankAccounts: user.bankAccounts,
            created_at: user.created_at,
            image: user.image,
            admin: user.admin,
            nickname: user.nickname,
            rent: user.rent,
            balance: user.balance
        }
    }
}

export { ListUserDetailsService }