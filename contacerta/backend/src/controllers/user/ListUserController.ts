import { Request, Response } from "express";
import { ListUserDetailsService } from "../../services/user/ListUserdetails";

class ListUserDetailsController {
    async handle(req: Request, res: Response) {
        const { user_id } = req.body

        const listUserDetails = new ListUserDetailsService()

        const user = await listUserDetails.execute({user_id})

        return res.json(user)
    }
}

export { ListUserDetailsController }