import prismaClient from "../../prisma";

interface PaymentCategoryRequest {
    name: string
}

class CreatePaymentCategoryService {
    async execute({name}: PaymentCategoryRequest) {
        const payment = prismaClient.paymentCategory.create({
            data: {
                name: name
            }
        })

        return payment
    }
}

export { CreatePaymentCategoryService }