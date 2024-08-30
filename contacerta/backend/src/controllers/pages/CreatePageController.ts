import { Request, Response } from "express";
import { CreatePageService } from "../../services/pages/CreatePageService";

class CreatePageController {
  async handle(req: Request, res: Response) {
    const { pageName, adminOnly, endpoint } = req.body;

    const createPageService = new CreatePageService();

    const page = await createPageService.execute({ pageName, adminOnly, endpoint });

    return res.json({
        message: "Página criada com sucesso!",
        page: page
    })
  }
}

export { CreatePageController }