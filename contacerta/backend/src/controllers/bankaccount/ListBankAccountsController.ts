import { Request, Response } from "express";
import { ListBankAccountsService } from "../../services/bankaccount/ListBankAccountsService";

class ListBankAccountsController {
    async handle(req: Request, res: Response) {
        const { user_id } = req.body

        const listBankAccounts = new ListBankAccountsService()

        const bankAccount = await listBankAccounts.execute({user_id})

        return res.json(bankAccount)
    }
}

export { ListBankAccountsController }