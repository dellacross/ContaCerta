import { Request, Response } from "express";
import { DeleteGroupService } from "../../services/group/DeleteGroupService";

class DeleteGroupController {
    async handle(req: Request, res: Response) {
        const { user_id, group_id } = req.body

        const deleteGroup = new DeleteGroupService()

        const group = await deleteGroup.execute({user_id, group_id})

        return res.json({
            message: `Grupo ${group.name} apagado com sucesso!`,
            group: group
        })
    } 
}

export { DeleteGroupController }