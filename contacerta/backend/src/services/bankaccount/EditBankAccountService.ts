import prismaClient from "../../prisma";

interface BankAccountRequest {
    bank_account_id: string,
    name: string,
    balance: string,
    user_id: string
}

class EditBankAccountService {
    async execute({bank_account_id, name, balance, user_id}: BankAccountRequest) {
        const bankAccount = prismaClient.bankAccount.update({
            where: {
                id: bank_account_id,
                user_id: user_id
            }, 
            data: {
                name: name,
                balance: balance
            }
        })

        return bankAccount
    }
}

export { EditBankAccountService }