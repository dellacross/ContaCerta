import { Request, Response } from "express";
import { AddMemberService } from "../../services/group/AddMemberService";

class AddMemberController {
    async handle(req: Request, res: Response) {
        const { user_id, group_id, members } = req.body

        const addMember = new AddMemberService()

        const _members = await addMember.execute({user_id, group_id, members})

        return res.json({
            message: "Membros adicionados com sucesso!",
            members: _members
        })
    }
}

export { AddMemberController }