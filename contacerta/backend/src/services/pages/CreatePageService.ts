import prismaClient from "../../prisma";

interface PageRequest {
    pageName: string,
    adminOnly: boolean
}

class CreatePageService {
  async execute({ pageName, adminOnly }: PageRequest) {
    const page = await prismaClient.page.create({
      data: { 
        pageName: pageName,
        adminOnly: adminOnly
      }
    })

    return page;
  }
}

export { CreatePageService }