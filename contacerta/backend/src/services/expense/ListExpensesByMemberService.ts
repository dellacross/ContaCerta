import prismaClient from "../../prisma";

interface ExpenseRequest {
    user_id: string,
    member_id: string
}

class ListExpensesByMemberService {
    async execute({user_id, member_id}: ExpenseRequest) {
        const expenses = prismaClient.expense.findMany({
            where: {
                user_id: user_id,
                member_id: member_id
            }
        })

        return expenses
    }
}

export { ListExpensesByMemberService }