import prismaClient from "../../prisma";

interface ExpenseRequest {
    user_id: string,
    expense_id: string
}

class DeleteExpenseService {
    async execute({user_id, expense_id}: ExpenseRequest) {
        const expense = prismaClient.expense.delete({
            where: {
                user_id: user_id,
                id: expense_id
            }
        })

        return expense
    }
}

export { DeleteExpenseService }