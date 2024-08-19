import prismaClient from "../../prisma";

class ListPaymentCategoryService {
    async execute() {
        const payments = prismaClient.paymentCategory.findMany({
            select: {
                id: true,
                name: true
            }
        })

        return payments
    }
}

export { ListPaymentCategoryService }