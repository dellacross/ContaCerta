import { Request, Response } from "express";
import { EditBankAccountService } from "../../services/bankaccount/EditBankAccountService";

class EditBankAccountController {
    async handle(req: Request, res: Response) {
        const { name, balance, bank_account_id, user_id } = req.body

        const editBankAccount = new EditBankAccountService()

        const bankAccount = await editBankAccount.execute({name, balance, bank_account_id, user_id})

        return res.json({
            message: `Os dados da conta ${name} foram atualizados`,
            bankAccount: bankAccount
        })
    }
}

export { EditBankAccountController }