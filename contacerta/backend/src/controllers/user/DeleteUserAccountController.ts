import { Request, Response } from "express";
import { EndUserSessionService } from "../../services/user/DeleteUserAccountService";

class EndUserSessionController {
    async handle(req: Request, res: Response) {

        const { user_id } = req.body

        const endUserSession = new EndUserSessionService()

        await endUserSession.execute({user_id})

        return res.json({
            message: "Sessão finalizada."
        })

    }
}

export { EndUserSessionController }