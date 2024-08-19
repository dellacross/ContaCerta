import prismaClient from "../../prisma";

interface ExpenseRequest {
    expense_id: string,
    user_id: string,
    description: string,
    date: string,
    value: string,
    category_id: string,
    payment_method_id: string,
    member_id: string,
    installments: number,
    payment_category_id: string
}

class EditExpenseService {
    async execute({ expense_id, user_id, description, date, value, category_id, 
                    payment_method_id, member_id, installments, payment_category_id }: ExpenseRequest) {

        const expense = prismaClient.expense.update({
            where: {
                id: expense_id,
                user_id: user_id
            },
            data: {
                description: description,
                date: date,
                value: value,
                category_id: category_id,
                payment_method_id: payment_method_id,
                member_id: member_id,
                installments: installments,
                payment_category_id: payment_category_id
            }
        })
        
        return expense
    }
}

export { EditExpenseService }