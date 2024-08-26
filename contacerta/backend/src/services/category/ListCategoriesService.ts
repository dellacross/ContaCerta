import prismaClient from "../../prisma";

class ListCategoriesService {
    async execute() {
        const categories = await prismaClient.category.findMany({
            select: {
                name: true,
                id: true,
                color: true
            }
        })

        return categories
    }
}

export { ListCategoriesService }