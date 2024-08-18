import prismaClient from "../../prisma";

class ListCategoriesService {
    async execute() {
        const categories = prismaClient.category.findMany({
            select: {
                name: true,
                id: true
            }
        })

        return categories
    }
}

export { ListCategoriesService }