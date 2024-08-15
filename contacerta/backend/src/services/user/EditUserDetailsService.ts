import prismaClient from "../../prisma";

interface UserRequest {
    user_id: string,
    rent: number
}

class EditUserDetailsService {
    async execute({user_id, rent}: UserRequest) {

        const user = await prismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                rent: rent
            },
            select: {
                id: true,
                name: true,
                rent: true
            }
        })

        return user
    }
}

export { EditUserDetailsService }