import prismaClient from "../../prisma";

class ListPaymentMethodsService {
    async execute() {
        const paymentsMethods = prismaClient.paymentMethod.findMany({
            select: {
                name: true,
                id: true
            }
        })

        return paymentsMethods
    }
}

export { ListPaymentMethodsService }