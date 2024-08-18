import prismaClient from "../../prisma";

interface BankAccountRequest {
    name: string,
    balance: string,
    user_id: string
}

class CreateBankAccountService {
    async execute({ name, balance, user_id }: BankAccountRequest) {
        const bankAccount = prismaClient.bankAccount.create({
            data: {
                name: name,
                balance: balance,
                user_id: user_id
            }
        })

        return bankAccount
    }
}

export { CreateBankAccountService }