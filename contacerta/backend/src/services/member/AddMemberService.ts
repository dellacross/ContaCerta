import prismaClient from "../../prisma";

interface MemberRequest {
  user_id: string,
  group_id: string,
  name: string,
  rent: number,
  image: string
}

class AddMemberService {
  async execute({user_id, group_id, name, rent, image}: MemberRequest) {

    const memberAlreadyExists = await prismaClient.member.findFirst({
      where: {
        name: name,
        group_id: group_id,
        user_id: user_id
      }
    })

    if(memberAlreadyExists) throw new Error("Membro já existente nesse grupo")

    const member = await prismaClient.member.create({
      data: {
        name: name,
        rent: rent,
        image: image,
        group_id: group_id,
        user_id: user_id
      }
    })
      
    return member
  }
}

export { AddMemberService }