import prismaClient from "../../prisma";

interface PageRequest {
    pageName: string,
    adminOnly: boolean,
    endpoint: string
}

class CreatePageService {
  async execute({ pageName, adminOnly, endpoint }: PageRequest) {
    const page = await prismaClient.page.create({
      data: { 
        pageName: pageName,
        adminOnly: adminOnly,
        endpoint: endpoint
      }
    })

    return page;
  }
}

export { CreatePageService }