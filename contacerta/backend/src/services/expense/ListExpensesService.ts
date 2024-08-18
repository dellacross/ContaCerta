import prismaClient from "../../prisma";

interface ExpenseRequest {
    user_id: string
}

class ListExpensesService {
    async execute({user_id}: ExpenseRequest) {
        const expenses = prismaClient.expense.findMany({
            where: {
                user_id: user_id
            }
        })

        return expenses
    }
}

export { ListExpensesService }