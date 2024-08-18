import prismaClient from "../../prisma";

interface MemberRequest {
    user_id: string,
    group_id: string
}

class ListMembersService {
    async execute({ user_id, group_id }: MemberRequest) {
        const members = await prismaClient.member.findMany({
            where: {
                user_id: user_id,
                group_id: group_id
            }
        })

        if(members.length === 0) throw new Error("Lista de membros vazia...") 

        return members
    }
}

export { ListMembersService }