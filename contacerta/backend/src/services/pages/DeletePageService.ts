import prismaClient from "../../prisma";

interface PageRequest {
    page_id: string
}

class DeletePageService {
    async execute({ page_id }: PageRequest) {
        const page = await prismaClient.page.delete({
            where: {
                id: page_id
            }
        })

        return page
    }
}

export { DeletePageService }