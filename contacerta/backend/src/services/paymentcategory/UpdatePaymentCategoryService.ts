import prismaClient from "../../prisma";

interface PaymentCategoryRequest {
    payment_category_id: string,
    name: string
}

class UpdatePaymentCategoryService {
    async execute({ payment_category_id, name }: PaymentCategoryRequest) {
        const payment = prismaClient.paymentCategory.update({
            where: {
                id: payment_category_id
            },
            data: {
                name: name
            }
        })

        return payment
    }
}

export { UpdatePaymentCategoryService }