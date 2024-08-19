import prismaClient from "../../prisma";

interface ExpenseRequest {
    user_id: string,
    description: string,
    date: string,
    init_date: string,
    value: string,
    category_id: string,
    payment_method_id: string,
    member_id: string,
    installments: number,
    bank_account_id: string,
    payment_category_id: string
}

interface DateInterface {
    init_date: string,
    installments: number
}

function getLastMonth({init_date, installments}: DateInterface) {
    const newDate = new Date(init_date);
    newDate.setMonth(newDate.getMonth() + installments - 1);
    return newDate;
}

class CreateExpenseService {
    async execute({ user_id, description, date, init_date, value, category_id, 
                    payment_method_id, member_id, installments, bank_account_id, payment_category_id}: ExpenseRequest) {

        let last_date = undefined

        if(
            !user_id ||
            !description ||
            !date ||
            !value ||
            !category_id ||
            !payment_method_id ||
            !member_id 
        ) { throw new Error('Dados incompletos... Favor preencher todos campos.') }

        if(installments) last_date = getLastMonth({init_date, installments})
        
        const expense = prismaClient.expense.create({
            data: {
                user_id: user_id, 
                description: description,
                date: date,
                value: value,
                category_id: category_id,
                payment_method_id: payment_method_id,
                member_id: member_id,
                installments: installments,
                init_date: init_date,
                last_date: last_date,
                bank_account_id: bank_account_id,
                payment_category_id: payment_category_id
            }
        })

        return expense
    }
}

export { CreateExpenseService }