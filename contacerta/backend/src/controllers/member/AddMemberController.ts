import { Request, Response } from "express";
import { AddMemberService } from "../../services/member/AddMemberService";

class AddMemberController {
    async handle(req: Request, res: Response) {
        const { user_id, group_id, name, rent, image } = req.body

        const addMember = new AddMemberService()

        const member = await addMember.execute({user_id, group_id, name, rent, image})

        return res.json({
            message: "Membro adicionado com sucesso!",
            members: member
        })
    }
}

export { AddMemberController }