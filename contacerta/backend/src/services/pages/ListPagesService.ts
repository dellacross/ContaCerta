import prismaClient from "../../prisma";

class ListPagesService {
    async execute() {
        const pages = await prismaClient.page.findMany({
            select: {
                id: true,
                pageName: true,
                adminOnly: true,
                endpoint: true
            }
        })

        return pages.sort(function (a, b) {
            if (a.pageName < b.pageName) return -1
            if (a.pageName > b.pageName) return 1
            return 0
        })
    }
}

export { ListPagesService }