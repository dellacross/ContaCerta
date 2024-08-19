import prismaClient from "../../prisma";

interface PaymentCategoryRequest {
    payment_category_id: string
}

class DeletePaymentCategoryService {
    async execute({payment_category_id }: PaymentCategoryRequest) {
        const payment = prismaClient.paymentCategory.delete({
            where: {
                id: payment_category_id
            }
        })

        return payment
    }
}

export { DeletePaymentCategoryService }