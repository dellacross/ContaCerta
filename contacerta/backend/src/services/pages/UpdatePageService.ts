import prismaClient from "../../prisma";

interface PageRequest {
    page_id: string,
    pageName: string
}

class UpdatePageService {
    async execute({ page_id, pageName }: PageRequest) {
        const page = await prismaClient.page.update({
            where: {
                id: page_id
            },
            data: {
                pageName: pageName
            }
        })

        return page
    }
}

export { UpdatePageService }
