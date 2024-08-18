import prismaClient from "../../prisma";

interface GroupRequest {
    user_id: string
}

class ListGroupService {
    async execute({user_id} : GroupRequest) {
        const listGroups = await prismaClient.group.findMany({
            where: {
                user_id: user_id
            }
        })

        return listGroups
    }
}

export { ListGroupService }