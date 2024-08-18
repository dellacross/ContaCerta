import { Request, Response } from "express";
import { DeleteMemberService } from "../../services/member/DeleteMemberService";

class DeleteMemberController {
    async handle(req: Request, res: Response) {
        const { user_id, group_id, member_id } = req.body

        const deleteMember = new DeleteMemberService()

        const member = await deleteMember.execute({user_id, group_id, member_id})

        return res.json({
            message: `Membro ${member.name} deletado com sucesso!`,
            member: member
        })
    }   
}

export { DeleteMemberController }