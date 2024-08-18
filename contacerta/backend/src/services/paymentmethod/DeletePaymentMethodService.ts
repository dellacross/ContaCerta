import prismaClient from "../../prisma";

interface PaymentMethodRequest {
    payment_method_id: string
}

class DeletePaymentMethodService {
    async execute({payment_method_id}: PaymentMethodRequest) {
        const paymentMethod = prismaClient.paymentMethod.delete({
            where: {
                id: payment_method_id
            }
        })

        return paymentMethod
    }
}

export { DeletePaymentMethodService }