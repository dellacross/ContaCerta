import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";

class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { category_id, name, color } = req.body

        const updateCategory = new UpdateCategoryService()

        const category = await updateCategory.execute({category_id, name, color})

        return res.json({
            message: `Categoria ${category.name} atualizada com sucesso!`,
            category: category
        })
    }
}

export { UpdateCategoryController }