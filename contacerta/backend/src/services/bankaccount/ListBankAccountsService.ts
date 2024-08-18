import prismaClient from "../../prisma";

interface BankAccountRequest {
    user_id: string
}

class ListBankAccountsService {
    async execute({ user_id }: BankAccountRequest) {
        const bankAccounts = prismaClient.bankAccount.findMany({
            where: {
                user_id: user_id
            }
        })

        return bankAccounts
    }
}

export { ListBankAccountsService }