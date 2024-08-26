import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string,
    color: string
}

class CreateCategoryService {
    async execute({name, color}: CategoryRequest) {

        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })

        if(categoryAlreadyExists) throw new Error("Categoria já existente")

        const colorAlreadyExists = await prismaClient.category.findFirst({
            where: {
                color: color
            }
        })

        if(colorAlreadyExists) throw new Error("Cor já utilizada")

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