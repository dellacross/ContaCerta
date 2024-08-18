import { Request, Response } from "express";
import { DeleteBankAccountService } from "../../services/bankaccount/DeleteBankAccountService";

class DeleteBankAccountController {
    async handle(req: Request, res: Response) {
        const { bank_account_id, user_id } = req.body

        const deleteBankAccount = new DeleteBankAccountService()

        const bankAccount = await deleteBankAccount.execute({bank_account_id, user_id})

        return res.json({
            message: `A conta ${bankAccount.name} e todas despesas relacionadas à ela foram deletadas.`,
            bankAccount: bankAccount
        })
    }
}

export { DeleteBankAccountController }