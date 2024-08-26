import prismaClient from "../../prisma";

interface PaymentCategoryRequest {
    name: string
}

class CreatePaymentCategoryService {
    async execute({name}: PaymentCategoryRequest) {

        const paymentCategoryAlreadyExists = await prismaClient.paymentCategory.findFirst({
            where: {
                name: name
            }
        })

        if(paymentCategoryAlreadyExists) throw new Error("Categoria de pagamento já existente")

        const payment = prismaClient.paymentCategory.create({
            data: {
                name: name
            }
        })

        return payment
    }
}

export { CreatePaymentCategoryService }