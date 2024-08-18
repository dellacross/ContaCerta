import { Request, Response } from "express";
import { ListExpensesService } from "../../services/expense/ListExpensesService";

class ListExpensesController {
    async handle(req: Request, res: Response) {
        const { user_id } = req.body

        const listExpenses = new ListExpensesService()

        const expenses = await listExpenses.execute({user_id})
        
        return res.json(expenses)
    }
}

export { ListExpensesController }