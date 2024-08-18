import { Request, Response } from "express";
import { DeleteExpenseService } from "../../services/expense/DeleteExpenseService";

class DeleteExpenseController {
    async handle(req: Request, res: Response) {
        const { user_id, expense_id } = req.body

        const deleteExpense = new DeleteExpenseService()

        const expense = deleteExpense.execute({user_id, expense_id})

        return res.json({
            message: "Despesa deletada com sucesso!",
            expense: expense
        })
    }
}

export { DeleteExpenseController }