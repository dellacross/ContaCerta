import prismaClient from "../../prisma";
import { Member } from "@prisma/client";

interface GroupRequest {
    user_id: string,
    group_id: string,
    members_ids: Member[]
}

class AddMemberService {
    async execute({user_id, group_id, members_ids}: GroupRequest) {
        const membersToAdd = members_ids.map(id => id)

        const group = await prismaClient.group.update({
            where: {
                id: group_id,
                user_id: user_id
            },
            data: {
                members: {
                    connect: membersToAdd
                }
            }
        })
        console.log("aaa", group)
        //return group
    }
}

export { AddMemberService }