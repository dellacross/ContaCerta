import prismaClient from "../../prisma";

interface GroupRequest {
    user_id: string,
    name: string
}

class CreateGroupService {
    async execute({ user_id, name }: GroupRequest) {

        const groupAlreadyExists = await prismaClient.group.findFirst({
            where: {
                user_id: user_id,
                name: name
            }
        })

        if(groupAlreadyExists) throw new Error("Esse nome já foi utilizado!")

        const group = await prismaClient.group.create({
            data: {
                user_id: user_id,
                name: name
            }
        })

        return group
    }
}

export { CreateGroupService }