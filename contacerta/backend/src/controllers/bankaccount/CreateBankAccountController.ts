import { Request, Response } from "express";
import { CreateBankAccountService } from "../../services/bankaccount/CreateBankAccountService";

class CreateBankAccountController {
    async handle(req: Request, res: Response) {
        const { name, balance, user_id } = req.body

        const createBankAccount = new CreateBankAccountService()

        const bankAccount = await createBankAccount.execute({name, balance, user_id})

        return res.json({
            message: `A conta bancária ${name} foi cadastrada com sucesso!`,
            bankAccount: bankAccount
        })
    }
}

export { CreateBankAccountController }