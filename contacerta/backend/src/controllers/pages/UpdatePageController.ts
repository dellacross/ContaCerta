import { Request, Response } from "express";
import { UpdatePageService } from "../../services/pages/UpdatePageService";

class UpdatePageController {
    async handle(req: Request, res: Response) {
        const { page_id, pageName } = req.body;

        const updatePageService = new UpdatePageService()
        const page = await updatePageService.execute({ page_id, pageName });

        return res.json({
            message: "Página atualizada com sucesso!",
            page: page
        })
    }
}

export { UpdatePageController }