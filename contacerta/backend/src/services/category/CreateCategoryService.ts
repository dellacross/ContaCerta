import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string,
    color: string
}

class CreateCategoryService {
    async execute({name, color}: CategoryRequest) {
        const category = prismaClient.category.create({
            data: {
                name: name,
                color: color
            }
        })

        return category
    }
}

export { CreateCategoryService }