import prismaClient from "../../prisma";

interface PaymentMethodRequest {
    name: string,
    payment_method_id: string
}

class EditPaymentMethodService {
    async execute({ name, payment_method_id }: PaymentMethodRequest) {
        const paymentMethod = await prismaClient.paymentMethod.update({
            where: {
                id: payment_method_id
            },
            data: {
                name: name
            }
        })

        return paymentMethod
    }
}

export { EditPaymentMethodService }