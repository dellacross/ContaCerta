import { Request, Response } from "express";
import { ListAllUserService } from "../../services/user/ListAllUserService";

class ListAllUserController {
    async handle(req: Request, res: Response) {
        const listAllUsers = new ListAllUserService()

        const users = await listAllUsers.execute()

        return res.json(users)
    }
}

export { ListAllUserController }