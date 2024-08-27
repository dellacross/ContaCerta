import { Request, Response } from "express";
import { DeletePageService } from "../../services/pages/DeletePageService";

class DeletePageController {
    async handle(req: Request, res: Response) {
        const { page_id } = req.body;

        const deletePage = new DeletePageService()

        const page = await deletePage.execute({ page_id })

        return res.json({
            message: "Página deletada com sucesso!",
            page: page
        })
    }
}

export { DeletePageController }