import prismaClient from "../../prisma";

class ListPagesService {
    async execute() {
        const pages = await prismaClient.page.findMany()

        return pages
    }
}

export { ListPagesService }