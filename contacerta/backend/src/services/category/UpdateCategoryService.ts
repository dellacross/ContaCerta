import prismaClient from "../../prisma";

interface CategoryRequest {
    category_id: string,
    name: string,
    color: string
}

class UpdateCategoryService {
    async execute({category_id, name, color}: CategoryRequest) {
        const category = prismaClient.category.update({
            where: {
                id: category_id
            },
            data: {
                name: name,
                color: color
            }
        })

        return category
    }
}

export { UpdateCategoryService }