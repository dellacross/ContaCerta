import { Request, Response } from "express";
import { CreateGroupService } from "../../services/group/CreateGroupService";

class CreateGroupController {
    async handle(req: Request, res: Response) {
        const { user_id, name } = req.body

        const createGroup = new CreateGroupService()

        const group = await createGroup.execute({user_id, name})

        return res.json({
            message: `Grupo ${name} criado com sucesso!`,
            group: group
        })
    }
}

export { CreateGroupController }