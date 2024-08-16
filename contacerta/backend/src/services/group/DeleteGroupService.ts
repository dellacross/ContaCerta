import prismaClient from "../../prisma";

interface GroupRequest {
    user_id: string,
    group_id: string
}

class DeleteGroupService {
    async execute({user_id, group_id}: GroupRequest) {
        const group = await prismaClient.group.delete({
            where: {
                user_id: user_id,
                id: group_id
            }
        })

        if(!group) throw new Error("Grupo não encontrado...")

        return group
    }
}

export { DeleteGroupService }