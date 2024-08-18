import { Request, Response } from "express";
import { ListGroupService } from "../../services/group/ListGroupsService";

class ListGroupsController {
    async handle(req: Request, res: Response) {

        const { user_id } = req.body

        const listGroups = new ListGroupService()

        const groups = await listGroups.execute({user_id})

        return res.json({
            groups: groups
        })
    }
}

export { ListGroupsController }