import prismaClient from "../../prisma";
import { Member } from "@prisma/client";

interface GroupRequest {
    user_id: string,
    group_id: string,
    members: Member[]
}

class AddMemberService {
    async execute({user_id, group_id, members}: GroupRequest) {
        const group = await prismaClient.group.update({
            where: {
                id: group_id,
                user_id: user_id
            },
            data: {
                members: {
                  upsert: members.map(member => ({
                    where: { id: member.id },
                    update: {
                      name: member.name,
                      rent: member.rent,
                      image: member.image,
                      group_id: group_id,
                    },
                    create: {
                      id: member.id,
                      name: member.name,
                      rent: member.rent,
                      image: member.image,
                      group_id: group_id,
                    }
                  })),
                },
            },
            include: {
                members: true
            }
        })
        
        return group
    }
}

export { AddMemberService }