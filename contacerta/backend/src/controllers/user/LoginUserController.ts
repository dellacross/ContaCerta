import { Request, Response } from "express";
import { LoginUserService } from "../../services/user/LoginUserService";

class LoginUserController {
    async handle(req: Request, res: Response) {
        const {email, password} = req.body

        const loginUser = new LoginUserService()

        const auth = await loginUser.execute({email, password})

        return res.json(auth)
    }
}

export { LoginUserController }