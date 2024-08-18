import prismaClient from "../../prisma";

interface PaymentMethodRequest {
    name: string
}

class CreatePaymentMethodService {
    async execute({ name }: PaymentMethodRequest) {
        const paymentMethod = prismaClient.paymentMethod.create({
            data: {
                name: name
            }
        })

        return paymentMethod
    }
}

export { CreatePaymentMethodService }