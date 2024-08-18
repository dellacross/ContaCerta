import { Request, Response } from "express";
import { CreateExpenseService } from "../../services/expense/CreateExpenseService";

class CreateExpenseController {
    async handle(req: Request, res: Response) {
        const { 
            user_id, 
            description, 
            date, 
            value, 
            category_id, 
            payment_method_id, 
            member_id, 
            installments,
            init_date,
            bank_account_id
        } = req.body

        const createExpense = new CreateExpenseService()

        const expense = await createExpense.execute({
            user_id, 
            description, 
            date, 
            init_date,
            value, 
            category_id, 
            payment_method_id, 
            member_id, 
            installments,
            bank_account_id
        })

        return res.json({
            message: "Despesa adicionada com sucesso!",
            expense: expense
        })
    }
}

export { CreateExpenseController }