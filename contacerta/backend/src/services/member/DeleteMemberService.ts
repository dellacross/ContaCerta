import prismaClient from "../../prisma";

interface MemberRequest {
    user_id: string,
    group_id: string,
    member_id: string
}

class DeleteMemberService {
    async execute({user_id, group_id, member_id}: MemberRequest) {
        const member = await prismaClient.member.delete({
            where: {
                user_id: user_id,
                group_id: group_id,
                id: member_id
            }
        })

        return member
    }
}

export { DeleteMemberService }