import { Request, Response } from "express";
import { EditUserDetailsService } from "../../services/user/EditUserDetailsService";

class EditUserDetailsController {
    async handle(req: Request, res: Response) {

        const { user_id, rent } = req.body

        const editUserDetails = new EditUserDetailsService()

        const user = await editUserDetails.execute({user_id, rent})

        return res.json({
            message: "Valor atualizado com sucesso!",
            user: user
        })
    }
}

export { EditUserDetailsController }