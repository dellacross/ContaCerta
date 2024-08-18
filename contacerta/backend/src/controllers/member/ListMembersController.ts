import { Request, Response } from "express";
import { ListMembersService } from "../../services/member/ListMembersService";

class ListMembersController {
    async handle(req: Request, res: Response) {

        const { user_id, group_id } = req.body

        const listMembers = new ListMembersService()

        const members = await listMembers.execute({user_id, group_id})

        return res.json(members)
    }
}

export { ListMembersController }