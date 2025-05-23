import { Request, Response } from "express";
import { RegisterUserService } from "../../services/user/RegisterUserService";

class RegisterUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, nickname } = req.body

        const registerUser = new RegisterUserService

        const user = await registerUser.execute({name, email, password, nickname})

        return res.json(user)
    }
}

export { RegisterUserController }