import { Request, Response } from "express";
import { EditExpenseService } from "../../services/expense/EditExpenseService";

class EditExpenseController {
    async handle(req: Request, res: Response) {
        const {
            expense_id,
            user_id, 
            description, 
            date, 
            value, 
            category_id, 
            payment_method_id, 
            member_id, 
            installments,
            payment_category_id
        } = req.body

        const editExpense = new EditExpenseService()

        const expense = await editExpense.execute({
            expense_id,
            user_id, 
            description, 
            date, 
            value, 
            category_id, 
            payment_method_id, 
            member_id, 
            installments,
            payment_category_id
        })

        return res.json({
            message: `Despesa editada com sucesso!`,
            expense: expense
        })
    }
}

export { EditExpenseController }