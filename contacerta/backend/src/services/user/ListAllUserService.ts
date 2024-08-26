import prismaClient from "../../prisma";

class ListAllUserService {
    async execute() {
        const users = await prismaClient.user.findMany()

        return users
    }
}

export { ListAllUserService }