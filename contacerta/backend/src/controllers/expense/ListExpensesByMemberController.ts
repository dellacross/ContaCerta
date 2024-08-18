import { Request, Response } from "express";
import { ListExpensesByMemberService } from "../../services/expense/ListExpensesByMemberService";

class ListExpensesByMemberController {
    async handle(req: Request, res: Response) {
        const { user_id, member_id } = req.body

        const listExpensesByMember = new ListExpensesByMemberService()

        const expenses = await listExpensesByMember.execute({user_id, member_id})

        return res.json(expenses)
    }
}

export { ListExpensesByMemberController }