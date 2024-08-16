import prismaClient from "../../prisma";

interface UserRequest {
    user_id: string
}

class EndUserSessionService {
    async execute({user_id}: UserRequest) {
        await prismaClient.user.delete({
            where: {
                id: user_id
            }
        })
    }
}

export { EndUserSessionService }