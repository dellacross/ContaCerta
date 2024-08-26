import prismaClient from "../../prisma";

class ListPaymentCategoryService {
    async execute() {
        const payments = await prismaClient.paymentCategory.findMany({
            select: {
                id: true,
                name: true
            }
        })

        return payments
    }
}

export { ListPaymentCategoryService }