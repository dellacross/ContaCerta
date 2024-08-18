import prismaClient from "../../prisma";

interface BankAccountRequest {
    bank_account_id: string,
    user_id: string
}

class DeleteBankAccountService {
    async execute({bank_account_id, user_id}: BankAccountRequest) {
        const bankAccount = prismaClient.bankAccount.delete({
            where: {
                id: bank_account_id,
                user_id: user_id
            }
        })

        prismaClient.expense.deleteMany({
            where: {
                id: bank_account_id,
                user_id: user_id
            }
        })

        return bankAccount
    }
}

export { DeleteBankAccountService }