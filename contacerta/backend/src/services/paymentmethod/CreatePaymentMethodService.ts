import prismaClient from "../../prisma";

interface PaymentMethodRequest {
    name: string
}

class CreatePaymentMethodService {
    async execute({ name }: PaymentMethodRequest) {

        const paymentMethodAlreadyExists = await prismaClient.paymentMethod.findFirst({
            where: {
                name: name
            }
        })

        if(paymentMethodAlreadyExists) throw new Error("Método de pagamento já existente")

        const paymentMethod = await prismaClient.paymentMethod.create({
            data: {
                name: name
            }
        })

        return paymentMethod
    }
}

export { CreatePaymentMethodService }